<template lang="pug">
  el-row(:gutter="20")
    el-col(:span="16")
      el-table(:data="data")
    el-col(:span="8")
      el-form.header-form(ref='ruleForm' :model="task")
        el-form-item(label='Usuario')
          el-input(type='text' v-model='name' placeholder="john.doe")
        el-form-item(label='Repetir contraseña')
          el-color-picker(v-model="task.color")
        el-form-item
          el-button(type='primary') Enviar
</template>

<script>
export default {
  layout: "app",
  data: () => ({
    task: {
      name: "",
      color: "#9E74F4"
    },
    data: []
  })
};
</script>
