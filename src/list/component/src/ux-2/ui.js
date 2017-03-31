/**
 * Ux2UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-2/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux2,
    html,
    css
){
    /**
     * Ux2 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-2/ui.Ux2UI
     * @extends module:pool/module-column/src/component/ux-2/component.Ux2
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux2.$extends({
        name     : 'um-column-ux-2',
        css      : css,
        template : html
    });
});
