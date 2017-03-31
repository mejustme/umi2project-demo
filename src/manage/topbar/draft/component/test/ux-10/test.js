/**
 * Unit Test for Ux10
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-10/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux10, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux10',function () {
        // new instance
        describe('new Ux10',function () {
            it('should be ok to instance Ux10',function () {
                var inst = new Ux10();
                expect(inst).to.be.an.instanceof(Ux10);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux10',cases);
    });
});
