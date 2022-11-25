<template>
    <Cabecera/> 
    <div id="menus">
        <div id="menulateral">
            <img :src='mostrar.img' id="imgmenu"/>
            <img id="imgrestaurante"/>
            <p id="titulomenu">Nombre</p>
            <div id="descripcion">
                <p id="info" v-for="e in items">{{e.texto}}:</p>
            </div>
            <div id="descripcion2">
                <img src="../../../Trabajo/noun-discount-5142216.png" id="descuento"/>
                <p id="info2">Descuento</p>
                <img src="../../../Trabajo/noun-right-1920905.png" style="margin-left: 93px;object-fit:contain;#descuento" id="descuento"/>
            </div>
            <div id="detallesmenus" style="align-items: center;#detallesmenus">
                <img src="../../../Trabajo/noun-restaurant-5130920.png" style="margin-left: 32px;#descuento" id="descuento"/>
                <p id="info2" style="margin-left: 1px;#info2">{{mostrar.texto1}} y Precio</p>
            </div>
            <div id="detallesmenus" style="height: 194px;margin-top: -1px;display:flow-root;#detallesmenus">
                <div id="interior1" v-for="f in items1">
                    <p id="info2" style="margin-top: 18px;margin-left: 32px;margin-bottom:0px;color: black;#info2">{{mostrar.texto2}} {{f.texto}}</p>
                    <img src="../../../Trabajo/noun-right-1920905.png" style="margin-left:auto;margin-right: 10px;margin-top: 18px;object-fit: contain    ;#descuento" id="descuento"/>
                </div>
            </div>
        </div>
        <div id="menucentral">
            <p id="titulomenu" style="margin-left: 32px;margin-top: 32px;margin-bottom:0px;#titulomenu">{{mostrar.texto2}} 1</p>
            <div id="interior2" v-for="d in 3" >
                <div id="plato" v-for="c in 3"  style="margin-left:30px;">
                    <div id="interior3">
                        <p id="titulomenu" style="margin-top: 10px;margin-left: 0px;font-size: 18px;#titulomenu">Nombre {{mostrar.texto3}}</p>
                        <p id="info2" style="margin-top: 21px;margin-left: 0px;font-size: 14px;color:black;#info2">Detalles</p>
                        <p id="titulomenu" style="margin-top: 20px;margin-left: 0px;font-size: 16px;#titulomenu">Precio</p>
                    </div>
                    <img :src="mostrar.img" id="imgplato"/>
                </div>
            </div>
            <p id="titulomenu" style="margin-left: 32px;margin-top: 32px;margin-bottom:0px;#titulomenu">{{mostrar.texto2}} 2</p>
        </div>
    </div>
    <div id="rayita"></div>
    <div id="ultimodiv">
        <p id="titulomenu" style="margin-top: 32px;margin-left: 32px;#titulomenu">Calificaciones y opiniones sobre {{mostrar.texto4}}</p>
        <div id="interior2">
            <div id="puntuaciones">
                <p id="titulomenu" style="margin-top: 21px;margin-left: 128px;font-size: 20px;margin-bottom:0px;#titulomenu">4.3</p>
                <img src="../../../Trabajo/noun-star-rate-3237248.png" id="estrellas"/>
                <p id="titulomenu" style="margin-top: 15px;margin-left: 127px;font-size: 12px;#titulomenu">(xxxx)</p>
            </div>
            <div id="puntuaciones2">
                <div id="interior2" v-for="g in items3">
                    <p id="info2" :style="g.style1">{{g.texto}}</p>
                    <img src="../../../Trabajo/noun-star.png" id="estrella" :style='g.style2'/>
                    <div id="carga" :style="g.style3"></div>
                    <div id="carga2" :style="g.style4"></div>
                </div>
            </div>
            <div id="ultimo"></div>
        </div>
    </div>
</template>

<script>
import Cabecera from '../shared/cabecera.vue';
export default{
    name:'Individual',
    components:{
    Cabecera
},
data(){
    return {
        items:[{texto:'Direccion'},
    {texto:'Horario'},
    {texto:'Calificacion'}],
    items1:[{texto:'1'},
    {texto:'2'},
    {texto:'3'},
    {texto:'4'},
    {texto:'5'}],
    items3:[{texto:'5',style1:"color: #000000;margin-top: 9px;margin-left: 20px;font-size: 12px;#info2"},
    {texto:'4',style1:"color: #000000;margin-top: 0px;margin-left: 20px;font-size: 12px;#info2",style2:"margin-top: 0px;#estrella",style3:"margin-top: 0px;#carga",style4:"margin-top: 0px;#carga2"},
    {texto:'3',style1:"color: #000000;margin-top: 0px;margin-left: 20px;font-size: 12px;#info2",style2:"margin-top: 0px;#estrella",style3:"margin-top: 0px;#carga",style4:"margin-top: 0px;#carga2"},
    {texto:'2',style1:"color: #000000;margin-top: 0px;margin-left: 20px;font-size: 12px;#info2",style2:"margin-top: 0px;#estrella",style3:"margin-top: 0px;#carga",style4:"margin-top: 0px;#carga2"},
    {texto:'1',style1:"color: #000000;margin-top: 0px;margin-left: 20px;font-size: 12px;#info2",style2:"margin-top: 0px;#estrella",style3:"margin-top: 0px;#carga",style4:"margin-top: 0px;#carga2"}],
    items4:[{img:'../../../Trabajo/restaurantes.jpg', texto1:'Menus ',texto2:'Menu',texto3:'Plato',texto4:'el Restaurante'},
    {img:'../../../Trabajo/mercados.jpg', texto1:'Secciones ',texto2:'Seccion',texto3:'Producto',texto4:'el Mercado'},
    {img:'../../../Trabajo/farmacias.jpg', texto1:'Secciones ',texto2:'Seccion',texto3:'Producto',texto4:'la Farmacia'},
    {img:'../../../Trabajo/tiendas.jpg', texto1:'Categorias ',texto2:'Categoria',texto3:'Producto',texto4:'la Tienda'},
    {img:'../../../Trabajo/bares.jpg', texto1:'Categorias ',texto2:'Categoria',texto3:'Bebida',texto4:'el Bar'},
    {img:'../../../Trabajo/recreacion.jpg', texto1:'Planes ',texto2:'Plan',texto3:'Atraccion',texto4:'el lugar de Recreacion'},
    {img:'../../../Trabajo/hospedaje.jpg', texto1:'Categorias ',texto2:'Categoria',texto3:'Habitacion',texto4:'el lugar de Hospedaje'}],
    mostrar:{img:'',texto1:'',texto2:'',texto3:'',texto4:''}
    }
},
methods:{
    seleccionar(){
        if(this.$route.name=='Restaurante1'){
            this.mostrar=this.items4[0]
        }else if(this.$route.name=='Mercado'){
            this.mostrar=this.items4[1]
        }else if(this.$route.name=='Farmacia'){
            this.mostrar=this.items4[2]
        }else if(this.$route.name=='Tienda'){
            this.mostrar=this.items4[3]
        }else if(this.$route.name=='Bar'){
            this.mostrar=this.items4[4]
        }else if(this.$route.name=='Recreacion1'){
            this.mostrar=this.items4[5]
        }else if(this.$route.name=='Hospedajes'){
            this.mostrar=this.items4[6]
        }
        return this.mostrar
    }
},
mounted(){
    this.seleccionar()
}
}
</script>

<style scoped>
    #menus{
        width: 1490px;
        height: 701px;
        background-color: #6A696E;
        display: flex;
    }
    #menulateral{
        width: 250px;
        height: 701px;
        background-color: #F2F2F2;
        border-right: 1px solid #000000;
    }
    #imgmenu{
        width: 250px;
        height: 144px;
        border-top: 1px solid black;
    }
    #imgrestaurante{
        position: absolute;
        width: 55px;
        height: 55px;
        left: 24px;
        top: 188px;
        background: #FFFFFF;
        border-radius: 50%;
    }
    #titulomenu{
        margin-left: 24px;
        margin-top: 26px;
        margin-bottom: 0px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 24px;
        color: #000000;
    }
    #descripcion{
        width: 216px;
        height: 95px;
        margin-left: 17px;
        margin-top: 12px;
        margin-bottom: 0px;
        background: #F2F2F2;
        border: 1px solid #000000;
        border-radius: 20px;
    }
    #info{
        margin-left: 12px;
        margin-top: 12px;
        margin-bottom: 0px;
        font-family: 'Quasimoda';
        font-size: 14px;
        color: #000000;
    }
    #interior1{
        width: 249px;
        display: flex;
    }
    #descripcion2{
        width: 216px;
        height: 82px;
        margin-left: 17px;
        margin-top: 24px;
        margin-bottom: 0px;
        align-items: center;
        display: flex;
        background: #F2F2F2;
        border: 1px solid #000000;
        border-radius: 20px;
    }
    #descuento{
        width: 18px;
        height: 18px;
        margin-left: 12px;
        margin-top: 0px;
    }
    #info2{
        margin-left: 3px;
        font-family: 'Quasimoda';
        font-size: 14px;
        color: #52BF04;
    }
    #detallesmenus{
        width: 250px;
        height: 51px;
        margin-top: 24px;
        background: #F2F2F2;
        border-width: 1px 0px;
        border-style: solid;
        border-color: #000000;
        display: flex;
    }
    #menucentral{
        width: 1240px;
        height: 701px;
        margin-left: 0px;
        margin-top: 0px;
        background: #F2F2F2;
        border-top: 1px solid #000000;
    }
    #interior2{
        display: flex;
    }
    #plato{
        width: 367px;
        height: 139px;
        margin-left: 23px;
        margin-top: 28px;
        background: #F2F2F2;
        border-bottom: 1px solid #000000;
        display: flex;
    }
    #interior3{
        width: 264px;
        display: flow-root;
    }
    #imgplato{
        width: 100px;
        height: 100px;
        margin-left: 2px;
        margin-top: 20px;
        object-fit: cover;
    }
    #rayita{
        background-color: #D9D9D9;
        width: 1490px;
        height: 20px;
        margin-top: 0px;
    }
    #ultimodiv{
        background-color: #F2F2F2;
        width: 1490px;
        height: 790px;
    }
    #puntuaciones{
        width: 285px;
        height: 144px;
        margin-top: 92px;
        margin-left: 32px;
        border-radius: 30px 0px 0px 30px;
        background-color: #D9D9D9;
        border: 1px solid black;
    }
    #puntuaciones2{
        width: 428px;
        height: 144px;
        margin-top: 92px;
        margin-left: 0px;
        border-radius: 30px 0px 0px 30px;
        background-color: #D9D9D9;
        border-width: 1px 1px 1px 0px;
        border-style: solid;
        border-color: #000000;
        border-radius: 0px 30px 30px 0px;
        display: flow-root;
    }
    #estrellas{
        width: 80px;
        height: 16px;
        margin-top: 15px;
        margin-left: 102px;
    }
    #estrella{
        width: 14px;
        height: 14px;
        margin-top: 9px;
        margin-left: 1px;
    }
    #carga{
        width: 212px;
        height: 14px;
        margin-top: 9px;
        margin-left: 0px;
        background: #6A696E;
        border-width: 1px 0px 1px 1px;
        border-style: solid;
        border-color: #000000;
        border-radius: 7px 0px 0px 7px;
    }
    #carga2{
        width: 152px;
        height: 14px;
        margin-top: 9px;
        margin-left: 0px;
        background: #FFFFFF;
        border-width: 1px 1px 1px 0px;
        border-style: solid;
        border-color: #000000;
        border-radius: 0px 7px 7px 0px;
    }
    #ultimo{
        width: 613px;
        height: 666px;
        margin-left: 50px;
        margin-top: 92px;
        background: #D9D9D9;
        border: 1px solid #000000;
        border-radius: 30px;
    }
</style>