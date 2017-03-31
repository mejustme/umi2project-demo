/**
 * Unit Test for Ux12
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-12/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux12, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux12',function () {
        // new instance
        describe('new Ux12',function () {
            it('should be ok to instance Ux12',function () {
                var inst = new Ux12();
                expect(inst).to.be.an.instanceof(Ux12);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux12',cases);
    });
});
