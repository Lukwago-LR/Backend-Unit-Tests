function findItemsOver20(list)
{
  let aryList = [];
  for(let dict of list){
    if(dict["qty"] > 20){
      aryList.push(dict);
    }
  }
  return aryList;
}

export default findItemsOver20;

