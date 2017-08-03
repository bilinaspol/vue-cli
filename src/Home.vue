<template>
 <div>
    <server-status v-for="(server,k) in 3" :key="k"></server-status>
 </div>
</template>
<script>
    import  ServerStatus  from './ServerStatus.vue'
    export default {
       components: {
           ServerStatus
       }

    }
</script>
<style >
 div { border: 5px dashed blue}
</style>