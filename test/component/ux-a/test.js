/**
 * Unit Test for UxA
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-a/component',
    '../util.js',
    './cases.js'
],function (
    u, UxA, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - UxA',function () {
        // new instance
        describe('new UxA',function () {
            it('should be ok to instance UxA',function () {
                var inst = new UxA();
                expect(inst).to.be.an.instanceof(UxA);
            });
        });
        // test for all api
        //ut.runTest(d,'UxA',cases);
    });
});
