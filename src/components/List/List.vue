<template>
<div id="app" >
    <ul>
        <li v-for="a in dataSource" class="item">
            <div>{{a.name}}</div>
            <div>{{a.age}}</div>
            <div>{{a.born}}</div>
            <div>{{a.desc}}</div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
     name:"mylist",
     data: function(){
         return {
          dataSource:[
             {name:"zlb",age:"28",born:"1993-10-1",desc:"一个热爱生活美食的灵活的胖子"},
             {name:"zcw",age:"26",born:"1995-6-25",desc:"北京体育大学研究生"}
         ]
         }
         
     },
     methods:{

     }
}
</script>

<style>
  @import url('/List.scss')
</style>