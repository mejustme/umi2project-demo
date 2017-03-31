/**
 * Ux7UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com@corp.netease.com>
 * @module   pool/module-column/src/component/ux-7/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Ux7,
    html,
    css
){
    /**
     * Ux7 UI组件
     *
     * @class   module:pool/module-column/src/component/ux-7/ui.Ux7UI
     * @extends module:pool/module-column/src/component/ux-7/component.Ux7
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Ux7.$extends({
        name     : 'um-column-ux-7',
        css      : css,
        template : html
    });
});
