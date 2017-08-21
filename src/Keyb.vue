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
               input: '',
               isActive: false,
               input_focused: false
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
                   resolve( document.querySelector('[data-text="'+char+'"]'))
                })
            }
	    },
        created() {
            
            document.addEventListener('keyup', (event) => {
             this.input=this.input+event.key; 
               
             console.log('event.key:',event.key,this.input);
             this.getElementByChar(event.key)
                 .then(resolve=> {
                     console.log(resolve);
                     consoel.log('input_focused:',this.input_focused);        
                 })
            }),
            input.addEventListener("focus", function() {
                 this.input_focused = true;
            }),
            input.addEventListener("blur", function() {
                this.input_focused = false;
            })
        },
        directives: {
            focus: {
                updated(el) { el.focus(); }
            }

        }
   }

</script>

<style>
.hov {
		background: #E0E0E0;
}
</style>
