/**
 * Unit Test for UxC
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-c/component',
    '../util.js',
    './cases.js'
],function (
    u, UxC, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - UxC',function () {
        // new instance
        describe('new UxC',function () {
            it('should be ok to instance UxC',function () {
                var inst = new UxC();
                expect(inst).to.be.an.instanceof(UxC);
            });
        });
        // test for all api
        //ut.runTest(d,'UxC',cases);
    });
});
