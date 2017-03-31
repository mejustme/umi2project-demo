/**
 * Unit Test for Ux6
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-6/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux6, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux6',function () {
        // new instance
        describe('new Ux6',function () {
            it('should be ok to instance Ux6',function () {
                var inst = new Ux6();
                expect(inst).to.be.an.instanceof(Ux6);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux6',cases);
    });
});
