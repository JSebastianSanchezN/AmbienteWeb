<template>
    <div id="cabezera">
        <router-link to="/">
            <p id="titulo">PanceTour</p>
        </router-link>
        <router-link to="/login">
            <p id="subtitulo">INGRESAR</p>
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
            <p id="titulo" style="color:black;margin-top: 46px;margin-left:27px;font-size: 20px;margin-bottom: 0px;#titulo">¡Únete ahora y haz crecer las ventas de tu {{this.$route.name}}!</p>
            <p id="titulo" style="color:black;margin-top: 18px;margin-left:27px;font-size: 16px;margin-bottom: 0px;#titulo">Si eres la persona dueña del negocio, por favor crea una cuenta completando la siguiente información.</p>
            <div id="preguntas" style="display:flow-root;#preguntas">
                <p id="titulo" style="color:black;margin-top: 8px;margin-left:8px;font-size: 16px;color:black;#titulo">{{prueba.texto}}</p>
                <div id="provicional">
                    <img :src="prueba.img" id="img1"/>
                    <select id="provicional" style="display:flow-root;width: 620px;background: #f2f2f2;border: 0px solid #D9D9D9;#preguntas">
                        <option disabled id="titulo" style="font-size: 16px;color:black;#titulo"  value="" selected>Seleccione una:</option>
                        <option id="titulo" style="font-size: 16px;color:black;#titulo" v-for="b in prueba2">{{b.texto2}}</option>
                    </select>
                </div>
            </div>
            <div id="este">
                <div id="preguntas" style="margin-top: 18px;width:195px;height:55px;#preguntas>">
                    <img :src="bandera" id="img" style="margin-top: 10px;margin-left: 6px;#img"/>
                    <select v-model="valor" @change="escogerb" style="background-color: #f2f2f2;border: 0px solid #D9D9D9;width:149px;margin-left:5px;">
                        <option disable value="" selected>Seleccione una:</option>
                        <option id="opcion" v-for="g in numeros" :value="g.texto">{{g.texto}}</option>
                    </select>
                </div>
                <input type="number" placeholder="Tu numero de telefono o Whatsapp" id="preguntas" style="margin-top: 18px;height:55px;width:407px;margin-left: 10px;#preguntas"/>
            </div>
            <input type="text" v-for="c in textos" id="preguntas" style="margin-top: 18px;height:55px;#preguntas" :placeholder="c.texto"/>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form>
                <input v-model="email" type="email" id="preguntas" style="margin-top: 18px;height:55px;#preguntas" placeholder="Tu correo electronico"/>
                <input v-model="password" type="password" id="preguntas" style="margin-top: 18px;height:55px;#preguntas" placeholder="Crea una contraseña"/>
            </form>
            <div id="preguntas" style="margin-top: 18px;height:55px;#preguntas">
                <input v-model="checkbox" type="checkbox" style="width: 20px;height:20px;background-color:#D9D9D9; margin-top:15px; margin-left:10px;"/>
                <p id="pregunta" style="margin-top:14px;font-family:'QuasimodaW03-Medium';margin-left: 34px;color:black;#pregunta">Confirmo que es mi {{$route.name}}</p>
            </div>
            <div id="buton" type="submit" @click="Signup()">
                <p style="font-family:'QuasimodaW03-Medium'; margin-left: auto;margin-right: auto;">Continuar</p>
            </div>
        </div>
        
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name: 'Registrar',
    data() {
        return {
            imagenes: [{estilo:'color:#FFFFFF;margin-top: 32px;margin-left:32px;margin-bottom:0px; #titulo',texto:'PanceTour'},
            {estilo:"color:#FFFFFF;margin-top: 32px;margin-left:32px;font-size: 30px;margin-bottom:0px;#titulo",texto:'Registra tu '+ this.$route.name},
            {estilo:'color:#FFFFFF;margin-top: 100px;margin-left:32px;font-size: 18px;margin-bottom:0px;#titulo',texto:'Recibe beneficios como:'}],
            beneficios: [{estilo2:'color:#FFFFFF;margin-top: 36px;margin-left:10px;font-size: 24px;#titulo',texto:'Inscripcion sin costo'},
            {estilo:"margin-top: 8px;#img",estilo2:'color:#FFFFFF;margin-top: 6px;margin-left:10px;font-size: 24px;#titulo',texto:'Crear tu propio menu como quieras y editarlo cada vez que quieras'},
            {estilo:'margin-top: 11px;#img',estilo2:'color:#FFFFFF;margin-top: 10px;margin-left:10px;font-size: 24px;#titulo',texto:'Aumentar tus ventas hasta un 30% sin mayores costos'},
            {estilo:'margin-top: 6px;#img',estilo2:'color:#FFFFFF;margin-top: 5px;margin-left:10px;font-size: 24px;#titulo',texto:'Extiende tus oportunidades de venta en cada cliente'}],
            textos:[
            {texto:'Nombre(s)'},
            {texto:'Apellidos'},
            {texto:'Tipo de persona'},
            {texto:'Nombre del '+this.$route.name},
            {texto:'Ingrese la cantidad de locales fisicos'}
            ],
            parrafo:[{texto:'¿Que tipo de comida sirven?',img:'Trabajo/restaurantes.jpg'},
            {texto:'¿Que clase de establecimiento tiene?',img:'Trabajo/farmacia.png'}],
            parrafo2:[{texto2:'Seleccione una'},
            {texto2:'Mercado'},
            {texto2:'Farmacia'},
            {texto2:'Tienda'},
            {texto2:'Bar'},
            {texto2:'Recreacion'},
            {texto2:'Hospedaje'}],
            parrafo3:[{texto2:'Rapida'},
            {texto2:'Gourmet'},
            {texto2:'Criolla'},
            {texto2:'Internacional'},
            {texto2:'Asada'},
            {texto2:'Postres'},
            {texto2:'Sopas'}],
            prueba:{texto:'',img:''},
            prueba2:[{texto2:''}],
            numeros:[{texto:'Colombia: +57'},
            {texto:'Estados Unidos: +1'},
            {texto:'España: +34'},
            {texto:'Argentina: +54'},
            {texto:'Alemania: +49'},
            {texto:'Brasil: +55'},
            {texto:'Canadá: +001'},
            {texto:'Chile: +56'},
            {texto:'Francia: +33'},
            {texto:'Italia: +39'},
            {texto:'México: +52'},
            {texto:'Perú: +51'},
            {texto:'Venezuela: +58'}],
            bandera:'Trabajo/blanco.png',
            valor:'',
            email:'',
            password:'',
            error: null,
            store: useStore(),
            router: useRouter(),
            checkbox:false
        }
    },
    methods:{
        Pagina(){
            if(this.$route.name=='restaurante'){
                this.prueba=this.parrafo[0]
                this.prueba2=this.parrafo3
            }else if(this.$route.name=='establecimiento'){
                this.prueba=this.parrafo[1]
                this.prueba2=this.parrafo2
            }
        },
        escogerb(){
            if(this.valor=='Canadá: +001'){
                this.bandera='Trabajo/ca.png'
            }else if(this.valor=='Colombia: +57'){
                this.bandera='Trabajo/co.png'
            }else if(this.valor=='Estados Unidos: +1'){
                this.bandera='Trabajo/eu.png'
            }else if(this.valor=='España: +34'){
                this.bandera='Trabajo/es.png'
            }else if(this.valor=='Argentina: +54'){
                this.bandera='Trabajo/ar.png'
            }else if(this.valor=='Alemania: +49'){
                this.bandera='Trabajo/al.png'
            }else if(this.valor=='Brasil: +55'){
                this.bandera='Trabajo/bra.png'
            }else if(this.valor=='Chile: +56'){
                this.bandera='Trabajo/chi.png'
            }else if(this.valor=='Francia: +33'){
                this.bandera='Trabajo/fra.png'
            }else if(this.valor=='Italia: +39'){
                this.bandera='Trabajo/it.png'
            }else if(this.valor=='México: +52'){
                this.bandera='Trabajo/mx.png'
            }else if(this.valor=='Perú: +51'){
                this.bandera='Trabajo/pr.png'
            }else if(this.valor=='Venezuela: +58'){
                this.bandera='Trabajo/vn.png'
            }
        },
        async Signup(){
            if(this.checkbox==true){
                try{
                    await this.store.dispatch('user/signUp',{
                        email:this.email,
                        password:this.password
                    })
                    this.router.push('/crear')
                }
                catch (err){
                    this.error=err.message
                }

            }
        }
    },
    mounted(){
        this.Pagina()
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
        margin-left: 18px;
        margin-top: 0px;
        font-family: 'QuasimodaW03-Medium';
        font-size: 40px;
        color: #274001;
    }
    #subtitulo{
        width: 69px;
        height: 20px;
        margin-left: 1196px;
        margin-top: 22px;
        font-family: 'QuasimodaW03-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #000000;
    }
    #todo{
        width: 1490px;
        height: 980px;
        display: flex;
    }
    #imglateral{
        width: 749px;
        height: 980px;
        background-image: url(Trabajo/Corregimiento_Pance_1.jpg);
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
    #este{
        display: flex;
    }
    #img1{
        width: 28px;
        height: 20px;
        margin-left: 8px;
        margin-top: 0px;
    }
    #pregunta{
        position: absolute;
        margin-left: 8px;
        margin-top: 16px;
        font-family: 'Quasimoda';
        color: #6A696E;
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