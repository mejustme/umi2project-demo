/**
 * Unit Test for Ux2
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-2/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux2, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux2',function () {
        // new instance
        describe('new Ux2',function () {
            it('should be ok to instance Ux2',function () {
                var inst = new Ux2();
                expect(inst).to.be.an.instanceof(Ux2);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux2',cases);
    });
});
