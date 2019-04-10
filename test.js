
// const jso = JSON.stringify(obj);
// const jso2 = JSON.parse(jso);

// console.log(obj);
// console.log(jso);

// (function () {
    function parseDotNotation(str, val, obj) {
        var currentObj = obj,
            keys = str.split("."),
            i, l = Math.max(1, keys.length - 1),
            key;
            
        for (i = 0; i < l; ++i) {
            key = keys[i];
            currentObj[key] = currentObj[key] || {};
            currentObj = currentObj[key];
        }
        
        currentObj[keys[i]] = val;
        delete obj[str];
    }
    
    aexpand = function (obj) {
        for (var key in obj) {
            if (key.indexOf(".") !== -1) {
                parseDotNotation(key, obj[key], obj);
            }
        }
        return obj;
    };
    
// })();

const obj = {
    'name': 'assmuni',
    'address.regioin': 'jembrana',
    'address.street': 'Jl. Tanjung rayaxxx'
}

// var obj = {
//     "pizza": "that",
//     "this.other": "that",
//     "alphabets": [1, 2, 3, 4],
//     "this.thing.that": "this"
// }

// const upil = JSON.stringify(Object.expand(obj), undefined, 4);
// console.log(upil);

console.log(aexpand(obj));