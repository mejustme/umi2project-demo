/**
 * Ux5UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-5/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux5,
    html,
    css
){
    /**
     * Ux5 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-5/ui.Ux5UI
     * @extends module:pool/module-column/src/component/ux-5/component.Ux5
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux5.$extends({
        name     : 'um-column-ux-5',
        css      : css,
        template : html
    });
});
