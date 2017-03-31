/**
 * Unit Test for UxB
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-b/component',
    '../util.js',
    './cases.js'
],function (
    u, UxB, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - UxB',function () {
        // new instance
        describe('new UxB',function () {
            it('should be ok to instance UxB',function () {
                var inst = new UxB();
                expect(inst).to.be.an.instanceof(UxB);
            });
        });
        // test for all api
        //ut.runTest(d,'UxB',cases);
    });
});
