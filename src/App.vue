<template>
    <!-- <AmbienteWeb/>
    <Restaurantes/>
    <Mercados/>
    <Farmacias/>
    <Tiendas/>
    <Bares/>
    <Recreacion/>
    <Hospedajes/>   
    <Restaurante/>
    <RegistrarRestaurante/> -->
    <RegistrarEstablecimiento/>
 </template>
 
 <script>
import AmbienteWeb from './components/AmbienteWeb.vue';
 import Restaurantes from './components/Restaurantes.vue';
import Mercados from './components/Mercados.vue';
import Farmacias from './components/Farmacias.vue';
import Tiendas from './components/Tiendas.vue';
import Bares from './components/Bares.vue';
import Recreacion from './components/Recreacion.vue';
import Hospedajes from './components/Hospedajes.vue'; 
import Restaurante from './components/Restaurante.vue';
import RegistrarEstablecimiento from "./components/RegistrarEstablecimiento.vue";
import RegistrarRestaurante from "./components/RegistrarRestaurante.vue";
     export default{
         name:'App',
         components:{
    AmbienteWeb,
    Restaurantes,
    Mercados,
    Farmacias,
    Tiendas,
    Bares,
    Recreacion,
    Hospedajes,
    Restaurante,
    RegistrarEstablecimiento,
    RegistrarRestaurante
}
     }
 </script>
 <style>
     
 </style>
 