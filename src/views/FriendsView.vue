<template lang="">
    <h1>Mutual Friends</h1>
    <div id="card">
            <div id="friends" v-for="friend in friendsData " :key="friend.name" :style="{borderColor:friend.gender == 'Male'?'gold':'green', borderWidth:'8px',borderStyle:'solid', backgroundImage:`url(https://takalanisesame.org.za/wp-content/uploads/2022/06/TS_Season-13-About-us-01.jpg)`,backgroundSize:'cover' }">
        <h1>{{friend.firstName}} {{friend.lastName}}</h1>

        <h3>{{friend.gender}}</h3>
        <h2>{{friend.profile}}</h2>
        <h2>{{friend.contactDetails}}</h2>
        <!-- <p>{{$store.state.friends}}</p> -->

        </div>
    </div>
        <!-- <div id="female" v-if="gender == female">
            <div id="friends" v-for="friend in friendsData " :key="friend.name">
        <h1>{{friend.firstName}} {{friend.lastName}}</h1>

        <p>{{friend.gender}}</p>
        <h2>{{friend.profile}}</h2>
        <h2>{{friend.contactDetails}}</h2>

        </div>
         -->
<!--        
    </div> -->
</template>
<script>
export default {
    computed:{
        friendsData(){
      
      return this.$store.state.friends
   },
   getFriends(){
    return this.$store.dispatch('getFriends')
   },
    
    // check(){
    //  if(this.$store.state.friends.gender ==="Male"){
    //     return"gold"
        
    //  }else{
    //     return "green"
    //  }
    // }
    },
    
   
   mounted() {
      this.getFriends
   },
}

</script>
<style scoped>
    #friends{
    width: 300px;
        height:250px;
        /* border: 2px gold solid; */
        border-radius: 20%;
        color: aliceblue;
}
    #card{
        display: grid;
        grid-template-columns:repeat(4,1fr);
        
        
    }
   
    /* #female{
        width: 300px;
        height:250px;
        border: 2px green solid;
        border-radius: 20%;
    } */

    
</style>