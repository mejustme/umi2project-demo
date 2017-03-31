/**
 * Ux13UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-13/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux13,
    html,
    css
){
    /**
     * Ux13 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-13/ui.Ux13UI
     * @extends module:pool/module-column/src/component/ux-13/component.Ux13
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux13.$extends({
        name     : 'um-column-ux-13',
        css      : css,
        template : html
    });
});
