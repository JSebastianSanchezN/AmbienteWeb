import {createRouter, createWebHashHistory} from 'vue-router';

const routes =[
    {
        path:'/', 
        name:'principal',
        component:()=>import('../pages/principal.vue')
    },
    {path:'/restaurantes', 
    name:'Restaurantes',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/mercados', 
    name:'Mercados',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/tiendas', 
    name:'Tiendas',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/farmacias', 
    name:'Farmacias',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/bares', 
    name:'Bares',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/recreacion', 
    name:'Recreacion',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/hospedaje', 
    name:'Hospedaje',
    component:()=>import('../pages/Emergentes/Categorias.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/registrar-restaurante', 
    name:'restaurante',
    component:()=>import('../pages/Emergentes/Registrar.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/registrar-establecimiento', 
    name:'establecimiento',
    component:()=>import('../pages/Emergentes/Registrar.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/', 
    name:'ubicaciones',
    component:()=>import('../pages/principal.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-restaurante', 
    name:'Restaurante1',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-mercado', 
    name:'Mercado',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-tienda', 
    name:'Tienda',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-farmacia', 
    name:'Farmacia',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-bar', 
    name:'Bar',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-recreacion', 
    name:'Recreacion1',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/ver-hospedaje', 
    name:'Hospedajes',
    component:()=>import('../pages/Emergentes/Individual.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/crear', 
    name:'Crear',
    component:()=>import('../pages/Emergentes/Crear.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
},
{path:'/login', 
    name:'Login',
    component:()=>import('../pages/shared/Login.vue'),
    props: (route)=>{
        const myId = String(route.params.id)
        return {
            id:myId
        }
    }
}
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;