<script setup>

import { RouterView } from 'vue-router'

import boxheader from './views/boxheader.vue'
import {menuStore} from '@/stores/cart.js'

const allmenu = menuStore()
</script>


<template>
  
  <div class="header1">
    <header class="border-bottom lh-1 py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="link-secondary" href="#">
            <img src="https://www.pngmart.com/files/21/Coffee-PNG-Isolated-Picture.png" alt="" style="height: 100px; padding-left: 100px;" >
          </a>
        </div>

        <div class="col-4 text-center">
          <a class="blog-header-logo text-body-emphasis text-decoration-none" href="" style="font-size: 30px; font-family: fantasy;"> <span class="center">NanHaidi</span> </a>
          <!--ชื่อเว็ปไซต์-->
        </div>
        <!--ปุ่ม-->
        <div class="buttonmenu">
          <nav>
            <RouterLink to="/" class="menu-link">หน้าหลัก </RouterLink>
            
            <RouterLink to="/menu" class="menu-link"><img src="https://www.svgrepo.com/show/233885/shopping-bag.svg" style="height:50px;"> 
              
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>
  </div>
  <div class="card1">
    <div class="container">
      <boxheader></boxheader>
      <RouterView/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};

</script>

<style scoped>


.card1{
  font: 1em sans-serif;
  background-image: url(https://i.pinimg.com/736x/57/05/aa/5705aade213ab590d05616acf23735c8.jpg);

  
}
.menu-link {
  margin-right: 20px; /* เพิ่มระยะห่างขวาของลิงก์แต่ละตัว */
  color: rgb(255, 255, 255);
  font-size:20px ;

}




</style>