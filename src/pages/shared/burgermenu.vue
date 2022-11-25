<template>
    <div id="menuburger">
        <div id="arriba">
            <img src='../../../Trabajo/noun-close-5115237.png' id='cerrar' @click="$emit('change',false)"/>
        </div>
        <div id="botones">
            <button id="btn1" @click="ingresar">Ingreso</button>
            <button id="btn1" style="margin-left: auto;margin-right: 10px;#btn1" @click="ir">Registro</button>
        </div>

        <p style="font-family: 'QuasimodaW03-Medium';font-size: 12px;color: #6A696E;margin-left:18px;margin-top:18px;margin-bottom:17px;">SECCIONES</p>
        
        
        
        <div id="secciones" v-for="p in items" style="margin-top: 1px;#secciones">
            <router-link :to="{name:p.textos}" id="secciones" @click="$emit('change',false)">
                <p id="nombreSec">{{p.textos}}</p>
                <img src="../../../Trabajo/noun-right-1920905.png" id='flechita'/>
            </router-link>
        </div>

        <p style="font-family: 'QuasimodaW03-Medium';font-size: 12px;color: #6A696E;margin-left:18px;margin-top:18px;margin-bottom:17px;">OTROS</p>
        
        <div id="secciones" v-for="f,index in items2" style="margin-top: -2px;#secciones">
            <router-link :to={name:items3[index].textos} id="secciones" @click="$emit('change',false)">
                <p id="nombreSec">{{f.textos}}</p>
                <img src="../../../Trabajo/noun-right-1920905.png" id='flechita'/>
            </router-link>
        </div>
    </div>
</template>

<script>
import router from '../../router/router';

export default {
    name: 'opciones',
    data() {
        return {
            items: [{textos:'Restaurantes'},
            {textos:'Mercados'},
            {textos:'Farmacias'},
            {textos:'Tiendas'},
            {textos:'Bares'},
            {textos:'Recreacion'},
            {textos:'Hospedaje'}],
            items2: [{textos:'Registra tu restaurante'},
            {textos:'Registra tu establecimiento'},
            {textos:'Ver ubicaciones'}],
            items3:[{textos:'restaurante'},
            {textos:'establecimiento'},
            {textos:'ubicaciones'}]
        }
    },
    methods:{
        ir(){
            router.push({name:'restaurante'})
        },
        ingresar(){
            router.push('/login')
        }
    }
}
</script>

<style scoped>
    #menuburger{
        width: 262px;
        height: 739px;
        background-color:#FFFFFF;
        border-right-color: black;
        border-right-style: solid;
        border-right-width: 2px;
        border-top-color: black;
        border-top-style: solid;
        border-top-width: 2px;
        border-bottom-color: black;
        border-bottom-style: solid;
        border-bottom-width: 2px;
    }
    #arriba{
        width: 262px;
        height: 56px;
        background-color:#FFFFFF;
        border-bottom-color: #D9D9D9;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }
    #cerrar{
        width: 20px;
        height: 20px;
        margin-top:18px;
        margin-left:232px;
        cursor: pointer ;
    }
    #secciones{
        background-color: #FFFFFF;
        width: 262px;
        height: 48px;
        margin-top: 18px;
        display: flex;
        align-items: center;
    }
    #nombreSec{
        margin-left: 10px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 15px;
        color: #000000;
    }
    #flechita{
        width: 10px;
        height: 20px;
        margin-left: auto;
        margin-right: 5px;
    }
    #botones{
        width: 262px;
        height: 76px;
        border-bottom-color: #D9D9D9;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        display: flex;
        align-items: center;
    }
    #btn1{
        background-color: #588C08;
        width: 100px;
        height: 36px;
        margin-left: 10px;
        font-size: 20px;
        font-family: 'QuasimodaW03-Medium';
        text-align: center;
        color: #FFFFFF;
        border-radius: 9px;
        border: #588C08;
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
</style>