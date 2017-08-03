import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('cmp-home', Home)

new Vue({
    el: '#app',
    ...App
})