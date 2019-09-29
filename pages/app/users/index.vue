<template lang="pug">
  el-table(:data="data")
    el-table-column(prop="nombre" label="Nombre")
    el-table-column(prop="email" label="Correo Electrónico")
    el-table-column(label="Opciones")
      template(slot-scope="scope")
        el-button(v-on:click="addTask(scope.row.id)") Agregar tarea
</template>
<script>
export default {
  layout: "app",
  data: () => ({
    data: [
      {
        id: 1,
        nombre: "JAZIR ESTRELLA",
        email: "asd@asd1.com"
      },
      {
        id: 2,
        nombre: "asdasdas 2",
        email: "as2d@asd.com"
      },
      {
        id: 3,
        nombre: "asdasdas 3",
        email: "a3sd@asd.com"
      }
    ]
  }),
  methods: {
    addTask(id) {
      this.$router.push({
        name: "app-tasks-agregar-name",
        params: {
          name: id
        }
      });
      console.log(id);
    }
  },
  created() {}
};
</script>
