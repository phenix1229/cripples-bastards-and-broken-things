function getFirstItemFrom(arr) {
  return arr[0];
}

function getLastItemFrom(arr) {
  return arr[arr.length - 1];
}

function getIndex3(arr) {
  if (arr.length >= 4) {
    return arr[3];  
  
  } else{
  return getLastItemFrom(arr);
  }
}

function firstItemIsNumber(arr) {
  return typeof(getFirstItemFrom(arr)) === 'number'
}

function isLongList(arr) {
  return arr.length >= 10 && arr.length < 20;
}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}