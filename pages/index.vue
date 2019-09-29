<template lang="pug">
  .landing
    section.features
      .container
        h2.section-title Características
        el-row(:gutter="20")
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="/undraw_Savings_dwkw.svg")
            h1.title Sistema de puntos
            h3.subtitle Gana puntos por cada tarea que completes
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="/undraw_winners_ao2o.svg")
            h1.title Canjea tus puntos
            h3.subtitle Gana recompensas con los puntos obtenidos
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="/undraw_superhero_kguv.svg")
            h1.title ¡Sé el mejor!
            h3.subtitle Compite con tus compañeros
    section.big
      .container
        el-row(:gutter="0" type="flex" align="middle")
          el-col.has-text(:xs="24" :sm="12" :md="16" :lg="16" :xl="16")
            .text
              h3 Mide la productividad
              p Conoce el rendimiento de cada uno de tus colaboradores
          el-col.has-img.hidden-xs-only(:xs="24" :sm="12" :md="8" :lg="8" :xl="16")
            img(src="/undraw_progress_tracking_7hvk.svg")
    section.big
      .container
        el-row(:gutter="0" type="flex" align="middle")
          el-col.has-img.hidden-xs-only(:xs="24" :sm="12" :md="8" :lg="8" :xl="16")
            img(src="/undraw_grades_j6jn.svg")
          el-col.has-text(:xs="24" :sm="12" :md="16" :lg="16" :xl="16")
            .text
              h3 ¡Encuentra al empleado del mes!
              p Compara a todos tus colaboradores y encuentra las tareas ideales para cada uno de ellos
    section.big
      .container
        el-row(:gutter="0" type="flex" align="middle")
          el-col.has-text(:xs="24" :sm="12" :md="16" :lg="16" :xl="16")
            .text
              h3 Manten felices a tus colaboradores
              p Haz que ganen recompensas al llegar a cierta cantidad de puntos
          el-col.has-img.hidden-xs-only(:xs="24" :sm="12" :md="8" :lg="8" :xl="16")
            img(src="/undraw_celebration_0jvk.svg")
    section.last-cta
      h2.title ¿Tienes alguna duda sobre CatBox?
      h3.subtitle ¡Ponte en contacto con nosotros!
      el-button(type="success" round) Enviar mensaje
</template>
<script>
export default {
  layout: "landing"
};
</script>
<style scoped>
.landing {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}
.features {
  padding-bottom: 4rem;
}
.section-title {
  text-transform: uppercase;
  color: #333;
  text-align: center;
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin: 0;
  font-weight: 900;
}
.item {
  text-align: center;
  padding: 2rem;
}
.item img {
  width: 200px;
  height: 200px;
}
.item .title {
  color: #333;
  font-weight: 800;
  margin-bottom: 0 0 0.5rem 0;
}
.item .subtitle {
  margin: 0;
}
.big {
  width: 100%;
}
.big:nth-child(2n) {
  background: #f0f0f0;
  color: #777;
}
.big:nth-child(2n) h3 {
  color: #666;
}
.big:nth-child(2n) h3 {
  color: #555;
}
.big:nth-child(n) p {
  color: #888;
}
.big img {
  width: 100%;
}
.big h3 {
  font-weight: 800;
  font-size: 2rem;
  color: #3c3c3c;
  margin-bottom: 1rem;
}
.big .text {
  color: #5d5d5d;
  font-size: 1.15rem;
  padding: 3rem;
}
.big .has-img {
  padding: 4rem;
}
.last-cta {
  background: #209cee;
  padding: 5rem 0;
  text-align: center;
}
.last-cta .title {
  color: white;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 900;
}
.last-cta .subtitle {
  color: white;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>
