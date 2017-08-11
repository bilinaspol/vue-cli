import Vue from 'vue';
import Keyb from './Keyb.vue'

new Vue({
    el: '#app',
    components: { 'keyb': Keyb },
    template: `<keyb></keyb>`,
});