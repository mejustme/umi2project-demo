/**
 * Ux10UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-10/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux10,
    html,
    css
){
    /**
     * Ux10 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-10/ui.Ux10UI
     * @extends module:pool/module-column/src/component/ux-10/component.Ux10
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux10.$extends({
        name     : 'um-column-ux-10',
        css      : css,
        template : html
    });
});
