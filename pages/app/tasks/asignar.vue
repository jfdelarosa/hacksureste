<template lang="pug">
  el-row(:gutter="20")
    el-col(:span="12")
      template
        el-table(:data='users' style='width: 100%' v-on:selection-change='handleSelectionChange')
          el-table-column(type='selection', width='55')
          el-table-column(prop="user_name" label="Nombre")
    el-col(:span="12")
      el-form.header-form(:model="task" label-position="top")
        el-form-item(label='Tarea')
          el-autocomplete(
            v-model="task.nombre"
            :fetch-suggestions="searchTasks"
            placeholder="Please Input"
            @select="handleSelect")
        el-row(:gutter="20")
          el-col(:span="12")
            el-form-item(label='Duración')
              el-input-number(v-model="task.task_duration" :min="0" :max="100")
          el-col(:span="12")
            el-form-item(label='Unidad')
              el-select(v-model="unidad")
                el-option(value="Hora(s)")
                el-option(value="Dia(s)")
                el-option(value="Semana(s)")
        el-form-item(label="Fecha:")
          el-date-picker(v-model='task.open_date' type='date' placeholder='Selecciona una fecha')
        el-button(type="success" icon="el-icon-check" v-on:click="send") Asignar
</template>
<script>
export default {
  layout: "app",
  data: () => ({
    users: [],
    selectedUsers: [],
    unidad: "Horas",
    task: {
      nombre: "",
      task_id: "",
      task_duration: "",
      open_date: ""
    }
  }),
  methods: {
    handleSelectionChange(val) {
      this.selectedUsers = val;
    },
    handleSelect(item) {
      this.task.task_id = item.task_id;
    },
    send() {
      this.selectedUsers.forEach(item => {
        this.asignTask(item.user_id);
      });
    },
    asignTask(user_id) {
      let payload = {
        user_id: user_id,
        task_id: this.task.task_id,
        task_duration: this.task.task_duration,
        open_date: new Date(this.task.open_date)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/add_usertask.php", {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(res => {
          if (res.res) {
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    searchTasks(queryString, cb) {
      let payload = {
        task_name: queryString
      };
      var data = new FormData();
      data.append("json", JSON.stringify(payload));
      fetch("https://smarcities.000webhostapp.com/Proyecto/list_tasks.php", {
        method: "POST",
        body: data
      })
        .then(res => res.json())
        .then(res => {
          let results = res.result.map(item => {
            item.value = item.task_name;
            return item;
          });
          cb(results);
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    fetch("https://smarcities.000webhostapp.com/Proyecto/list_users.php", {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        this.users = res.result;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style>
.el-input-number,
.el-select,
.el-date-editor {
  width: 100% !important;
}
</style>
