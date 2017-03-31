/**
 * Ux8UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-8/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux8,
    html,
    css
){
    /**
     * Ux8 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-8/ui.Ux8UI
     * @extends module:pool/module-column/src/component/ux-8/component.Ux8
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux8.$extends({
        name     : 'um-column-ux-8',
        css      : css,
        template : html
    });
});
