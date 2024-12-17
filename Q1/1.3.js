// Source object
const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

// Prototype object
const proto = {
  prop11: {
    prop22: null,
  },
};

function projectObject(source, prototype) {
  if (
    typeof source !== "object" ||
    source === null ||
    typeof prototype !== "object" ||
    prototype === null
  ) {
    return {};
  }

  const result = {};

  for (const key in prototype) {
    if (key in source) {
      if (typeof prototype[key] === "object" && prototype[key] !== null) {
        result[key] = projectObject(source[key], prototype[key]);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
}

const resultObject = projectObject(src, proto);

console.log(resultObject);
