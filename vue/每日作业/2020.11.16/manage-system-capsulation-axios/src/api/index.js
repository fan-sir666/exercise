// 存放接口路径文件

// 用户的接口
export const user = {
    UserLogin: "login", // 用户登录
    GetUsers: "users", // 获取所有用户
    AddUser: "users", // 添加用户
    delUser: "users", // 删除用户
    readUser: "users", // 回显用户
    editUser: "users" // 更新用户
}

// 关于权限的接口
export const rights = {
    AsideMenus: "menus", // 获取左侧菜单权限
    GetRights: "rights/list", // 获取权限列表形式
    getTreeRights: "rights/tree" // 获取权限树形形式
};

// 关于角色的接口
export const roles = {
    getRoles: "roles", //获取所有角色
    addRoles: "roles", //添加角色
}

// 关于订单的接口
export const orders = {
    getOrders: "orders" // 订单数据列表
}

//关于商品管理的接口
export const goods = {
    getGoods: "goods", // 获取商品列表
    getCategories:"categories" // 获取商品分类列表
}