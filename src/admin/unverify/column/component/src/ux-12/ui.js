/**
 * Ux12UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-12/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux12,
    html,
    css
){
    /**
     * Ux12 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-12/ui.Ux12UI
     * @extends module:pool/module-column/src/component/ux-12/component.Ux12
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux12.$extends({
        name     : 'um-column-ux-12',
        css      : css,
        template : html
    });
});
