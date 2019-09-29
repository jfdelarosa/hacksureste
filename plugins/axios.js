import axios from "axios";
import Vue from "vue";
let instance = axios.create({
  baseURL: "//smarcities.000webhostapp.com/Proyecto/"
});
Vue.prototype.$http = instance;
