<template>
    <Cabecera :variable='cambio'/>
    <DireccionG/>
    <Opciones/>
    <Registro/>
</template>

<script>
import { useStore } from "vuex"
import Cabecera from "./shared/cabecera.vue";
import DireccionG from "./inicio/direccionG.vue";
import Opciones from "./inicio/opciones.vue";
import Registro from "./inicio/registro.vue";
import store from "../store";
export default{
    name:'principal',
    components:{
    Cabecera,
    DireccionG,
    Opciones,
    Registro
},
data(){
    return {
        store:useStore(),
        cambio:''
    }
},
methods:{
    cambiar(){
        if(store.state.user.user.loggedIn==true){
            this.cambio='Crear'
        }else{
            this.cambio='Login'
        }
    }
}, 
mounted(){
    this.cambiar()
    }
}
</script>

<style scoped>
</style>