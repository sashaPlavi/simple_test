module.exports = {
  forEach(arr, fn) {
    // for (let index = 0; index < arr.length; index++) {
    //   const element = arr[index];
    //   fn(element, index);
    // }

    for (index in arr) {
      fn(arr[index], index);
    }
  },
  map(arr, fn) {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
      result.push(fn(arr[index], index));
    }

    return result;
  },
};
