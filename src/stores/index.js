import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {id: 1,
                name:'ชาเขียว',
                image:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384541924_341564884942542_6887726310942190159_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHJ-JXVAtb1bNszcbiqzs0lbI-L4QDp5XNsj4vhAOnlc8YxfuJ9AujpWQijzF7ZfvFTwhrXOudJOWImz1AIviw3&_nc_ohc=dSwj6KFJP7EAX-odPTa&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdQKFd-uMfLG1Nnc-SjTH_klIEn8GAEzNNcfdhIYO1mwkA&oe=6544A3CE',
                price: 65,
                rating: 5,
                quantity:0},

                {id: 2,
                name:'ชานม',
                image:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384546123_868985214837772_5946423389114134366_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGj3ht4eJ88NuvByNU7swutiTsupqLJhV-JOy6mosmFX06_bHIgOEivvjVGjaE1VSDXPJLYnUdPsVsoA2bOGahg&_nc_ohc=BTB1RKp8580AX_jexSx&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTA15wSNVq46uLZPpPz6hYg5UA_KVDlWWEdIYwMgIlspA&oe=65449D11',
                price: 60,
                rating: 4.5,

                quantity:0},

                {id: 3,
                name:'ชามะนาว',
                image:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384543860_6576215745827901_4569979021462994822_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHRuHaN5HiwScWi7NETmd6XgsIqMU83ysiCwioxTzfKyKEz_1KFbgZGQmcUVe4YA6nz4pc20QndQh8IKwSBwvyb&_nc_ohc=CSm6CnJ13tEAX_jBPF4&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdSSNEykGTSBLuEXojAyl9Ys2pp5KiNLIfEj77O9bC_bRw&oe=6544AE8E',
                price: 50,
                rating: 4,
       
                quantity:0},

                {id: 4,
                name:'ชากุหลาบ',
                image:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384545896_1014036509866995_3419511629916588225_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE__ulVCNbydelvU9Y1Js3QcjTYo12gudVyNNijXaC51XcNIWSKYp_DayeyG7XBrcHp2rVzSwfaAdXcDSRkpHaf&_nc_ohc=T4sl7IPbV5AAX8ztXQA&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdShwVBDkbtixwfQScgm7JrMUMQuMqi0V8vcI10IGbnKKA&oe=65449BE6',
                price: 60,
                rating: 3.5,
                quantity:0},

                {id: 5,
                name:'ชาดำ',
                image:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/384541941_330401592813043_410832395344733403_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE8l_S5pHtf_DRuyjYezPmrWPflG9UJfPFY9-Ub1Ql88QtAomwOKD-YBNovfCDc_c6FX_hR_8A8HLrAWbgsC2Nx&_nc_ohc=CLLMmZ25Ih4AX9N1cE9&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdRf-DrMLO1em6w1elbRdsz_aOJPHrIqfVHrR5udWz62mw&oe=6544A62A',
                price: 100,
                rating: 3,
                quantity:0},

                {id: 6,
                name:'ชาแอปเปิ้ล',
                image:'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/386836980_1409106199640067_960488526082374197_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEsujTGz411SrHtayZGtAGMXRMistrjR5JdEyKy2uNHkhuZwR9fbquHXIQ9yth5cjPhJ_kBzSg0FBk0jAiAuV0I&_nc_ohc=1EI9JDqPvcwAX_xAwj5&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTiLFDqkM0H2V_JirGd_ifDMNShRgSQDzvgy_wvVvo_QQ&oe=6544C178',
                price: 55,
                rating: 3,
                quantity:0},
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'เพิ่มสินค้าอีก 1 รายการเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'เพิ่มสินค้าไปที่ตะกร้าเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;

            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
 
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            
        }
        
    },
})