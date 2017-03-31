/**
 * Ux1UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-1/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux1,
    html,
    css
){
    /**
     * Ux1 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-1/ui.Ux1UI
     * @extends module:pool/module-column/src/component/ux-1/component.Ux1
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux1.$extends({
        name     : 'um-column-ux-1',
        css      : css,
        template : html
    });
});
