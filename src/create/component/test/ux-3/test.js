/**
 * Unit Test for Ux3
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-3/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux3, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux3',function () {
        // new instance
        describe('new Ux3',function () {
            it('should be ok to instance Ux3',function () {
                var inst = new Ux3();
                expect(inst).to.be.an.instanceof(Ux3);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux3',cases);
    });
});
