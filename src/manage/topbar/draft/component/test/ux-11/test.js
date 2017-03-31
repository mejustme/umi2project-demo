/**
 * Unit Test for Ux11
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-11/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux11, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux11',function () {
        // new instance
        describe('new Ux11',function () {
            it('should be ok to instance Ux11',function () {
                var inst = new Ux11();
                expect(inst).to.be.an.instanceof(Ux11);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux11',cases);
    });
});
