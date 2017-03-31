/**
 * Ux3UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-3/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux3,
    html,
    css
){
    /**
     * Ux3 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-3/ui.Ux3UI
     * @extends module:pool/module-column/src/component/ux-3/component.Ux3
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux3.$extends({
        name     : 'um-column-ux-3',
        css      : css,
        template : html
    });
});
