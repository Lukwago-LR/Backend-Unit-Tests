function regCheck(str1, str2)
{
    if(str1.endsWith("GP"))
    {
      return str2=="GP";
    }else if(str1.endsWith("L"))
    {
      return str2=="L";    
    }else if(str1.endsWith("EC"))
    {
      return str2 =="EC";    
    }else if(str1.endsWith("MP"))
    {
      return str2=="MP";    
    }else
    {
      return false;
    }     
}

export default regCheck;
