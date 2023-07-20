import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('Test countAllFromTown', function () {
    it('Should show number of Cars from a given town based the plate', function () {
      // after you declared the function
      var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
      //fromStellies should contains
      assert.equal(fromStellies, 3)
      
      var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
      //fromStellies should contains
      assert.equal(fromKuilsriver, 1)
    });
  });