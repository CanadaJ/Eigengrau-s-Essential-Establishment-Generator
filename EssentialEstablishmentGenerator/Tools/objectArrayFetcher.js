setup.objectArrayFetcher = function (target, args) {
  // fetches a random key from an object
  var key = Object.keys(target)
  var index = random(0, key.length)
  return target[key[index]] || target[key[0]]
  // (args) || target[key[index]]
}
