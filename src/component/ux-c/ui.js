/**
 * UxCUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-c/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    UxC,
    html,
    css
){
    /**
     * UxC UI组件
     *
     * @class   module:pool/module-column/src/component/ux-c/ui.UxCUI
     * @extends module:pool/module-column/src/component/ux-c/component.UxC
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return UxC.$extends({
        name     : 'um-column-ux-c',
        css      : css,
        template : html
    });
});
