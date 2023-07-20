function findItemsOver(list, threshold)
{
  let aryList = [];
  for(let dict of list){
    if(dict["qty"] > threshold){
      aryList.push(dict);
    }
  }
  
  return aryList;
}

export default findItemsOver;