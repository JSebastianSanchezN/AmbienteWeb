<template>
    <transition name="slide-fade">
        <burgermenu v-if="show" style="position:fixed;z-index: 1;margin-top:-10px;margin-left:-10px;height: 100vh;overflow-y: auto;width:auto;" @change="checkdata($event)"/>
    </transition>
    <div id="cabezera">
        <img src='Trabajo/noun-more-897915.png' id='iconburger' @click="show = !show"/>
        <router-link to="/">
            <p id="titulo">PanceTour</p>
        </router-link>
        <div id='linea'></div>
        <img src='Trabajo/noun-pointer-2012011.png' id='imgubiactual'/>
        <p id="ubiactual">Usar tu ubicación actual</p>
        <img src='Trabajo/noun-arrow-1787131.png' id='imgubiactual' style="width:25px;height:25px;margin-left:5px; #imgubiactual"/>
        <div id='linea' style="margin-left: 19px;#linea"></div>
        <div id="direccioninicio">
            <img src='Trabajo/noun-pointer-2012011.png' id='imgubiactual' style="width: 35px;height: 35px;margin-left: 7.5px;#imgubiactual"/>
            <p id="empezarviaje">¿En dónde quieres empezar tu viaje?</p>
            <img src='Trabajo/noun-search-5101006.png' id='imgubiactual' style="width: 50px;height: 50px;margin-left: 15px;#imgubiactual"/>
        </div>
        <router-link :to="{name:variable}">
            <div style="top:-10px;right:2px;display:flex;align:right;position:absolute;">
                <img src='Trabajo/noun-profile-5084947.png' id='imgubiactual' style="margin-top: 28px;width: 34px;height: 34px;margin-right:0px;#imgubiactual"/>
                <p id="titulo" style="margin-top: 20px;margin-left: 2px;font-size:30px;#titulo">{{info}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import { useStore } from "vuex"
import Burgermenu from './burgermenu.vue';
export default {
    props:{
        variable: String
    },
    name: "cabecera",
    data() {
        return {
            store:useStore(),
            show:false,
            info:'',
            cambio:'Login'
        }
    },
    methods:{
        checkdata(data){
            this.show=data
            if(this.show==true){

            }
        },
        asignar(){
            const logged=this.store.state.user.user.loggedIn
            if (logged==false){
                this.info='Ingreso'
            }else{
                this.info=this.store.state.user.user.data.email
            }
        }
    },
    mounted(){
        this.asignar() 
    },
    unmounted: () => {
        window.scrollTo(0, 0);
    },
    components: { Burgermenu }
}
</script>

<style scoped>
    #cabezera{
        background-color:#F2F2F2;
        height: 62px;
        width: 1490px;
        display: flex;
        align-items: center;
    }
    #iconburger{
        width: 45px;
        height: 45px;
        cursor: pointer;
    }
    #titulo{
        margin-top: 31px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 40px;
        color: #274001;
    }
    #linea{
        background-color: #D9D9D9;
        width: 4px;
        height: 51px;
        border-radius: 2px;
        margin-left: 15px;
    }
    #imgubiactual{
        margin-left: 15px;
        width: 30px;
        height: 30px;
    }
    #ubiactual{
        font-family: 'QuasimodaW03-Medium';
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        color: #274001;
    }
    #direccioninicio{
        margin-left: 19px;
        width: 445px;
        height: 50px;
        background-color: #D9D9D9;
        border-radius: 25px;
        display: flex;
        align-items: center;
    }
    #empezarviaje{
        font-family: 'QuasimodaW03-Medium';
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #6A696E;
    }
    a{
        text-decoration: none;
        display: flex;
    }
    .slide-fade-enter-active {
        transition:all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter-to{
        transform: translateX(10px);
        opacity: 0;
      }
      .slide-fade-leave-to{
        transform: translateX(-10px);
        opacity: 0;
      }
</style>