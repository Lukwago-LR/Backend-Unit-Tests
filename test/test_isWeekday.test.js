import assert from "assert";
import isWeekday from "../isWeekday.js"

describe('Test isWeekday', function () {
    it('Should take a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day).', function () {
      // after you declared the function
      assert.equal(isWeekday('Saturday'), false);
      assert.equal(isWeekday('Sunday'), false);
      assert.equal(isWeekday('Monday'), true);
      assert.equal(isWeekday('Tuesday'), true);
      assert.equal(isWeekday('Wednesday'), true);
      assert.equal(isWeekday('Thursday'), true);
      assert.equal(isWeekday('Friday'), true);
    });
  });