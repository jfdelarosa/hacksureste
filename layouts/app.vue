<template lang="pug">
el-container
  el-aside(width='200px')
    .sidebar
      .logo CatBox
      el-menu.el-menu-vertical-demo(:router="true" default-active='2' background-color='#545c64' text-color='#fff' active-text-color='#fff')
        el-menu-item(index='index' :route="{name: 'app'}")
          i.el-icon-menu
          span Inicio
        el-menu-item(index='calendar' :route="{name: 'app-calendar'}")
          i.el-icon-date
          span Calendario
        el-menu-item(index='users' :route="{name: 'app-users'}")
          i.el-icon-user
          span Usuarios
        el-submenu(index='tasks')
          template(slot='title')
            i.el-icon-s-order
            | Tareas
          el-menu-item(index='app-tasks-ver' :route="{name: 'app-tasks-ver'}") Ver tareas
          el-menu-item(index='app-tasks-agregar' :route="{name: 'app-tasks-agregar'}") Añadir tareas
          el-menu-item(index='app-tasks-asignar' :route="{name: 'app-tasks-asignar'}") Asignar tareas
          el-menu-item(index='app-tasks-types' :route="{name: 'app-tasks-types'}") Categorías
        //- el-menu-item(index='tasks' :route="{name: 'app-tasks'}")
          i.el-icon-s-order
          span Tareas
  el-container
    el-header
      .header
        span(v-on:click="$router.push({name: 'index'})") Salir
    el-main
      nuxt
</template>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
body {
  margin: 0;
  /* background: #f0f0f0; */
}
.el-container {
  min-height: 100%;
}
.sidebar {
  background-image: linear-gradient(to bottom right, #00c4ff 0%, #209cee 100%);
  height: 100%;
}
.logo {
  padding: 1rem;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}
.el-menu {
  border: none;
}
.el-header {
  background: #3c484e;
  color: white;
  height: auto !important;
}
.el-header .header {
  padding: 1rem 0;
  text-align: right;
  cursor: pointer;
}
.el-submenu__title,
.el-menu-item {
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
.el-submenu__title.is-active,
.el-menu-item.is-active {
  background: rgba(255, 255, 255, 0.2) !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
.el-submenu__title i,
.el-menu-item i {
  color: #ffffff !important;
}
.el-menu,
.el-menu-item,
.el-submenu__title {
  background: none !important;
}
</style>
