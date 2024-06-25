<template lang="">
    <div>
        <slot name="cars">
      
        </slot>
         <slot name="game"></slot>
    </div>
<slot v-if="typeof cars == 'object'">
    <h2>{{cars.model}}</h2> 
              {{cars.year}} 
              {{cars.color}}
              <h2> R{{cars.price}}</h2>
            
            </slot>
           
  <slot id="forGames" v-if="typeof games =='object' ">
        <h2>{{games.manufacturer}}</h2>
        {{games.release_year}}
        {{games.storage}}
        <h2>{{games.best_selling_game}}</h2>
        <h1>R{{games.price}}</h1>
     
   </slot>
</template>
 
<script>
export default {
    props:['cars','games']
}
</script>
<style scoped>
      /* div{
        width:300px;
        height:500px;
        position: absolute;
        border-radius: 10%;
    } */
</style>