export function createRange(startNumber, endNumber) {
  const list = [];
  for (let i = startNumber; i < endNumber; i++) {
    list.push(i);
  }
  return list;
}

// /**
//  * Shuffle a array.
//  * @param {Array<any>} array - シャッフルされる配列
//  */
// export function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Random.next() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

export function print_object_property_equal(obj1, obj2) {
  // プロパティの名前を取得
  const keys1 = Object.keys(obj1);
  // 各プロパティを比較
  for (const key of keys1) {
    console.log(`${key}: ${obj1[key] === obj2[key]}`);
  }
}

export function deep_copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export class Clone {
  constructor(ref_props = [], ignore_props = []) {
    ref_props.push('ref_props');
    // ref_props.push('ref_props', 'ignore_props');
    this.ref_props = new Set(ref_props);
    // this.ignore_props = new Set(ignore_props);
  }
  clone() {
    const copy = Object.create(Object.getPrototypeOf(this));
    for (let key in this) {
      if (this.hasOwnProperty(key)) {
        if (this.ref_props.has(key)) {
          copy[key] = this[key];
          // } else if (this.ignore_props.has(key)) {
          // continue;
        } else {
          copy[key] = Clone.copy_helper(this[key]);
        }
      }
    }
    return copy;
  }

  static copy_helper(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    } else if (typeof obj.clone === 'function') {
      return obj.clone();
    } else if (Array.isArray(obj)) {
      return obj.map(Clone.copy_helper);
    } else if (obj instanceof Map) {
      const copy = new Map();
      for (let [key, value] of obj.entries()) {
        copy.set(Clone.copy_helper(key), Clone.copy_helper(value));
      }
      return copy;
    } else if (obj instanceof Set) {
      const copy = new Set();
      for (let value of obj.values()) {
        copy.add(Clone.copy_helper(value));
      }
      return copy;
    } else if (obj.constructor !== Object) {
      throw new Error(
        `Object of type ${obj.constructor.name} does not have a clone method.`
      );
    } else {
      const copy = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = Clone.copy_helper(obj[key]);
        }
      }
      return copy;
    }
  }
}

export class RandomGenerator extends Clone {
  constructor(seed = 1) {
    super();
    this.seed = seed;
  }

  next() {
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32;

    this.seed = (a * this.seed + c) % m;
    return this.seed / m;
  }

  nextInt(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }
}

// export class Random {
//   static generator = new RandomGenerator(0);

//   static next() {
//     console.log('\n\n\n\n\n\nrandomrandomrandom\n\n\n\n\n\n');
//     return this.generator.next();
//   }

//   static nextInt(min, max) {
//     console.log('\n\n\n\n\n\nrandomrandomrandom\n\n\n\n\n\n');
//     return this.generator.nextInt(min, max);
//   }

//   static setSeed(seed) {
//     this.generator = new RandomGenerator(seed);
//   }
// }
