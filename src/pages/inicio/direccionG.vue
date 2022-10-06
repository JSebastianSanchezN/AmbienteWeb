<template>
    <div id="direccion">
        <p id="encabezado">
            <span>Con </span>
            <span id="negrita">PanceTour</span>
            <span>, puedes ir donde quieras ir</span>
        </p>
        <div id="direccioniniciog">
            <img src='Trabajo/noun-map-marker-224730.png' id='imgubiactual' style="width: 70px;height: 70px;left:0;#imgubiactual"/>
            <p id="empezarviaje" style="left: 80px;#empezarviaje">¿En donde quieres empezar tu viaje?</p>
        </div>
        <img src='Trabajo/noun-pointer-2012011.png' id='imgubiactual1'/>
        <p id="ubiactual1">Usar tu ubicación actual</p>
        <p id="inicia">
            <span id="subrayada">Iniciar sesión</span>
            <span> para ver tus ubicaciones</span>
        </p>
    </div>
</template>

<script>
export default {
    
}   
</script>

<style scoped>
#direccion{
    background: #588C08;
    width: 1490px;
    height: 486px;
    display:flow-root;
}
#encabezado{
    margin-top: 97px;
    margin-left: 56px;
    width: 1389px;
    height: 100px;
    font-family: 'Quasimoda';
    font-style: normal;
    font-weight: 300;
    font-size: 72px;
    line-height: 86px;
    color: #FFFFFF;
}
#negrita{
    font-family: 'QuasimodaW03-Medium';
}
#direccioniniciog{
    margin-top: 33px;
    margin-left: 415px;
    width: 670px;
    height: 80px;
    background-color: #D9D9D9;
    border-radius: 40px;
    display: flex;
    align-items: center;
}
#imgubiactual1{
    margin-top: 48px;
    margin-left: 415px;
    width: 24px;
    height: 24px;
}
#ubiactual1{
    margin-top: -28px;
    margin-left: 439px;
    font-family: 'Quasimoda';
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
}
#inicia{
    margin-top: -43px;
    margin-left: 746px;
    font-family: 'Quasimoda';
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
}
#subrayada{
    text-decoration: underline;
}
</style>