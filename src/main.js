import Vue from 'vue';
import keyboard from 'vue-keyboard';

new Vue({
    el: '#app',
    components: { keyboard },

    data: {
        input: '',
    },

    methods: {
        changed(value) {
            console.log('Value ' + value);
        },

        custom(keyboard) {
            console.log(keyboard.value);
        }
    }
});