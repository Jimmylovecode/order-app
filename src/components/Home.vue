<template>
<div  class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="background">
            <h1>欢迎大家品尝</h1>
            <h2>这里有多款Pizza</h2>
            <button @click="goToMenu" class="btn btn-success">Let's order!</button>
        </div>
    </div>
    <h1>Home</h1>
    
</div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            this.$router.push('/menu')
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
#home{
    background: url('../../src/assets/pizza.jpg');
    height: 85vh;
    padding:10%,
}
h1,h2{
    margin:6%
}
.background{
    background:#eee;
    opacity: 0.8;
    max-width: 70vw;
    margin:0 auto;
    padding:20px 0
}
</style>