<template>
    <div id="cabezera">
        <router-link to="/">
            <p id="titulo" @click="principal">PanceTour</p>
        </router-link>
    </div>
    <div id="todo">
        <div id="imglateral">
            <p id="titulo" v-for="a in imagenes" :style="a.estilo">{{a.texto}}</p>
            <div id="beneficios" v-for="b in beneficios">
                <img src="Trabajo/noun-check-4728432.png" id="img" :style="b.estilo"/>
                <p id="titulo" :style="b.estilo2">{{b.texto}}</p>
            </div>
        </div>
        <div id="centro">
            <p style="margin-left: 57px;margin-top:232px;font-family: 'QuasimodaW03-Medium';font-size: 96px;text-align: center;color: #274001;">Iniciar Sesion</p>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form>
                <input v-model="email" type="email" id="preguntas" style="margin-top: 18px;height:55px;#preguntas" placeholder="Tu correo electronico"/>
                <input v-model="password" type="password" id="preguntas" style="margin-top: 18px;height:55px;#preguntas" placeholder="Crea una contraseña"/>
            </form>
            <div id="buton" type="submit" @click="Login()">
                <p style="font-family:'QuasimodaW03-Medium'; margin-left: auto;margin-right: auto;">Continuar</p>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name: 'Login',
    data() {
        return {
            imagenes: [{estilo:'color:black;margin-top: 32px;margin-left:32px;margin-bottom:0px; #titulo',texto:'PanceTour'},
            {estilo:"color:black;margin-top: 32px;margin-left:32px;font-size: 30px;margin-bottom:0px;#titulo",texto:'Registra tu '+ this.$route.name},
            {estilo:'color:black;margin-top: 100px;margin-left:32px;font-size: 18px;margin-bottom:0px;#titulo',texto:'Recibe beneficios como:'}],
            beneficios: [{estilo2:'color:black;margin-top: 36px;margin-left:10px;font-size: 24px;#titulo',texto:'Inscripcion sin costo'},
            {estilo:"margin-top: 8px;#img",estilo2:'color:black;margin-top: 6px;margin-left:10px;font-size: 24px;#titulo',texto:'Crear tu propio menu como quieras y editarlo cada vez que quieras'},
            {estilo:'margin-top: 11px;#img',estilo2:'color:black;margin-top: 10px;margin-left:10px;font-size: 24px;#titulo',texto:'Aumentar tus ventas hasta un 30% sin mayores costos'},
            {estilo:'margin-top: 6px;#img',estilo2:'color:black;margin-top: 5px;margin-left:10px;font-size: 24px;#titulo',texto:'Extiende tus oportunidades de venta en cada cliente'}],
            email:'',
            password:'',
            error: null,
            store: useStore(),
            router: useRouter()
        }
    },
    methods:{
        async Login(){
            try{
                await this.store.dispatch('user/logIn',{
                    email:this.email,
                    password:this.password
                })
                this.router.push('/')
                }
                catch (err){
                    this.error=err.message
                }
            }
        },
    unmounted: () => {
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped>
    #cabezera{
        width: 1490px;
        height: 64px;
        background-color: #D9D9D9;
        display: flex;
    }
    #titulo{
        margin-left: 640px;   
        margin-top: 0px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 40px;
        color: #274001;
    }
    #todo{
        width: 1490px;
        height: 980px;
        display: flex;
    }
    #imglateral{
        width: 749px;
        height: 980px;
        background-image: url(Trabajo/ingresar.jpg);
        background-size: cover;
    }
    #beneficios{
        margin-top: 0px;
        margin-bottom: 0px;
        display: flex;
    }
    #img{
        width: 32px;
        height: 32px;
        margin-left: 32px;
        margin-top: 37px;
        background-size: contain;
    }
    #centro{
        margin-top: 0px;
        width: 741px;
        height: 980px;
        background-color: #F2F2F2;
    }
    #preguntas{
        width: 618px;
        height: 79px;
        margin-left: 27px;
        margin-top: 18px;
        display: flex;
        background: #f2f2f2;
        border: 1px solid #D9D9D9;
        border-radius: 8px;
    }
    #buton{
        width: 108px;
        height: 36px;
        margin-left: 282px;
        margin-top: 10px;
        background-color: #D9D9D9;
        border-radius: 8px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    #provicional{
        margin-top: 0px;
        display: flex;
    }
</style>