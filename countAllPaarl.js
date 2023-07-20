function countAllPaarl(strList)
{
  let l = strList.split(",");
  var num = 0;
  for(var name of l)
  {
    if(name.includes("CJ"))
    {
      num++;
    }
  }
  return num;
}

export default countAllPaarl;