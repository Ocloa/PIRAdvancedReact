const list = [1, 2, 3, 4, 5]

const getLazy = (obj) => {
    const iterator = typeof obj.next === 'function' && obj.next.constructor.name === 'AsyncFunction'
    ? obj
    : {
        [Symbol.asyncIterator]: async function* () {
            let index = 0;
            for await (let value of obj) {
                yield { value, index };
                index++;
            }
        }
    };

    return new Proxy(
        iterator,
        {
            get(_, prop) {
                switch (prop) {
                    case 'map':
                        return predicat => {
                            return getLazy({
                                [Symbol.asyncIterator] : async function* () {
                                    for await (let {value} of iterator) {
                                        yield predicat(value);
                                    }
                                }
                            })
                        }
                    case 'take':
                        return count => getLazy({
                            [Symbol.asyncIterator]: async function* () {
                                for await (let { value, index } of iterator) {
                                    if (index >= count) break;
                                    yield value;
                                }
                            }
                        });
                    case 'filter':
                        return ll => getLazy({
                            [Symbol.asyncIterator]:async function* () {
                                for await (let { value, index } of iterator) {
                                    if (ll(value)) yield value;
                                }
                            }
                        });
                    default:
                        return Reflect.get(...arguments)
                }   
            }
        }
    )
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const lazyIterator = getLazy(list)
.map(async (x) => {await delay(1000);return x + 10})
.map(x => {return x + 1})
.filter(x => x != 13)
.take(3)
.map(x => {return x ** 2})

(async () => {
    for await (let {value} of lazyIterator) {
        console.log(value);
    }
})();