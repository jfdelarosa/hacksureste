<template lang="pug">
  el-table(:data="data")
    el-table-column(prop="nombre" label="Nombre")
    el-table-column(prop="email" label="Correo Electrónico")
</template>
<script>
export default {
  layout: "app",
  data: () => ({
    data: [
      {
        id: 3,
        nombre: "JAZIR ESTRELLA",
        email: "asd@asd1.com"
      },
      {
        id: 5,
        nombre: "asdasdas 2",
        email: "as2d@asd.com"
      }
    ]
  }),
  methods: {
    addTask(id) {
      this.$router.push({
        name: "app-tasks-id",
        params: {
          id: id
        }
      });
      console.log(id);
    }
  },
  created() {}
};
</script>
