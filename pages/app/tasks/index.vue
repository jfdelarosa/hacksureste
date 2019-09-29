<template lang="pug">
  el-table(:data="data")
    el-table-column(prop="task_name" label="Nombre")
    el-table-column(prop="task_points" label="Puntos")
    el-table-column(prop="type_name" label="Tipo")
    el-table-column(label="Opciones")
      template(slot-scope="scope")
        el-button Editar
</template>
<script>
export default {
  layout: "app",
  data: () => ({
    data: []
  }),
  methods: {},
  created() {
    fetch("https://smarcities.000webhostapp.com/Proyecto/list_tasks.php", {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.data = res.result;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
