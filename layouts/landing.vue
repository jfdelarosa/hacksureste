<template lang="pug">
el-container
  el-header
    .container.has-top-menu
      el-menu.top-menu(mode="horizontal" :router="true" background-color='transparent' text-color='#fff' active-text-color='#ffd04b')
        el-menu-item(index="app" :route="{name: 'home'}") Inicio
        el-menu-item(index="app" :route="{name: 'app'}") Precios

        el-popover.pull-right.inline-block(v-if="!user" placement='bottom' trigger='hover')
          el-form.header-form(ref='ruleForm' :model="login")
            el-form-item(label='Correo electrónico')
              el-input(type='text' v-model='register.email' placeholder="john.doe@gmail.com")
            el-form-item(label='Nombre')
              el-input(type='text' v-model='register.name' placeholder="John Doe")
            el-form-item(label='Contraseña')
              el-input(type='password' v-model="register.password1" placeholder="••••••")
            el-form-item(label='Repetir contraseña')
              el-input(type='password' v-model="register.password2" placeholder="••••••")
            el-form-item
              el-button(type='primary' v-on:click="sendRegister") Enviar
          el-menu-item.has-button.pull-right(slot='reference')
            el-button(type="primary" round) Registrarse

        el-popover.pull-right.inline-block(v-if="!user" placement='bottom' trigger='hover')
          el-form.header-form(ref='ruleForm' :model="login")
            el-form-item(label='Usuario')
              el-input(type='text' v-model='login.email' v-on:keyup.enter.native="sendLogin" placeholder="john.doe" autofocus)
            el-form-item(label='Contraseña')
              el-input(type='password' v-model='login.password' v-on:keyup.enter.native="sendLogin" placeholder="••••••")
            el-form-item
              el-button(type='primary' v-on:click="sendLogin") Entrar
          el-menu-item(slot='reference') Iniciar Sesión

        el-menu-item.has-button.pull-right(v-if="user" index="app" :route="{name: 'app'}")
          el-button(type="primary" round) Ir a la App
    div
      h1.title Titulo
      h3.subtitle subtitulo
    svg(viewBox='0 0 100 25' preserveAspectRatio="none" height="200px")
        path(fill='#FFFFFF' opacity='0.7' d='M0 30 V15 Q30 3 60 15 V30z')
        path(fill='#FFFFFF' d='M0 30 V12 Q30 17 55 12 T100 11 V30z')
  el-main
    el-button Default
    slot
    footer
      p Diseñado por&nbsp;
        a(href="#") KitKat
        | .
</template>
<script>
import "element-ui/lib/theme-chalk/reset.css";

export default {
  data: () => ({
    user: null,
    loginOk: null,
    login: {
      email: "jazir@gmail.com",
      password: "1234"
    },
    register: {
      name: "",
      email: "",
      password1: "",
      password2: ""
    }
  }),
  methods: {
    sendLogin() {
      let payload = {
        user_email: this.login.email,
        pass: this.login.password
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/login.php", {
        method: "POST",
        body: data
      })
        .then(res => res.json())
        .then(res => {
          if (res.res) {
            this.$router.push({ name: "app" });
          } else {
            this.login.username = "";
            this.login.password = "";
          }
        });
    },
    sendRegister() {
      let payload = {
        role_id: 1,
        user_name: this.register.name,
        user_email: this.register.email,
        user_password: this.register.password1
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/add_user.php", {
        method: "POST",
        body: data
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
body {
  background: white;
  padding: 0;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}
.container.has-top-menu {
  width: 1000px;
}
.el-main {
  padding: 0;
}
.inline-block {
  display: inline-block;
}
header.el-header {
  background-image: linear-gradient(to bottom right, #00c4ff 0%, #209cee 100%);
  height: 70vh !important;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
svg {
  width: 100%;
  display: block;
}
.el-menu {
  border: none;
}
.el-menu li:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}
header .title,
header .subtitle {
  text-align: center;
  color: white;
  margin: 0;
}
header .title {
  font-size: 2.5rem;
}
header .subtitle {
  font-size: 1.75rem;
}
.pull-right {
  float: right;
}
.has-button .el-button {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: #209cee;
  margin-top: -0.5rem;
}
.el-menu li.has-button:hover {
  background-color: transparent !important;
}
.has-button .el-button:hover {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
.header-form .el-form-item {
  margin: 0;
}
.header-form .el-form-item .el-button {
  width: 100%;
  margin-top: 1rem;
}
footer {
  background: #333c44;
  padding: 2rem 0;
  text-align: center;
  color: white;
}
footer a {
  color: #d9d9d9;
  border-bottom: 1px dotted white;
}
</style>
