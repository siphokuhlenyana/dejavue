<template >
    <h1><p> Yoo, let's play some games , pick your favourite now will you ? 🎮🤔</p></h1>
        <div id="card">
            
        
        <div id="games" v-for="gaming_console in gamesData " :key="gaming_console" :style="{backgroundImage:`url(https://helios-i.mashable.com/imagery/articles/010KWGjGBjJD9ve8L0dXXsG/hero-image.fill.size_1200x1200.v1702327532.jpg)`,backgroundSize:'cover'}">
        <card-comp :games="gaming_console">
        <template #game>
            <h1>{{gaming_console}}</h1>
            
        </template>
         </card-comp>
        </div>
    </div>
    
</template>
<script>
import CardComp from '@/components/CardComp.vue'

export default {
    computed:{
    getGames(){
           return this.$store.dispatch('getGames')
        },
        gamesData(){
      
    return this.$store.state.games
 },
 },
 mounted() {
    this.getGames
 },
    components:{
 CardComp
    }
}
</script>
<style scoped>
    #games{
    width: 370px;
        height:250px;
        border: 5px rgb(180, 186, 8) solid;
        border-radius: 10%;

        color: yellow
}
    #card{
        display: grid;
        grid-template-columns:repeat(3,1fr);
        
        
    }
</style>