<template>
    <div id="registro">
        <p id="titulo2">
            <span>Únete a </span>
            <span id="negrita" style="color: #52BF04;#negrita">Pance</span>
            <span id="negrita" style="color: #274001;#negrita">Tour</span>
        </p>
        <div id="completo">
            <div id="registra" v-for="p in imagenes" :style="p.left1">
                <img :src='p.img' id='registrarse'/>
                <p id="titulo3">Registra tu {{p.texto1}}</p>
                <p id="texto">{{p.texto2}}</p>
                <router-link :to="{name:p.texto1}">
                    <button id="boton">Saber mas</button>
                </router-link>
            </div>
        </div>
    </div>
    <div id="rayita"></div>
</template>

<script>
export default {
    name: 'registro',
    data() {
        return {
            imagenes: [{img:'Trabajo/registro1.jpg',texto1:'restaurante',texto2:'Únete a PanceTour con tu restautante y descubre los miles de beneficios que trae ser parte de una gran comunidad.'},
            {img:'Trabajo/registro2.jpg', left1:"margin-left: 199px;#registra",texto1:'establecimiento',texto2:'Unete a PanceTour junto a tu establecimiento y descubre el gran alcance al que puedes llegar junto a los clientes y a nosotros.'}]
        }
    },
    unmounted: () => {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
    #registro{
        background-color: #F2F2F2;
        width: 1490px;
        height: 552px;
        display: flow-root;
    }
    #titulo2{
        margin-top: 40px;
        margin-left: 440px;
        font-family: 'Quasimoda';
        font-size: 72px;
        color: #000000;
    }
    #completo{
        margin-top: -49px;
        margin-left: 199px;
        display: flex;
    }
    #registra{
        width: 447px;
        height: 332px;
        border-radius: 10px;
        background-color: #FFFFFF;
    }
    #registrarse{
        object-fit:cover;
        width: 447px;
        height: 140px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    #titulo3{
        margin-top: 10px;
        margin-left: 121px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 20px;
        color: #000000;
    }
    #texto{
        text-align: center;
        font-size: 16px;
        font-family: 'Quasimoda';
        line-height: 19px;
        font-weight: 300;
        color:#6A696E;
    }
    #boton{
        margin-left: 3px;
        width: 441px;
        height: 48px;
        background-color: #D9D9D9;
        border-radius: 24px;
        font-family: 'QuasimonaW03-Medium';
        font-size: 20px;
        color: #274001;
        border: #D9D9D9;
        cursor: pointer;
    }
    #rayita{
        background-color: #D9D9D9;
        width: 1490px;
        height: 20px;
    }
</style>