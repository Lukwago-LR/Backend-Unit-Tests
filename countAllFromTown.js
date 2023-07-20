function countAllFromTown(strList, str)
{
  let l = strList.split(",");
  var num = 0;
  for(var name of l)
  {
    if(name.includes(str))
    {
      num++;
    }
  }
  
  return num;  
}
export default  countAllFromTown;