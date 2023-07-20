import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('Test totalPhoneBill', function () {
    it("Should take in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
      // after you declared the function
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
      assert.equal('R3.40', totalPhoneBill('call, sms'));
      assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
  });