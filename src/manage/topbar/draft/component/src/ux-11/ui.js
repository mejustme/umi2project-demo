/**
 * Ux11UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-11/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux11,
    html,
    css
){
    /**
     * Ux11 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-11/ui.Ux11UI
     * @extends module:pool/module-column/src/component/ux-11/component.Ux11
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux11.$extends({
        name     : 'um-column-ux-11',
        css      : css,
        template : html
    });
});
