function fromWhere(plate) {
  if (plate == "CY 567489") {
    return "Bellville";
  } else if (plate == "CJ 343502") {
    return "Paarl";
  } else if (plate == "CA 987504") {
    return "Cape Town";
  } else {
    return "Some other place!";
  }
}

export default fromWhere;