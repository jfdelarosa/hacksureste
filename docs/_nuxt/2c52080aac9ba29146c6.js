(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{822:function(t,e,r){var content=r(829);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("274f6afe",content,!0,{sourceMap:!1})},828:function(t,e,r){"use strict";var o=r(822);r.n(o).a},829:function(t,e,r){(t.exports=r(70)(!1)).push([t.i,".card-header{font-size:3rem;color:#555}.card-header,.card-label{font-weight:700;text-align:center}.card-label{color:#666}",""])},844:function(t,e,r){"use strict";r.r(e);var o={layout:"app",data:function(){return{contadores:{tasks:0,users:0,typess:0},dash1Data:{columns:["user_name","porcentaje"],rows:[]},dash2Data:{columns:["task_name","porcentaje"],rows:[]}}},methods:{loadDash1:function(){var t=this;fetch("https://smarcities.000webhostapp.com/Proyecto/generate_dash1.php",{method:"POST"}).then((function(t){return t.json()})).then((function(e){t.dash1Data.rows=e.result.map((function(t){return t.porcentaje=parseFloat(t.porcentaje),t}))})).catch((function(t){console.log(t)}))},loadDash2:function(){var t=this;fetch("https://smarcities.000webhostapp.com/Proyecto/generate_dash2.php",{method:"POST"}).then((function(t){return t.json()})).then((function(e){t.dash2Data.rows=e.result.map((function(t){return t.porcentaje=parseFloat(t.porcentaje),t}))})).catch((function(t){console.log(t)}))},loadDash3:function(){var t=this;fetch("https://smarcities.000webhostapp.com/Proyecto/generate_dash3.php",{method:"POST"}).then((function(t){return t.json()})).then((function(e){t.contadores.tasks=e.result[0].tasks,t.contadores.users=e.result[0].users,t.contadores.typess=e.result[0].typess})).catch((function(t){console.log(t)}))}},created:function(){this.loadDash1(),this.loadDash2(),this.loadDash3()}},n=(r(828),r(32)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",{staticStyle:{"margin-bottom":"1rem"},attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{staticClass:"card-header"},[t._v(t._s(t.contadores.tasks))]),r("div",{staticClass:"card-label"},[t._v("Tareas")])])],1),r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{staticClass:"card-header"},[t._v(t._s(t.contadores.users))]),r("div",{staticClass:"card-label"},[t._v("Usuarios")])])],1),r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{staticClass:"card-header"},[t._v(t._s(t.contadores.typess))]),r("div",{staticClass:"card-label"},[t._v("Tipos de tareas")])])],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[t.dash1Data.rows.length>0?r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[t._v("Tareas por usuario")])]),r("ve-pie",{attrs:{data:t.dash1Data}})],1):t._e()],1),r("el-col",{attrs:{span:12}},[t.dash2Data.rows.length>0?r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[t._v("Cantidad de tareas")])]),r("ve-pie",{attrs:{data:t.dash2Data}})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);