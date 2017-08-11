import Vue from 'vue';
import keyboard from 'vue-keyboard';
import Keyb from './Keyb.vue';

new Vue({
    el: '#app',
    components: { keyboard },
    template: `
    <div>
    <input placeholder="press some keys..." maxlength="100" type="text" v-model="input">
        <keyboard v-model="input" @custom="custom" @input="changed" :layouts="[
		'1234567890{delete:backspace}|qwertyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{custom:custom}',
		'!@#$%^&*(){delete:backspace}|QWERTYUIOP|ASDFGHJKL|{shift:goto:0}ZXCVBNM|{space:space}{custom:custom}'
    ]" :maxlength="100"></keyboard>
    </div> `,
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