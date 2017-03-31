/**
 * Unit Test for Ux1
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-1/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux1, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux1',function () {
        // new instance
        describe('new Ux1',function () {
            it('should be ok to instance Ux1',function () {
                var inst = new Ux1();
                expect(inst).to.be.an.instanceof(Ux1);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux1',cases);
    });
});
