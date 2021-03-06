/**
 * Ux14UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-14/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux14,
    html,
    css
){
    /**
     * Ux14 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-14/ui.Ux14UI
     * @extends module:pool/module-column/src/component/ux-14/component.Ux14
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux14.$extends({
        name     : 'um-column-ux-14',
        css      : css,
        template : html
    });
});
