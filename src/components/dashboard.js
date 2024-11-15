
function ajustarLayout() {
    const anchoVentana = window.innerWidt ;

    if (anchoVentana <= 768) {
        document.querySelector('.barra-navegacion').style.padding = '10px 20px';

        document.querySelector('.seccion-informacion-inicial').style.flexDirection = 'column';

        document.querySelector('.seccion-informacion-inicial').style.padding = '50px 20px';

        document.querySelector('.todos-los-planes').style.flexDirection = 'column';

        document.querySelector('.contenedor-planes').style.width = '100%';

        document.querySelector('.contenedor-planes').style.height = 'auto';
        
    } else {
        document.querySelector('.barra-navegacion').style.padding = '10px 75px';

        document.querySelector('.seccion-informacion-inicial').style.flexDirection = 'row';

        document.querySelector('.seccion-informacion-inicial').style.padding = '150px';

        document.querySelector('.todos-los-planes').style.flexDirection = 'row';

        document.querySelector('.contenedor-planes').style.width = '401px';

        document.querySelector('.contenedor-planes').style.height = '594px';
        
    }
}

window.addEventListener('load', ajustarLayout);
window.addEventListener('resize', ajustarLayout);
