<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <el-menu
      default-active="/cmdb/hosts"
      class="sidebar-el-menu"
      :collapse="isCollapse"
      router
    >
      <!-- 以router的路由方式注册sidecar index -->
      <el-submenu index="host">
        <!-- 添加个title -->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">基础资源</span>
        </template>
        <!-- 导航条目 -->
        <el-menu-item index="/cmdb/search">资源检索</el-menu-item>
        <el-menu-item index="/cmdb/hosts">主机</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      sidebarWidth: "",
    };
  },
  watch: {
    isCollapse: {
      handler(newV) {
        console.log(newV);
        if (newV) {
          this.sidebarWidth = "65px";
        } else {
          this.sidebarWidth = "210px";
        }
      },
      immediate: true,
    },
  },
  computed: {
    isCollapse() {
      return this.$store.getters.sidebar.opened;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-el-menu {
  height: calc(100vh - 50px);
}
</style>
