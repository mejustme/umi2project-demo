/**
 * Unit Test for Ux5
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-5/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux5, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux5',function () {
        // new instance
        describe('new Ux5',function () {
            it('should be ok to instance Ux5',function () {
                var inst = new Ux5();
                expect(inst).to.be.an.instanceof(Ux5);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux5',cases);
    });
});
