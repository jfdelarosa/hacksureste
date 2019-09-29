<template lang="pug">
  div(v-loading="loading")
    div(v-if="events.length > 0")
      vue-cal(:events="events"
        :time="false"
        :disable-views="['years', 'year']")
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
  layout: "app",
  components: { VueCal },
  data: () => ({
    loading: false,
    events: []
  }),
  created() {
    this.loading = true;
    fetch("https://smarcities.000webhostapp.com/Proyecto/list_usertasks.php", {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        this.loading = false;
        console.log(res);
        this.events = res.result.map(item => {
          let eventStart = new Date(item.open_date);
          let eventEnd = new Date(
            eventStart.setHours(eventStart.getHours() + 1)
          );
          item.startDate = eventStart;
          item.endDate = eventEnd;
          item.class = "clase" + item.type_id;
          return item;
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style>
.vuecal__cell-date {
  padding: 1rem;
}
.vuecal__event {
  padding: 1rem 0;
}
.clase1 {
  background: #bdc3c7;
}
.clase2 {
  background: #e67e22;
}
.clase3 {
  background: #e74c3c;
}
</style>
