<template>
<div class="row"> 
    <div class="col-sm-12 col-md-8">
        <!-- new pizza -->
        <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
        <!-- 品种展示 -->
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table">
            <thead class="table table-default">
                <tr>
                    <th>品种a</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody v-for="item in getMenuItems" :key="item.name">
                <tr>
                    <td>{{item.name}}</td>
                    <td>
                        <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
  components: { NewPizza },
  data(){
      return {
          /* getMenuItems:[] */
      }
  },
  created(){
      fetch("https://order-app-a7e37-default-rtdb.firebaseio.com/menu.json")
      .then(res => {
          return res.json()
      })
      .then(data => {
          let menuArray = []
          for(let key in data){
              data[key].id = key
              menuArray.push(data[key])
          }
          /* this.getMenuItems = menuArray */
          this.$store.commit('setMenuItems',menuArray)
      })
  },
  methods:{
      deleteData(item){
        fetch("https://order-app-a7e37-default-rtdb.firebaseio.com/menu/"+item.id+"/.json",{
            method:"DELETE",
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.$store.commit('removeMenuItems',item))
        }
  },
  computed:{
      getMenuItems:{
          get(){
              return this.$store.state.menuItems
               
          },
          set(){}
      }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>