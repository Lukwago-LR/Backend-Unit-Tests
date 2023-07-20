function mostProfitableDepartment(list) {
  var largestSales = 0;
  var department = "";

  let departmentalList = [];
  for (let dep of list) {
    if (!departmentalList.includes(dep["department"])) {
      departmentalList.push(dep["department"]);
    }
  }

  for (let depart of departmentalList) {
    let largestDepSales = 0;
    for (let dict of list) {
      if (dict["department"] == depart) {
        largestDepSales += dict["sales"];
      }
    }

    if (largestDepSales > largestSales) {
      largestSales = largestDepSales;
      department = depart;
    }
  }
  return department;
}

function mostProfitableDay(list) {
  var largestSales = 0;
  var department = "";

  let departmentalList = [];
  for (let dep of list) {
    if (!departmentalList.includes(dep["day"])) {
      departmentalList.push(dep["day"]);
    }
  }

  for (let depart of departmentalList) {
    let largestDepSales = 0;
    for (let dict of list) {
      if (dict["day"] == depart) {
        largestDepSales += dict["sales"];
      }
    }

    if (largestDepSales > largestSales) {
      largestSales = largestDepSales;
      department = depart;
    }
  }
  return department;
}

function all(list) {
  const dict ={
    "depart" : mostProfitableDepartment(list),
    "day": mostProfitableDay(list)
  } 

  return dict;
}

export default all


