<template>
 <div>
<img src="https://tctechcrunch2011.files.wordpress.com/2016/12/n26.jpg?w=764&h=400&crop=1">    
<div>
  <span id="done" v-model="done">{{done}}</span>
  <span id="red" class="red"
        v-model="red">{{red}}</span><span id="curr" :style="{ color: activeColor}" 
        v-model="current">{{current}}</span><span id="todo" 
        v-model="todo" v-html="todo">{{todo}}</span>
</div>
     <textarea type="text" @focus="infocus" @blur="unfocus" 
               class="form-control" style="min-width: 100%" v-model="input"></textarea>

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
   import lodash from 'lodash';
   export default {
       components: { keyboard },
       data() {
           return {
               input: '',
               focused: false,
               done: '',
               red: '',
               current: '',
               activeColor: 'red',
               todo: `2017-08-21 07:01:30 Romain Dillet<br><b>
N26 now has 500,000 customers for its bank of the future</b><br>
Fintech startup N26 is getting more and more customers. The company reported 300,000 customers back in March. It now has 500,000 customers across Europe...
<a href="https://techcrunch.com/2017/08/21/n26-now-has-500000-customers-for-its-bank-of-the-future/">https://techcrunch.com/2017/08/21/n26-now-has-500000-customers-for-its-bank-of-the-future/</a>`
           }
       },
       	methods: {
            changed(value) {
                console.log('changed() =>Value ' + value,'input',this.input);
            },
            infocus(){
                this.focused = true;
                console.log('infocus=>focused:',this.focused)
            },
            unfocus(){
                this.focused=false;
                console.log('unfocus=>focused:',this.focused)
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
            },
            getTextArea() {
                return new Promise ((resolve,reject)=>{
                    resolve( document.getElementsByTagName('textarea')[0])
                })
            }
	    },
        watch: {
            input: function(val,oldVal) {
                console.log('watch() input:',oldVal,'=>',val);
                console.log('diff:',_.split(val,oldVal)[1]);

            }
        },
        created() {      
            document.addEventListener('keyup', (event) => {
            
             this.focused ? null : this.input=this.input+event.key;   
             console.log('listener(keyup)=>event.key:',event.key,'input:',this.input);
            });
        this.current = this.todo[0];
        this.todo = this.todo.slice(1);

        },
        directives: {
            focus: {
                updated(el) { el.focus(); }
            }

        }
   }

</script>

<style>
#done {
		background: #E0E0E0;
}
.red {
    background: lightcoral;
}
#curr {
    font-size: 1.2em;
}

img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:90%;
}
               
</style>
