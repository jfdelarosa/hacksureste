<template lang="pug">
  div
    el-button.pull-right(type="success" icon="el-icon-plus" v-on:click="addTask") Agregar nueva tarea
    el-table(:data="data")
      el-table-column(prop="task_name" label="Nombre")
      el-table-column(prop="task_description" label="descripción")
      el-table-column(prop="task_points" label="Puntos")
      el-table-column(prop="type_name" label="Tipo")
</template>

<script>
export default {
  layout: "app",
  data: () => ({
    data: []
  }),
  methods: {
    addTask() {
      this.$router.push({
        name: "app-tasks-agregar"
      });
    }
  },
  created() {
    fetch("https://smarcities.000webhostapp.com/Proyecto/list_tasks.php", {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        this.data = res.result;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style>
.pull-right {
  float: right;
}
</style>
