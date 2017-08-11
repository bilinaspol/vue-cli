<template>
 <div>
	<input placeholder="press some keys..." maxlength="40" type="text" v-model="input">
      <keyboard
          v-model="input"
          :layouts="alay"
          :maxlength="16"
          @reverse="reverse"
      ></keyboard>
 </div>
</template>

<script>
   import keyboard from '../node_modules/vue-keyboard/src/keyboard.vue';
   export default {
       components: { keyboard },
       data() {
           return {
               input: '',
               alay: [
              '1234567890{delete:backspace}|qwertyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{reverse:reverse}',
              '!@#$%^&*(){delete:backspace}|QWERTYUIOP|ASDFGHJKL|{shift:goto:0}ZXCVBNM|{space:space}{reverse:reverse}'
              ]
           }
       },
       	methods: {
		changed(value) {
			console.log('Value ' + value);
		},

		custom(keyboard) {
			console.log(keyboard.value);
		}
	}
   }

</script>

<style>
</style>
