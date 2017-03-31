/**
 * Unit Test for Ux7
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-7/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux7, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux7',function () {
        // new instance
        describe('new Ux7',function () {
            it('should be ok to instance Ux7',function () {
                var inst = new Ux7();
                expect(inst).to.be.an.instanceof(Ux7);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux7',cases);
    });
});
