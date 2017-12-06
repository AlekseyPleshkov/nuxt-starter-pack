import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
