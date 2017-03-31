/**
 * UxAUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-a/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    UxA,
    html,
    css
){
    /**
     * UxA UI组件
     *
     * @class   module:pool/module-column/src/component/ux-a/ui.UxAUI
     * @extends module:pool/module-column/src/component/ux-a/component.UxA
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return UxA.$extends({
        name     : 'um-column-ux-a',
        css      : css,
        template : html
    });
});
