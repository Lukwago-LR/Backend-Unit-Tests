function transportFee(dayTime)
{
  if(dayTime == "morning")
  {
    return "R20"; 
  }else if(dayTime == "afternoon")
  {
    return "R10";
  }else 
  {
    return "free";
  }
}

export default transportFee;