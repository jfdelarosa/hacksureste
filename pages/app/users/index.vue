<template lang="pug">
  el-table(:data="data")
    el-table-column(prop="user_name" label="Nombre")
    el-table-column(prop="user_email" label="Correo Electrónico")
</template>
<script>
export default {
  layout: "app",
  data: () => ({
    data: []
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
  created() {
    fetch("https://smarcities.000webhostapp.com/Proyecto/list_users.php", {
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
