#  #/m/column/admin/list/ 模块时序图


## 设计图片

![Alt text](./arch/design/admin-list.png)

-----

## 设计文本

```
// this is demo, replace your text for this module
sequenceDiagram
Note left of user:  时序图范例: 模块/m/a/b/: 命名规则a-b.png, 放置于, module/arch/design/
participant user as user
participant listModule as /column/list/模块
participant listComponent as component-list
participant itemComponent as component-item
participant itemComponent as cache-column

# 获取列表
user ->> listModule: _onRefresh
listModule ->> listComponent: init
listComponent ->> columnCache: _$getList
activate columnCache
columnCache -->> listComponent: onlistload
deactivate columnCache

# 删除item
user ->> itemComponent:  删除
activate itemComponent
itemComponent -->> listComponent: delete
deactivate itemComponent
listComponent ->> columnCache: _$deleteItem
activate columnCache
columnCache -->> listComponent: onitemdelete
columnCache -->> listComponent: listchange
deactivate columnCache
loop  listview
listComponent ->> listComponent: refresh
end

```


