/**
 * UxBUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-b/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    UxB,
    html,
    css
){
    /**
     * UxB UI组件
     *
     * @class   module:pool/module-column/src/component/ux-b/ui.UxBUI
     * @extends module:pool/module-column/src/component/ux-b/component.UxB
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return UxB.$extends({
        name     : 'um-column-ux-b',
        css      : css,
        template : html
    });
});
