<template lang="pug">
  div(v-loading="loading")
    div vista del calendario
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
    this.$axios
      .$get("http://5d900d85b9f5430014c26e65.mockapi.io/tasks")
      .then(res => {
        this.loading = false;
        this.events = res.map(item => {
          let eventStart = new Date(item.date_opening);
          let eventEnd = new Date(
            eventStart.setHours(eventStart.getHours() + 1)
          );
          item.startDate = eventStart;
          item.endDate = eventEnd;
          item.class = "leisure";
          return item;
        });
        console.log(this.events);
      });
  }
};
</script>
<style>
.vuecal__cell-date {
  padding: 1rem;
}
</style>
