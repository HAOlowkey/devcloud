<template>
  <div class="login-container">
    <img src="@/assets/login/bg.png" alt="" class="wave" />
    <div class="container">
      <div class="img">
        <img src="@/assets/login/img-3.svg" alt="" />
      </div>
      <div class="login-box">
        <form action="">
          <img src="@/assets/login/avatar.svg" alt="" class="avatar" />
          <h2>研发云</h2>
          <div id="username" class="input-group">
            <div class="svg-container">
              <svg-icon icon-class="username" />
            </div>
            <div>
              <h5>账号</h5>
              <input v-model="loginForm.username" type="text" class="input" />
            </div>
          </div>
          <div id="password" class="input-group">
            <div class="svg-container">
              <svg-icon icon-class="password" />
            </div>
            <div>
              <h5>密码</h5>
              <input
                v-model="loginForm.password"
                type="password"
                class="input"
              />
            </div>
          </div>
          <a href="#">忘记密码</a>
          <!-- 提交表单 -->
          <!-- 这里替换成原来的el-button, 只是样式使用该项目的样式: class login-btn -->
          <el-button
            class="btn"
            :loading="loading"
            tabindex="3"
            size="medium"
            type="primary"
            @click="handleLogin"
          >
            登录
          </el-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        grant_type: "password",
      },
      loading: false,
    };
  },
  mounted() {
    this.addEventListener();
  },
  methods: {
    shake(elemId) {
      let elem = document.getElementById(elemId);
      if (elem) {
        elem.classList.add("shake");
        setTimeout(() => {
          elem.classList.remove("shake");
        }, 800);
      }
    },
    loginCheck() {
      if (this.loginForm.username === "") {
        this.shake("username");
        return false;
      }
      if (this.loginForm.password === "") {
        this.shake("password");
        return false;
      }
      return true;
    },
    async handleLogin() {
      if (this.loginCheck()) {
        this.loginLoading = true;
        try {
          // 调用后端接口进行登录, 状态保存到vuex中
          await this.$store.dispatch("user/login", this.loginForm);

          // 调用后端接口获取用户profile, 状态保存到vuex中
          const user = await this.$store.dispatch("user/getInfo");
          console.log(user);
          console.log(this.$router);
          // 更加用户的角色或者类型, 或的可以发的系统列表
        } catch (err) {
          // 如果登陆异常, 中断登陆逻辑
          console.log(err);
          return;
        } finally {
          this.loginLoading = false;
        }

        // 登陆成功, 重定向到Home或者用户指定的URL
        this.$router.push({
          path: this.$route.query.redirect || "/",
          query: this.otherQuery,
        });
      }
    },
    addEventListener() {
      const inputs = document.querySelectorAll(".input");

      function focusFunction() {
        let parentNode = this.parentNode.parentNode;
        parentNode.classList.add("focus");
      }
      function blurFunction() {
        let parentNode = this.parentNode.parentNode;
        if (this.value == "") {
          parentNode.classList.remove("focus");
        }
      }

      inputs.forEach((input) => {
        input.addEventListener("focus", focusFunction);
        input.addEventListener("blur", blurFunction);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";

.svg-container {
  padding-top: 11px;
  color: #d9d9d9;
  vertical-align: middle;
  display: inline-block;
}

.shake {
  animation: shake 800ms ease-in-out;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(+2px, 0, 0);
  }
  30%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(+4px, 0, 0);
  }
  50% {
    transform: translate3d(-4px, 0, 0);
  }
}
</style>
