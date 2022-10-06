<template>
    <div id="opciones">
        <p id="titulo1">¿En qué estas interesado?</p>
        <div id="categorias">
            <div v-for="p in imagenes" id="button">
                <router-link :to="{name:p.textos}">
                    <img :src="p.img" id='imgopciones' :style="p.left1"/>
                    <p id="titulos" :style="p.left2">{{p.textos}}</p>
                </router-link>
            </div>
        </div>
    </div>
    <div id="rayita"></div>
</template>

<script>
export default {
    name: 'opciones',
    data() {
        return {
            imagenes: [{img:'Trabajo/restaurante.png', left1:"margin-left: 8px;#imgopciones",left2:"margin-left: 0px;#titulos",textos:'Restaurantes'},
            {img:'Trabajo/mercado.png', left1:"margin-left: 32px;#imgopciones",left2:"margin-left: 38px;#titulos",textos:'Mercados'},
            {img:'Trabajo/farmacia.png',left2:"margin-left: 45px;#titulos",textos:'Farmacias'},
            {img:'Trabajo/tienda.png',left2:"margin-left: 55px;#titulos",textos:'Tiendas'},
            {img:'Trabajo/bar.png',left2:"margin-left: 66px;#titulos",textos:'Bares'},
            {img:'Trabajo/recreacion.png',left2:"margin-left: 40px;#titulos",textos:'Recreacion'},
            {img:'Trabajo/hotel.png',left2:"margin-left: 42px;#titulos",textos:'Hospedaje'}]
        }
    },
    unmounted: () => {
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped>
    #opciones{
        background-color: #F2F2F2;
        width: 1490px;
        height: 276px;
        display: flow-root;
    }
    #categorias{
        background-color: #F2F2F2;
        margin-top: 38px;
        margin-left: 271px;
        display: flex;
    }
    #titulo1{
        margin-top: 40px;
        margin-left: 40px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 20px;
        color: #000000;
    }
    #titulos{
        margin-top: 0px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 20px;
        color: #000000;
    }
    #imgopciones{
        margin-top: 0px;
        margin-left: 40px;
        width: 100px;
        height: 100px;
    }
    #rayita{
        background-color: #D9D9D9;
        width: 1490px;
        height: 20px;
    }
    #button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
</style>