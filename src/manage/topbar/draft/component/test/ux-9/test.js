/**
 * Unit Test for Ux9
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-9/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux9, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux9',function () {
        // new instance
        describe('new Ux9',function () {
            it('should be ok to instance Ux9',function () {
                var inst = new Ux9();
                expect(inst).to.be.an.instanceof(Ux9);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux9',cases);
    });
});
