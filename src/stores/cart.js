import { ref } from 'vue'
import { defineStore } from 'pinia'

//เมนูอาหาร
export const menuStore = defineStore ('menu', () => {

    
const menuList = ref ([ 
    {title:'ชาเขียว',img:'',price: 65,rating: 5},
    {title:'ชานม',img:'',price: 60,rating: 4.5},
    {title:'ชามะนาว',img:'',price: 50,rating: 4},
    {title:'ชากุหลาบ',img:'',price: 60,rating: 3.5},
    {title:'ชาดำ',img:'',price: 100,rating: 3},
])
const cart = ref([]);

function deleteMenu(i){
    //ลบข้อมูลจาก array ตำแหน่งที่ i
    //console.log(i);


    menuList.value.splice(i,1) //ลบตำแหน่งที่ i จำนวน 1 ตัว
}

function addMenu(x) {
    menuList.value.push(x)
}

return { menuList , deleteMenu , addMenu }

})