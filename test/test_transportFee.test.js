import assert from "assert";
import transportFee from "../transportFee.js";

describe('Test transportFee', function () {
    it('Should return the right price based on the shift you are working', function () {
      // after you declared the function
      assert.equal(transportFee('morning'), 'R20');

      assert.equal(transportFee('afternoon'), 'R10');
      
      assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
            
    });
  });