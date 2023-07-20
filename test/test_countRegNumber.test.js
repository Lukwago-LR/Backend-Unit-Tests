import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('Test countRegNumber', function () {
    it('Should return the number of registration numbers in the string', function () {
      // after you declared the function
      var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
      assert.equal(regCount, 3);
      
      var regCount = countRegNumber('CA 182736')
      assert.equal(regCount, 1);
    });
  });