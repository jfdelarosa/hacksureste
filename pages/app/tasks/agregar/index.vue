<template lang="pug">
  div
    el-form.header-form(ref='ruleForm' :model="task" label-position="top")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label='Titulo')
            el-input(type='text' v-model='task.titulo')
        el-col(:span="12")
          el-form-item(label='Valor')
            el-input-number(v-model="task.points" :min="0" :max="100")
      el-form-item(label='Asignado a' v-if="task.nombre")
        el-autocomplete(
          v-model="task.nombre"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          @select="handleSelect")
      el-form-item(label='Descripción')
        el-input(type='textarea' v-model='task.description')
      el-form-item
        el-button(type='primary' v-on:click="saveTask") Crear tarea

</template>

<script>
export default {
  layout: "app",
  data: () => ({
    task: {
      type_id: 1,
      nombre: "",
      titulo: "",
      description: "",
      points: 0,
      duration: 0,
      open_date: ""
    }
  }),
  methods: {
    getUser(id) {
      let payload = {
        user_id: id
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/list_users.php", {
        method: "POST",
        body: data
      })
        .then(res => res.json())
        .then(res => {
          let user = res.result[0];
          this.task.nombre = user.user_name;
        })
        .catch(e => {
          console.log(e);
        });
    },
    saveTask() {
      let payload = {
        type_id: 1,
        task_name: this.task.titulo,
        task_description: this.task.description,
        task_points: this.task.points
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/add_task.php", {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(res => {
          if (res.res) {
            this.$router.push({
              name: "app-tasks-ver"
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style>
.el-input-number {
  width: 100%;
}
</style>
