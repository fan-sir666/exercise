<template>
  <a-layout class="conter">
    <!-- 顶部通栏 -->
    <a-layout-header class="header">
      <div class="logo">
        <router-link to="/home">
          <img src="../assets/image/logo.png" alt="" /><span>后台管理系统</span>
        </router-link>
      </div>
      <!-- 退出按钮 -->
      <a-button @click="handleLogOut">退出</a-button>
    </a-layout-header>
    <a-layout>
      <!-- 侧边栏 -->
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <a-menu
          mode="inline"
          :openKeys="openKeys"
          @openChange="onOpenChange"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <!-- 展开收缩按钮 -->
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <!-- 一级菜单 -->
          <a-sub-menu v-for="item in menuList" :key="item.id">
            <!-- 通过判断路由路径来渲染图标 -->
            <template #title v-if="item.path == 'users'">
              <span
                ><user-outlined /><span>{{ item.authName }}</span></span
              >
            </template>
            <template #title v-else-if="item.path == 'rights'">
              <span
                ><code-sandbox-outlined /><span>{{ item.authName }}</span></span
              >
            </template>
            <template #title v-else-if="item.path == 'goods'">
              <span
                ><shopping-outlined /><span>{{ item.authName }}</span></span
              >
            </template>
            <template #title v-else-if="item.path == 'orders'">
              <span
                ><container-outlined /><span>{{ item.authName }}</span></span
              >
            </template>
            <template #title v-else-if="item.path == 'reports'">
              <span
                ><area-chart-outlined /><span>{{ item.authName }}</span></span
              >
            </template>
            <!-- 二级菜单 -->
            <a-menu-item v-for="ziItem in item.children" :key="ziItem.id"
              ><appstore-outlined /><span
                ><router-link :to="'/'+ziItem.path">{{
                  ziItem.authName
                }}</router-link></span
              ></a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <!-- 右侧内容区域 -->
      <a-layout >
        <a-layout-content
          :style="{
            padding: '24px',
            margin: 0,
            height: '750px',
          }"
        >
          <!-- 组件渲染 start -->
          <router-view></router-view>
          <!-- 组件渲染 end -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  CodeSandboxOutlined,
  ShoppingOutlined,
  ContainerOutlined,
  AreaChartOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { httpGet } from "@/utils/http";
import { rights } from "@/api";
export default {
  components: {
    UserOutlined,
    CodeSandboxOutlined,
    ShoppingOutlined,
    ContainerOutlined,
    AreaChartOutlined,
    // 二级菜单的图标
    AppstoreOutlined,
    // 展开收缩图标
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      // 侧边栏菜单
      menuList: [],
      // 展开收缩的状态值
      collapsed: false,
      // 默认打开哪一项
      openKeys: [],
      // 所有项
      rootSubmenuKeys: [],
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    // 退出登录
    handleLogOut() {
      // 清除token
      window.sessionStorage.removeItem("token");
      // 跳转到登录页
      this.$router.push("/login");
    },
    // 获取侧边栏数据
    getMenuList() {
      httpGet(rights.AsideMenus)
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;
          if (meta.status == 200) {
            this.menuList = data;
            // 保存一级菜单id
            this.menuList.forEach((item) => {
              this.rootSubmenuKeys.push(item.id);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 打开当前项 其他项关闭
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style>
.conter {
  height: 100%;
}
.header {
  background-color: #373d41;
}

.conter .logo {
  float: left;
}
.logo a {
  display: block;
}
.logo img {
  width: 61px;
  height: 56px;
}
.logo span {
  margin-left: 15px;
  color: #fff;
  font-size: 20px;
}
.header .ant-btn {
  float: right;
  margin: 20px 20px 0 0;
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.ant-menu,
.ant-menu-sub .ant-menu-item {
  color: #fff;
  background-color: #373d41;
}
.ant-menu .trigger {
  display: block;
  width: 100%;
  font-size: 18px;
  line-height: 54px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
.ant-menu-item,
.ant-menu-item-selected {
  margin: 0;
}
.ant-menu-inline .ant-menu-item {
  background-color: #373d41;
  margin: 0;
  padding: 0;
}
.ant-menu-vertical .ant-menu-item:not(:last-child),
.ant-menu-vertical-left .ant-menu-item:not(:last-child),
.ant-menu-vertical-right .ant-menu-item:not(:last-child),
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin: 0;
}
.ant-menu-submenu-selected,
.ant-menu-item-selected {
  color: #fff;
}
.ant-menu-item-selected-active {
  color: #000;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: rgb(41, 44, 54);
  color: #1890ff;
}
.ant-layout-sider-trigger {
  position: fixed;
  bottom: 0;
  z-index: 1;
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  background-color: #373d41;
  cursor: pointer;
  transition: all 0.2s;
}
</style>