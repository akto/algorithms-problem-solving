function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  var newStr = str.substr(-(targetLength));
  return newStr === target ? true: false;
}

confirmEnding("Bastian", "n");
