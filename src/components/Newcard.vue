<template>
<div class="cardall">
<div class="row mb-2 ">
        <div class="col-md-6 " v-for="(n,i) in menuList" :key="n">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="card-bg col p-4 d-flex flex-column position-static">
              <div class="menulistA">
              <strong class="d-inline-block mb-2 text-primary-emphasis "><span class="number">Menu {{ i+1 }}</span> </strong>
              <h3 class="mb-0"><br>{{n.title}}</h3>
              <div class="mb-1 text-body-secondary "> 
                <span class="price-text">ราคา  {{n.price}} บาท </span>
                <h4 class="card-rating1">rating : {{ n.rating }}</h4>
                </div>
              </div>
              <p class="card-text mb-auto">{{n.text_box}}</p>
              
              <div style="margin-bottom: 10px;">
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link" >
                
                <button class="black-text">กดเพื่อเลือกสินค้า</button>
                <svg class="bi" style="background-color: rgb(179, 206, 255); color: rgb(21, 48, 128);"> <use xlink:href="#chevron-right"/></svg>
             </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block ">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="0" width="300" height="300" />
              </svg>
            </div>
          </div>
        </div>

      
    </div>
  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';



//variable drinking

const menuList = ref ([ 
    {title:'ชาเขียว',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384541924_341564884942542_6887726310942190159_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHJ-JXVAtb1bNszcbiqzs0lbI-L4QDp5XNsj4vhAOnlc8YxfuJ9AujpWQijzF7ZfvFTwhrXOudJOWImz1AIviw3&_nc_ohc=dSwj6KFJP7EAX-odPTa&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdQKFd-uMfLG1Nnc-SjTH_klIEn8GAEzNNcfdhIYO1mwkA&oe=6544A3CE',
    price: 65,
    rating: 5},

    {title:'ชานม',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384546123_868985214837772_5946423389114134366_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGj3ht4eJ88NuvByNU7swutiTsupqLJhV-JOy6mosmFX06_bHIgOEivvjVGjaE1VSDXPJLYnUdPsVsoA2bOGahg&_nc_ohc=BTB1RKp8580AX_jexSx&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTA15wSNVq46uLZPpPz6hYg5UA_KVDlWWEdIYwMgIlspA&oe=65449D11',
    price: 60,
    rating: 4.5},

    {title:'ชามะนาว',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384543860_6576215745827901_4569979021462994822_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHRuHaN5HiwScWi7NETmd6XgsIqMU83ysiCwioxTzfKyKEz_1KFbgZGQmcUVe4YA6nz4pc20QndQh8IKwSBwvyb&_nc_ohc=CSm6CnJ13tEAX_jBPF4&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdSSNEykGTSBLuEXojAyl9Ys2pp5KiNLIfEj77O9bC_bRw&oe=6544AE8E'
    ,price: 50,
    rating: 4},

    {title:'ชากุหลาบ',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384545896_1014036509866995_3419511629916588225_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE__ulVCNbydelvU9Y1Js3QcjTYo12gudVyNNijXaC51XcNIWSKYp_DayeyG7XBrcHp2rVzSwfaAdXcDSRkpHaf&_nc_ohc=T4sl7IPbV5AAX8ztXQA&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdShwVBDkbtixwfQScgm7JrMUMQuMqi0V8vcI10IGbnKKA&oe=65449BE6',
    price: 60,
    rating: 3.5},

    {title:'ชาดำ',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384541941_330401592813043_410832395344733403_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE8l_S5pHtf_DRuyjYezPmrWPflG9UJfPFY9-Ub1Ql88QtAomwOKD-YBNovfCDc_c6FX_hR_8A8HLrAWbgsC2Nx&_nc_ohc=CLLMmZ25Ih4AX9N1cE9&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdRf-DrMLO1em6w1elbRdsz_aOJPHrIqfVHrR5udWz62mw&oe=6544A62A',
    price: 100,
    rating: 3},

    {title:'ชาแอปเปิ้ล',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/386836980_1409106199640067_960488526082374197_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEsujTGz411SrHtayZGtAGMXRMistrjR5JdEyKy2uNHkhuZwR9fbquHXIQ9yth5cjPhJ_kBzSg0FBk0jAiAuV0I&_nc_ohc=1EI9JDqPvcwAX_xAwj5&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTiLFDqkM0H2V_JirGd_ifDMNShRgSQDzvgy_wvVvo_QQ&oe=6544C178',
    price: 55,
    rating: 3},

    {title:'ชาเขียวส้มยูสุ',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384838770_1351702002388519_5493807169726486666_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEGxXGlJ-BZoRBQD3ynnfZC8SvU9J-akm_xK9T0n5qSbykgO6Efg9x1PAgU0SnBKnCcGes3AB1hLIFZH3zRgdrs&_nc_ohc=ARVoUbzDz5wAX-MGVuW&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTTT1BjByhLXFhnnSCnzgR39jj91YGU0NiJxDXR0-NzwQ&oe=65475693',
    price: 60,
    rating: 3},

    {title:'ชามะลิ',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384825649_288129180853716_5539802345346868845_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeExFimqyphnJucecafPHOIzvQcX2UfDv0C9BxfZR8O_QJs7kUXws8zooCjWbWgmbOQ8wx3aXll_zp6lOx6yQF9h&_nc_ohc=F2bDrnfghl0AX9TpDck&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdRSXqJI0-vpIjFUSewibyCZn12sUDjyRqsnAvwxe84Log&oe=65474B7A',
    price: 40,
    rating: 4},

    {title:'ชาอู่หลง',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384828809_1784114762027775_1430134935389149064_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHQ7n2k3k1rMthDYxhh8xpPck6k5FYz8INyTqTkVjPwg_59FKk-Qr0XuJ_kx4WnCCOQZcSHcV9LdioQizM5WFFo&_nc_ohc=VnzQBydm6_0AX-bEheG&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdRsu43kgdJmF7KEiCFV52WxTwrRVRpchFlc0-yc1Sj36Q&oe=65477311',
    price: 65,
    rating: 4},

    {title:'ชาไทย',
    img:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/386458360_342100778216949_744629869774376106_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEUjDluxh-JtHIhA94rnlWr8NsShv4gRD3w2xKG_iBEPU4_r2tU9PANtqOvaw3ouO_7S0MHsKTe_mu3CT7ZvVjL&_nc_ohc=Gf5tzk59ctAAX-ZeMqA&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdRSiO-aoCa6izGrZU38t-IzZ3fOHo4RqKBaGYY4XTsADA&oe=654772BB',
    price: 50,
    rating: 5},


])




</script>

<style >
.card-bg{
  
  background: linear-gradient(  #1a462f , #293742 );
  color: rgb(255, 255, 255);
}
.black-text {
  background-color: rgb(235, 255, 251);
  margin-top: 20px;
  color: rgb(9, 27, 17); /* กำหนดสีข้อความเป็นสีดำ */

}
.price-text{
  color: rgb(255, 255, 255);
  background: rgb(11, 12, 66);
  padding-inline: 10px;
  font-size: 20px;


}
.number{
  color: rgb(255, 255, 255);
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 10px;
  padding-bottom:10px;
  font-size: 20px;
  
  
  background: rgb(9, 27, 48);
}
.cardall{
  background: rgba(255, 255, 255, 0.374);
  padding: 20px;
  margin: 20px;
  border-top: 2px solid #e6e6e6 ;
  border-left: 2px solid #ffffff ;
  box-shadow: 20px #0b0427;
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  
}
.card-rating1{
  color: #e6e6e6;
}
.menulistA{
  text-align: center;

}
.mb-0{
  font-size: 30px;
  
}
</style>