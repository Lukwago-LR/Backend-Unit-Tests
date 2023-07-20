import assert from "assert";
import isFromBellville from "../isFromBellville.js"

describe('Test isFromBellville', function () {
    it('Should return whether the car is from Bellville based on the plate', function () {
      // after you declared the function
      assert.equal(isFromBellville('CY 123'), true);
      assert.equal(isFromBellville('CJ 123'), false);
    });
  });