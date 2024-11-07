const curry = (func, delay, delaySinceCompletion, waitForPrevious, queueLimit) => {
    let queue = [];
    let lastCallTime = null;
    let lastCompletionTime = null;
    let isProcessing = false;

    const executeNext = () => {
        if (isProcessing || queue.length === 0) return;

        isProcessing = true;
        const { args, resolve, reject } = queue.shift();

        const execute = async () => {
            lastCallTime = Date.now();
            try {
                const result = await func(...args);
                lastCompletionTime = Date.now();
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                isProcessing = false;
                executeNext();
            }
        };

        const delayTime = delaySinceCompletion
            ? Math.max(0, delay - (Date.now() - (lastCompletionTime || 0)))
            : Math.max(0, delay - (Date.now() - (lastCallTime || 0)));

        setTimeout(execute, delayTime);
    };

    return (...args) => {
        return new Promise((resolve, reject) => {
            if (queueLimit && queue.length >= queueLimit) {
                reject(new Error(`Превышен лимит очереди: ${queueLimit}. Не удалось выполнить с аргументом: ${args}`));
                return;
            }

            queue.push({ args, resolve, reject });
            if (!waitForPrevious || !isProcessing) {
                executeNext();
            }
        });
    };
};

const myFunc = (x) => {
    console.log(`Запущен с аргументом ${x}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Выполнен с аргументом ${x}`);
            resolve();
        }, 1000);
    });
};

const debounced = curry(myFunc, 1000, true, true, 5);

debounced("1")
debounced("2")
debounced("3")
debounced("4")
debounced("5")
debounced("6")
