<template>
    <div id="principal">
        <div id="cabezera">
            <img src='Trabajo/noun-more-897915.png' id='iconburger'/>
            <p id="titulo">PanceTour</p>
            <div id='linea'></div>
            <img src='Trabajo/noun-pointer-2012011.png' id='imgubiactual'/>
            <p id="ubiactual">Usar tu ubicación actual</p>
            <img src='Trabajo/noun-arrow-1787131.png' id='imgubiactual' style="left:505px;top: 29px;width:25px;height:25px;#imgubiactual"/>
            <div id='linea' style="left: 557px;#linea"></div>
            <div id="direccioninicio">
              <img src='Trabajo/noun-pointer-2012011.png' id='imgubiactual' style="width: 35px;height: 35px;left:0;#imgubiactual"/>
              <p id="empezarviaje">¿En dónde quieres empezar tu viaje?</p>
              <img src='Trabajo/noun-search-5101006.png' id='imgubiactual' style="width: 50px;height: 50px;left:390px;#imgubiactual"/>
            </div>
            <img src='Trabajo/noun-profile-5084947.png' id='imgubiactual' style="width: 34px;height: 34px;left:1303px;#imgubiactual"/>
            <p id="titulo" style="position: absolute;left: 1340px; top:-28px;font-size:38px;#titulo">Ingreso</p>
        </div>
        <div id="seccion">
            <p id="titulo1">Tiendas en Pance</p>
            <img src="Trabajo/noun-house-5117342.png" id="imgseccion"/>
            <p id="content">Inicio·Tiendas en Pance</p>
        </div>
        <div id="tipos">

        </div>
        <div id="filtros">
            <p id="filtro">Filtrar por:</p>
            <p id="filtro" style="margin-right: 233px;margin-left: auto;#filtro">Ordenar por:</p>
        </div>
        <div id="tiendas">
            <p id="titulo1" style="margin-top: 16px;margin-left: 20px;#titulo1">Tiendas cerca de mi</p>
            <img src="Trabajo/tiendas.jpg" id="img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 30px;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 30px;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 30px;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 30px;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 30px;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-top: 329px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 263px;margin-top: 329px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 511px;margin-top: 329px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 759px;margin-top: 329px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1007px;margin-top: 329px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1255px;margin-top: 329px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-top: 577px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 263px;margin-top: 577px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 511px;margin-top: 577px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 759px;margin-top: 577px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1007px;margin-top: 577px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1255px;margin-top: 577px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-top: 825px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 263px;margin-top: 825px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 511px;margin-top: 825px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 759px;margin-top: 825px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1007px;margin-top: 825px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1255px;margin-top: 825px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-top: 1073px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 263px;margin-top: 1073px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 511px;margin-top: 1073px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 759px;margin-top: 1073px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1007px;margin-top: 1073px;position:absolute;#img"/>
            <img src="Trabajo/tiendas.jpg" id="img" style="margin-left: 1255px;margin-top: 1073px;position:absolute;#img"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tiendas',
    data() {
      return {
      }
    }
  }
 
</script>
<style scoped>
    #principal{
        height: 1427px;
        width: 1490px;
        background-color:#F2F2F2;
    }
    #cabezera{
      background-color:#F2F2F2;
      height: 62px;
      display: flex;
      align-items: center;
    }
    #iconburger{
      width: 45px;
      height: 45px;
    }
    #titulo{
      top: -35px;
      left: 50px;
      position: absolute;
      font-family: 'QuasimodaW03-Medium';
      font-size: 40px;
      color: #274001;
    }
    #linea{
      position: absolute;
      background-color: #D9D9D9;
      width: 3px;
      height: 51px;
      border-radius: 1.5px;
      left: 260px;
    }
    #imgubiactual{
      position: absolute;
      width: 30px;
      height: 30px;
      left: 275px;
    }
    #ubiactual{
      position: absolute;
      left: 305px;
      font-family: 'QuasimodaW03-Medium';
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;
      color: #274001;
    }
    #direccioninicio{
      position: absolute;
      width: 445px;
      height: 50px;
      left: 575px;
      top: 13px;
      background-color: #D9D9D9;
      border-radius: 25px;
      display: flex;
      align-items: center;
    }
    #empezarviaje{
      position: absolute;
      left: 52px;
      font-family: 'QuasimodaW03-Medium';
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: #6A696E;
    }
    #seccion{
        width: 1490px;
        height: 77px;
        background-color: #A9F274;
        display: flex;
    }
    #titulo1{
        position: absolute;
        font-family: 'QuasimodaW03-Medium';
        font-size: 24px;
        margin-left: 20px;
        margin-top: 10px;
        color:#000000;
    }
    #imgseccion{
        width: 15px;
        height: 15px;
        margin-left: 20px;
        margin-top: 49px;
    }
    #content{
        font-family: 'Quasimoda';
        font-size: 16px;
        color: #000000;
        margin-top: 48px;
        margin-left: 5px;
    }
    #tipos{
        width: 1490px;
        height: 109px;
        background-color: #D9D9D9;
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
    #tiendas{
        width: 1490px;
        height: 1389px;
        background-color: #D9D9D9;
        display: flex;
    }
    #img{
        object-fit: cover;
        width: 218px;
        height: 218px;
        margin-top: 81px;
        margin-left: 15px;
        background-color: #6A696E;
    }
</style>