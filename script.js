function sumDistinctElements(set1, set2) {
    let distinctElements = [];
    let sum = 0;
  
    
    for (let element of set1) {
      if (!set2.includes(element) && !distinctElements.includes(element)) {
        distinctElements.push(element);
        sum += element;
      }
    }
  
    
    for (let element of set2) {
      if (!set1.includes(element) && !distinctElements.includes(element)) {
        distinctElements.push(element);
        sum += element;
      }
    }

    return sum;
  }
  
  
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  console.log(sumDistinctElements(set1, set2)); 