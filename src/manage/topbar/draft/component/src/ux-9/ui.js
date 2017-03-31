/**
 * Ux9UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-9/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux9,
    html,
    css
){
    /**
     * Ux9 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-9/ui.Ux9UI
     * @extends module:pool/module-column/src/component/ux-9/component.Ux9
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux9.$extends({
        name     : 'um-column-ux-9',
        css      : css,
        template : html
    });
});
