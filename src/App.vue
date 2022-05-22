<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-row>
        <a-col :span="3" style="text-align: left">
          <div class="logo"></div>
        </a-col>
        <a-col :span="15" style="text-align: left">
          <a-menu
            style="background-color: #00904a"
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="horizontal"
          >
            <a-menu-item key="1">
              <home-outlined
                :style="{ fontSize: '20px', margin: '0 8px 0 0' }"
              />
              Shop</a-menu-item
            >
            <a-menu-item key="2">
              <file-text-outlined
                :style="{ fontSize: '20px', margin: '0 8px 0 0' }"
              />
              Đơn hàng</a-menu-item
            >
            <a-menu-item key="3">
              <car-outlined
                :style="{ fontSize: '20px', margin: '0 8px 0 0' }"
              />
              COD</a-menu-item
            >
            <a-menu-item key="4">
              <pic-right-outlined
                :style="{ fontSize: '20px', margin: '0 8px 0 0' }"
              />
              Tickets</a-menu-item
            >
            <a-menu-item key="5">
              <usergroup-delete-outlined
                :style="{ fontSize: '20px', margin: '0 8px 0 0' }"
              />
              Nhân sự</a-menu-item
            >
            <a-menu-item key="6"
              ><more-outlined
                :style="{ fontSize: '20px', margin: '0 8px 0 0' }"
              />
              Khác</a-menu-item
            >
          </a-menu>
        </a-col>
        <a-col :span="6" class="nav_right">
          <div>
            <a-avatar :size="40">
              <template #icon><user-outlined /></template>
            </a-avatar>
          </div>
          <div class="account">
            <h3 style="color: #fff">Phạm Minh Anh</h3>
            <p class="acc_role">NHÂN VIÊN BƯU CỤC</p>
          </div>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <home-page />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import {
  HomeOutlined,
  FileTextOutlined,
  CarOutlined,
  PicRightOutlined,
  UsergroupDeleteOutlined,
  MoreOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import HomePage from './components/Home.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    HomeOutlined,
    FileTextOutlined,
    CarOutlined,
    PicRightOutlined,
    MoreOutlined,
    UsergroupDeleteOutlined,
    UserOutlined,
  },
};
</script>

<style>
.ant-menu-overflow.ant-menu.ant-menu-root.ant-menu-horizontal.ant-menu-dark.nav_menu {
  background-color: #fff;
  color: #00904a;
}
.ml-2 {
  margin-left: 20px;
}
.ant-btn-dangerous {
  color: #00904a;
  background: #fff;
  border-color: #00904a;
}
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ant-table.ant-table-bordered > .ant-table-container {
  border-left: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.ant-table-column-title {
  font-weight: bold;
}
.ant-layout-header {
  background-color: #00904a;
}
.ant-menu {
  font-size: 18px;
  background-color: rgb(0, 144, 74);
  font-weight: bold;
  color: #fff;
  padding-left: 100px;
}

.btn-primary {
  border-color: #00904a;
  color: #00904a;
  border-radius: 5px;
}

.btn-primary-bg {
  background-color: #00904a;
  color: #fff;
  border-radius: 5px;
}

.content__on__top {
  position: absolute;
  top: 10px;
  right: 10px;
  left: 15px;
}

.ant-table-row {
  height: 270px;
}

.left-content {
  align-content: center;
  display: flex;
  row-gap: 0px;
  justify-content: end;
}

.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: #fff;
  color: #00904a;
}

.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
  background-color: #fff;
  color: #00904a;
}

.logo {
  background: url(./assets/logo_GHTK.png) no-repeat 0 center;
  background-size: auto 80%;
  display: inline-block;
  height: 60px;
  width: 338px;
  margin-bottom: 10px;
}
.nav_right {
  display: flex;
  justify-content: end;
}
.nav_right .account {
  color: #fff;
  position: relative;
  width: 200px;
  align-items: center;
  display: block;
  left: -28px;
  bottom: 5px;
}
.nav_right .account .acc_role {
  font-weight: 100;
  color: rgb(222, 222, 222);
  position: absolute;
  top: 18px;
  font-size: 12px;
  left: 42px;
}
</style>
