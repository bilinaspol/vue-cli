<template>
  <div>
   <p> SERVER STATUS: {{status }}
    <hr>
    <button @click="changeStatus">Set to Normal</button>
  </div>
</template>
<script>
  export default {
     data: function() {
         return {
             status: 'Critical'
         }
     },
     methods: {
         changeStatus() {
             this.status = 'Now Normal'
         }
     }
  }

</script>
<style scoped>
 div { border: 2px solid red}
</style>