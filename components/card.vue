<template lang="pug">
  el-card
    div {{label}}
    div {{value}}

</template>
<script>
export default {
  props: ["label", "value"]
};
</script>
