<template>
 <div>
     <textarea v-focus class="form-control" style="min-width: 100%" v-model="input"></textarea>
 <!---
	<input v-focus placeholder="press some keys..." maxlength="140" type="text" v-model="input">
-->
<keyboard
    v-model="input"
    @custom="custom"
    @input="changed"
    :layouts="[
        '1234567890{⌫:backspace}|qwertyuiop|asdfghjkl|{⇑:goto:1}zxcvbnm|{space:space}{custom:custom}',
        '!@#$%^&*(){⌫:backspace}|QWERTYUIOP|ASDFGHJKL|{⇑:goto:0}ZXCVBNM|{space:space}{custom:custom}'
    ]"
    :maxlength="150"
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
            },
            triggerEvent( elem, event ) {
                var clickEvent = new Event( event ); // Create the event.
                elem.dispatchEvent( clickEvent );    // Dispatch the event.
            },
            getElementByChar(char) {
                return new Promise ((resolve,reject)=>{
                    el= document.querySelector('[data-text="`${char}`"]')
                    console.log(el);
                    resovle(el);
                })
            }
	    },
        created() {
            
            document.addEventListener('keyup', (event) => {
              console.log(event.key);
              this.getElementByChar(event.key).then(function (val) { this.triggerEvent(val,'click')} );

            })
        },
        directives: {
            focus: {
                inserted(el) { el.focus(); }
            }

        }
   }

</script>s

<style>
</style>
