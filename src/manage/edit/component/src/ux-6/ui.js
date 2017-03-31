/**
 * Ux6UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-6/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux6,
    html,
    css
){
    /**
     * Ux6 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-6/ui.Ux6UI
     * @extends module:pool/module-column/src/component/ux-6/component.Ux6
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux6.$extends({
        name     : 'um-column-ux-6',
        css      : css,
        template : html
    });
});
