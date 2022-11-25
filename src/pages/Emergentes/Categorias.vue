<template>
  <Cabecera/>
  <div id="seccion">
    <p id="titulo1">{{this.$route.name}} en Pance</p>
    <div id="inicio">
      <img src="../../../Trabajo/noun-house-5117342.png" id="imgseccion"/>
      <p id="content">Inicio·{{this.$route.name}} en Pance</p>
    </div>
  </div>
  <div id="tipos">
      <div id="cajas"></div>
      <div id="cajas" style="margin-left: 1.2px;margin-top:20px;#cajas" v-for="p in 19" ></div>
  </div>
  <div id="filtros">
    <p id="filtro">Filtrar por:</p>
    <p id="filtro" style="margin-right: 233px;margin-left: auto;#filtro">Ordenar por:</p>
  </div>
  <div id="linea">
    <p id="textos">{{this.$route.name}} cerca de mi</p>
    <div id="restaurantes" v-for="p in items" :style="p.textos1">
      <router-link :to="{name:redireccion}">
        <img :src="prueba" id="img" v-for="j in items" :style="j.textos2" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Cabecera from "../shared/cabecera.vue";
export default {
    name: "Categorias",
    data() {
        return {
            items: [{ textos1: "margin-top: -30px;#restaurantes", textos2: "margin-left: 15px;#img" },
            { textos1: "margin-top: 0px;#restaurantes", textos2: "margin-left: 30px;#img" },
            { textos1: "margin-top: 0px;#restaurantes", textos2: "margin-left: 30px;#img" },
            { textos1: "margin-top: 0px;#restaurantes", textos2: "margin-left: 30px;#img" },
            { textos1: "margin-top: 0px;#restaurantes", textos2: "margin-left: 30px;#img" },
            { textos1: "margin-top: 0px;#restaurantes", textos2: "margin-left: 30px;#img" }],
            img:[{name:'Restaurantes', picture:"Trabajo/restaurantes.jpg"},
            {name:'Mercados',picture:'Trabajo/mercados.jpg'},
            {name:'Farmacias',picture:'Trabajo/farmacias.jpg'},
            {name:'Tiendas',picture:'Trabajo/tiendas.jpg'},
            {name:'Bares',picture:'Trabajo/bares.jpg'},
            {name:'Recreacion', picture:'Trabajo/recreacion.jpg'},
            {name:'Hospedaje', picture:'Trabajo/hospedaje.jpg'}],
            prueba:'',
            redireccion:''
        };
    },
    components: { Cabecera },
    methods:{
      imagen(){
        for(var i=0;i<7;i++){
          if(this.$route.name==this.img[i].name){
            this.prueba=this.img[i].picture
            return this.prueba
          }
        }
      },
      ir(){
        if(this.$route.name=='Restaurantes'){
          this.redireccion='Restaurante1'
        }else if(this.$route.name=='Mercados'){
          this.redireccion='Mercado'
        }else if(this.$route.name=='Farmacias'){
          this.redireccion='Farmacia'
        }else if(this.$route.name=='Tiendas'){
          this.redireccion='Tienda'
        }else if(this.$route.name=='Bares'){
          this.redireccion='Bar'
        }else if(this.$route.name=='Recreacion'){
          this.redireccion='Recreacion1'
        }else if(this.$route.name=='Hospedaje'){
          this.redireccion='Hospedajes'
        }
        return this.redireccion
      }
    },
    mounted(){
      this.imagen(),
      this.ir()
    },
    updated(){
      this.imagen(),
      this.ir()
    }
}
</script>
<style scoped>
  #seccion{
    width: 1490px;
    height: 77px;
    background-color: #A9F274;
    display: flow-root;
  }
  #titulo1{
    font-family: 'QuasimodaW03-Medium';
    font-size: 24px;
    margin-left: 20px;
    margin-top: 10px;
    color:#000000;
  }
  #inicio{
    margin-top: -25px;    
    margin-left: 20px;
    display: flex;
  }
  #imgseccion{
    width: 15px;
    height: 15px;
  }
  #content{
    margin-top: 0px;
    margin-left: 5px;
    font-family: 'Quasimoda';
    font-size: 16px;
    color: #000000;
  }
  #tipos{
    width: 1490px;
    height: 110px;
    background-color: #D9D9D9;
    display: flex;
  }
  #cajas{
    background-color: #6A696E;
    width: 70px;
    height: 70px;
    margin-left: 35px;
    margin-top: 20px;
  }
  #filtros{
    width: 1490px;
    height: 64px;
    background-color: #6A696E;
    display: flex;
  }
  #filtro{
    font-family: 'QuasimodaW03-Medium';
    font-size: 20px;
    color:#FFFFFF;
    margin-left: 16px;
    margin-top: 14px;
  }
  #linea{
    width: 1490px;
    height: 1600px;
    background-color: #D9D9D9;
    display: flow-root;
  }
  #textos{
    margin-top: 16px;
    margin-left: 16px;
    font-family: 'QuasimodaW03-Medium';
    font-size: 24px;
    color:#000000;
    background-color: #D9D9D9;
    height: 34px;
  }
  #restaurantes{
    width: 1490px;
    height: 250px;
    background-color: #D9D9D9;
    display: flex;
  }
  #img{
    object-fit: cover;
    width: 218px;
    height: 218px;
    margin-top:32px;
    margin-left: 30px;
    background-color: #6A696E;
  }
</style>