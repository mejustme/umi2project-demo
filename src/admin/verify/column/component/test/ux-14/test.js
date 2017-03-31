/**
 * Unit Test for Ux14
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-14/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux14, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux14',function () {
        // new instance
        describe('new Ux14',function () {
            it('should be ok to instance Ux14',function () {
                var inst = new Ux14();
                expect(inst).to.be.an.instanceof(Ux14);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux14',cases);
    });
});
