function proxyUtility(target = {}) {
    const handler = {
      get(obj, prop) {
        if (!(prop in obj)) {
          obj[prop] = proxyUtility(); 
        }
        return obj[prop];
      },

      set(obj, prop, value) {
        obj[prop] = value;
        return true;
      },

      ownKeys(obj) {
        return Reflect.ownKeys(obj);
      },

      getOwnPropertyDescriptor(obj, prop) {
        return {
          configurable: true,
          enumerable: true,
          writable: true,
          value: obj[prop],
        };
      }
    };
  
    target.toJSON = function() {
      return deepCloneWithoutProxy(this);
    };
  
    return new Proxy(target, handler);
  }

  function deepCloneWithoutProxy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepCloneWithoutProxy(obj[key]);
      }
    }
    return clone;
  }
  
  const ProxiedObject = proxyUtility({ x: 10 })

  ProxiedObject.a = 1
  // ProxiedObject: { a: 1, x: 10 }
  
  ProxiedObject.b.c.d = 2
  // ProxiedObject: { a: 1, b: { c: { d: 2 } }, x: 10 }
  
  console.log(JSON.stringify(ProxiedObject))
  // {"a":1,"b":{"c":{"d":2}},"x":10}
  