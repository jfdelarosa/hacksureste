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
      points: 0
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
    sendTaskWithUser() {
      let payload = {
        type_id: this.task.type_id,
        task_name: this.task.nombre,
        task_description: this.task.description,
        task_points: this.task.points
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/add_task.php", {
        method: "POST",
        body: data
      })
        .then(res => res.json())
        .then(res => {
          if (res.res) {
            this.$router.push({
              name: "app-tasks"
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    sendTask() {
      let payload = {
        type_id: this.task.type_id,
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
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    saveTask() {
      if (this.task.nombre) {
        this.sendTaskWithUser();
      } else {
        this.sendTask();
      }
    },
    querySearch(queryString, cb) {
      let payload = {
        user_name: queryString
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/list_users.php", {
        method: "POST",
        body: data
      })
        .then(res => res.json())
        .then(res => {
          let results = res.result.map(item => {
            item.value = item.user_name;
            return item;
          });
          cb(results);
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    let name = this.$route.params.name;
    if (name) {
      this.getUser(name);
      // this.task.nombre = name;
    }
  }
};
</script>
