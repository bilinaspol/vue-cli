<template>
 <div>
	<input placeholder="press some keys..." maxlength="40" type="text" v-model="input">
<keyboard
    v-model="input"
    @custom="custom"
    @input="changed"
    :layouts="[
        '1234567890{delete:backspace}|qwertyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{custom:custom}',
        '!@#$%^&*(){delete:backspace}|QWERTYUIOP|ASDFGHJKL|{shift:goto:0}ZXCVBNM|{space:space}{custom:custom}'
    ]"
    :maxlength="50"
></keyboard>
 </div>
</template>

<script>
   import keyboard from './keyboard.vue';
   export default {
       components: { keyboard },
       data() {
           return {
               input: ''
           }
       },
       	methods: {
            changed(value) {
                console.log('Value ' + value);
            },

            custom(keyboard) {
                console.log(keyboard.value);
            }
	    },
        created() {
            document.addEventListener('keyup', (event) => {
              console.log(event.key);
            })
        }
   }

</script>

<style>
</style>
