/**
 * Unit Test for Ux13
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-13/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux13, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux13',function () {
        // new instance
        describe('new Ux13',function () {
            it('should be ok to instance Ux13',function () {
                var inst = new Ux13();
                expect(inst).to.be.an.instanceof(Ux13);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux13',cases);
    });
});
