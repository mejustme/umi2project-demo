/**
 * Ux4UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-4/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux4,
    html,
    css
){
    /**
     * Ux4 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-4/ui.Ux4UI
     * @extends module:pool/module-column/src/component/ux-4/component.Ux4
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux4.$extends({
        name     : 'um-column-ux-4',
        css      : css,
        template : html
    });
});
