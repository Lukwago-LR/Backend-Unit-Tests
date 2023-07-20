import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('Test yearsAgo', function () {
    it('Should return how many years ago that year is from the current year.', function () {
      // after you declared the function
      assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
      assert.equal((new Date().getFullYear() - 200), yearsAgo(200));
    });
  });