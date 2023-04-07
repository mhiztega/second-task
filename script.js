function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let number = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > number) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}
