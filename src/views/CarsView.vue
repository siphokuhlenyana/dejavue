<template lang="">
    <h1>Cars for sale !!!!</h1>
    <div id="card">
        
        <div id="cars" v-for="car in carsData " :key="car.make" :style="{backgroundImage:`url(https://images-cdn.welcomesoftware.com/Zz1jOGMwOGM4OWY2M2Q5OTViZDNlOTYxOTUxMTViMTg5OA==)`,backgroundSize:'cover'}">
        <card-comp :cars ="car">
        <template #cars>
            <h1>{{car.make}}</h1>
            
        </template>

         </card-comp>
        </div>
    </div>

   
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    
 computed:{
    getCars(){
           return this.$store.dispatch('getCars')
        },
        carsData(){
      
    return this.$store.state.cars
 },
 },
 mounted() {
    this.getCars
 },
 components:{
    CardComp
 }
}
</script>
<style scoped>

#cars{
    width: 300px;
        height:280px;
        border: 2px black solid;
        border-radius: 10%;
        color: red;
}
    #card{
        display: grid;
        grid-template-columns:repeat(5,1fr);
        
        
    }
</style>