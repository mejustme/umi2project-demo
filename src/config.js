/**
 * 模块组装配置文件
 *
 * @version  1.0
 * @author   hzchenqinhui@corp.netease.com <hzchenqinhui@corp.netease.com>
 */


NEJ.define(function () {
    return {
        rules: {
            rewrite: {
                404: '/m/column/list/'
            },
            alias: {
                
                "column": "/m/column",
                "columnlist": "/m/column/list/",
                "columncreate": "/m/column/create/",
                "columnmanage": "/m/column/manage",
                "columnmanage-edit": "/m/column/manage/edit/",
                "columnmanage-topbar": "/m/column/manage/topbar",
                "columnmanage-topbar-info": "/m/column/manage/topbar/info/",
                "columnmanage-topbar-list": "/m/column/manage/topbar/list/",
                "columnmanage-topbar-draft": "/m/column/manage/topbar/draft/",
                "columnadmin": "/m/column/admin",
                "columnadmin-list": "/m/column/admin/list/",
                "columnadmin-preview": "/m/column/admin/preview/",
                "columnadmin-unverify": "/m/column/admin/unverify",
                "columnadmin-unverify-column": "/m/column/admin/unverify/column/",
                "columnadmin-verify": "/m/column/admin/verify",
                "columnadmin-verify-column": "/m/column/admin/verify/column/"
            }
        },
        modules: {
            
            "/m/column":  "module-column/src/layout/index.html",
            "/m/column/list/":  "module-column/src/list/index.html",
            "/m/column/create/":  "module-column/src/create/index.html",
            "/m/column/manage":  "module-column/src/manage/index.html",
            "/m/column/manage/edit/":  "module-column/src/manage/edit/index.html",
            "/m/column/manage/topbar":  "module-column/src/manage/topbar/index.html",
            "/m/column/manage/topbar/info/":  "module-column/src/manage/topbar/info/index.html",
            "/m/column/manage/topbar/list/":  "module-column/src/manage/topbar/list/index.html",
            "/m/column/manage/topbar/draft/":  "module-column/src/manage/topbar/draft/index.html",
            "/m/column/admin":  "module-column/src/admin/index.html",
            "/m/column/admin/list/":  "module-column/src/admin/list/index.html",
            "/m/column/admin/preview/":  "module-column/src/admin/preview/index.html",
            "/m/column/admin/unverify":  "module-column/src/admin/unverify/index.html",
            "/m/column/admin/unverify/column/":  "module-column/src/admin/unverify/column/index.html",
            "/m/column/admin/verify":  "module-column/src/admin/verify/index.html",
            "/m/column/admin/verify/column/":  "module-column/src/admin/verify/column/index.html"
        }
    };
});

