<template lang="pug">
  div
    el-row(:gutter="20" style="margin-bottom: 1rem;")
      el-col(:span="8")
        el-card
          .card-header {{contadores.tasks}}
          .card-label Tareas
      el-col(:span="8")
       el-card
          .card-header {{contadores.users}}
          .card-label Usuarios
      el-col(:span="8")
        el-card
          .card-header {{contadores.typess}}
          .card-label Tipos de tareas
    el-row(:gutter="20")
      el-col(:span="12")
        el-card(v-if="dash1Data.rows.length > 0")
          div(slot="header")
            span Tareas por usuario
          ve-pie(:data="dash1Data")
      el-col(:span="12")
        el-card(v-if="dash2Data.rows.length > 0")
          div(slot="header")
            span Cantidad de tareas
          ve-pie(:data="dash2Data")

</template>

<script>
export default {
  layout: "app",
  data: () => ({
    contadores: {
      tasks: 0,
      users: 0,
      typess: 0
    },
    dash1Data: {
      columns: ["user_name", "porcentaje"],
      rows: []
    },
    dash2Data: {
      columns: ["task_name", "porcentaje"],
      rows: []
    }
  }),
  methods: {
    loadDash1() {
      fetch(
        "https://smarcities.000webhostapp.com/Proyecto/generate_dash1.php",
        {
          method: "POST"
        }
      )
        .then(res => res.json())
        .then(res => {
          this.dash1Data.rows = res.result.map(item => {
            item.porcentaje = parseFloat(item.porcentaje);
            return item;
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    loadDash2() {
      fetch(
        "https://smarcities.000webhostapp.com/Proyecto/generate_dash2.php",
        {
          method: "POST"
        }
      )
        .then(res => res.json())
        .then(res => {
          this.dash2Data.rows = res.result.map(item => {
            item.porcentaje = parseFloat(item.porcentaje);
            return item;
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    loadDash3() {
      fetch(
        "https://smarcities.000webhostapp.com/Proyecto/generate_dash3.php",
        {
          method: "POST"
        }
      )
        .then(res => res.json())
        .then(res => {
          this.contadores.tasks = res.result[0].tasks;
          this.contadores.users = res.result[0].users;
          this.contadores.typess = res.result[0].typess;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    this.loadDash1();
    this.loadDash2();
    this.loadDash3();
  }
};
</script>
<style>
.card-header {
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  color: #555;
}

.card-label {
  text-align: center;
  font-weight: bold;
  color: #666;
}
</style>
