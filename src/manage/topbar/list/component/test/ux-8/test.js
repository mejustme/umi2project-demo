/**
 * Unit Test for Ux8
 *
 * @author hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-8/component',
    '../util.js',
    './cases.js'
],function (
    u, Ux8, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Ux8',function () {
        // new instance
        describe('new Ux8',function () {
            it('should be ok to instance Ux8',function () {
                var inst = new Ux8();
                expect(inst).to.be.an.instanceof(Ux8);
            });
        });
        // test for all api
        //ut.runTest(d,'Ux8',cases);
    });
});
