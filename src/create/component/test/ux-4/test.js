/**
 * Unit Test for Ux4
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-4/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux4, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux4',function () {
        // new instance
        describe('new Ux4',function () {
            it('should be ok to instance Ux4',function () {
                var inst = new Ux4();
                expect(inst).to.be.an.instanceof(Ux4);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux4',cases);
    });
});
