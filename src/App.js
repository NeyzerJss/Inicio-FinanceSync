// App.js
import React from 'react';
import "./styles/InicioDashboard.css";
import "./styles/fondo.css";
import {images} from './components/images';
import responsivo from './components/dashboard';

function App() {
  return (
    <div className='body'>
      {/* Barra de navegación */}
      <header className="barra-navegacion">
        <img src={images.img4} className='logo' alt='logoFinancesync'/>
        <nav className="enlaces-nav">
          <a className='barra-navegacion-a' href="#contacto">Inicio</a>
          <a className='barra-navegacion-a' href="#contacto">Nosotros</a>
          <a className='barra-navegacion-a' href="#planes">Planes</a>
          <a className='barra-navegacion-a' href="#blog">Blog</a>
          <a className='barra-navegacion-a' href="#contacto">Contacto</a>
        </nav>
        <div className="botones">
          <button className="boton boton-iniciar-sesion">Iniciar Sesión</button>
          <button className="boton boton-crear-cuenta">Crear Cuenta</button>
        </div>
      </header>

      {/* Sección de Información Inicial */}
      <section className="seccion-informacion-inicial">
        <div className="informacion-inicial">
          <h1 className='h1'>FinanceSync®</h1>
          <p className='informacion-inicial-p'>Gestionar tus finanzas nunca ha sido tan fácil. FinanceSync es una aplicación diseñada para ayudarte a llevar un control completo de tus gastos, ingresos y ahorros de manera intuitiva y eficiente. Con su interfaz amigable y herramientas avanzadas.</p>
          
          <div className='boton-inicio'>
            <button className="boton-explorar">¡Explorar!</button>
          </div>
        </div>
        <img src={images.img5} alt='fff' className='contenedor-funcion-img'/>
      </section>

      {/* Acerca de FinanceSync */}
      <section className="acerca-de-financesync">
        <div className="contenedor-info-acerca">
          <h2>Todo lo que necesitas en un solo lugar</h2>
          <p>Nuestra aplicación de manejo de finanzas está diseñada para ayudarte a tomar el control de tus finanzas personales de manera sencilla y efectiva. Con una interfaz intuitiva y herramientas poderosas, podrás gestionar tu presupuesto, rastrear tus gastos e ingresos y obtener un panorama claro de tu situación financiera.</p>
        </div>
      </section>

      {/* Planes */}
      <section className="seccion-planes" id="planes">
        <center><h2>Planes</h2></center>
        <div className="todos-los-planes">
          <div className="contenedor-planes">
            <div className='contenedor'>
              <h3 className="tipo-de-plan">Plan Gratuito</h3>
              <p className="precio-gratuito">$0.00 mx</p>
              <div className='separador'></div>
              <ul className="beneficios">
                <li>Recordatorios</li>
                <li>Crear Gestión de Gastos (4 Gestiones)</li>
                <li>Recomendaciones Diarias</li>
                <li>Calendario de Pagos</li>
                <li>Reporte de Gastos Mensuales</li>
              </ul>
              <button className="boton-adquirir-gratuito">Adquirir</button>
            </div>
          </div>

          <div className="contenedor-planes">
            <div className='contenedor'>
                <h3 className="tipo-de-plan">Plan Premium</h3>
                <p className="precio-gratuito">$149.00 mx</p>
                <div className='separador'></div>
                  <ul className="beneficios">
                    <li>Recordatorios</li>
                    <li>Crear Gestión de Gastos (Ilimitado)</li>
                    <li>Recomendaciones Diarias</li>
                    <li>Calendario de Pagos</li>
                    <li>Reporte de Gastos Mensuales</li>
                    <li>Visualizar Gastos Anteriores</li>
                    <li>Crear Metas de Ahorro</li>
                  </ul>
                  <button className="boton-adquirir">Adquirir</button>
                </div>
            </div>
          </div>
      </section>



      {/* Descubre FinanceSync */}
      <section className="descubre-financesync">
        <h2>Descubre FynanceSync®</h2>

        <div className='contenedor-de-descripciones'>
          <div className="contenedor-de-informacion">
              <div className='descripcion'>
                <p className="titulo-de-informacion">Simplifica y Domina tus Finanzas</p>
                <p className='informacion-inicial-p'>FinanceSync es la solución perfecta para quienes desean tener un control total sobre sus finanzas. Con su capacidad de sincronización automática, puedes gestionar todas tus cuentas y gastos en un solo lugar, facilitando el seguimiento de tu situación financiera.</p>
              </div>
              <img src={images.img1} alt="img1" width="205px" height="230px"/>
          </div>
          
          <div className="contenedor-de-informacion">
            <img src={images.img2} alt="img1" width="205px" height="230px"/>
            <div className='descripcion'>
              <p className="titulo-de-informacion">Tu Asistente Financiero</p>
              <p className='informacion-inicial-p'>Es una innovadora aplicación de finanzas que se distingue por su capacidad de sincronización automática en tiempo real al registrar manualmente tus transacciones. Ofrece análisis personalizados y recomendaciones basadas en los hábitos de gasto del usuario, todo en una interfaz intuitiva y amigable.</p>
            </div>
          </div>

          <div className="contenedor-de-informacion">
              <div className='descripcion'>
              <p className="titulo-de-informacion">Control Total de tus Finanzas</p>
              <p className='informacion-inicial-p'>Proporciona herramientas para establecer metas de ahorro, recursos educativos para mejorar la gestión financiera, y acceso a una comunidad activa que fomenta el intercambio de experiencias y apoyo.</p>
              </div>
              <img src={images.img3} alt="img1" width="205px" />
            </div>
            
        </div>
      </section>

      {/* Funciones */}
      <section className="seccion-funciones">
        <h2 className='contenedor-info-acerca-h2'>Funciones de FinanceSync</h2>

        <div className="tarjeta-de-funcion">

        <div className="contenedor-funcion">
            <p className="titulo-funcion">Recordatorios</p>
            <img src={images.img6} alt="Sincronización" />
            <p className='contenedor-info-acerca-p'>Recibe notificaciones personalizadas antes de las fechas límite de tus facturas, suscripciones y otros compromisos financieros.</p>
          </div>

          <div className="contenedor-funcion">
            <p className="titulo-funcion">Análisis de Gastos</p>
            <img src={images.img7} alt="Sincronización" />
            <p className='contenedor-info-acerca-p'>La aplicación genera informes detallados y visuales sobre tus hábitos de gasto, desglosando las categorías de gastos.</p>
          </div>

          <div className="contenedor-funcion">
            <p className="titulo-funcion">Personalización</p>
            <img src={images.img8} alt="Análisis" />
            <p className='contenedor-info-acerca-p'>FinanceSync te permite crear y gestionar presupuestos adaptados a tus necesidades y metas financieras específicas.</p>
          </div>

          <div className="contenedor-funcion">
            <p className="titulo-funcion">Metas de Ahorro</p>
            <img src={images.img9} alt="Alertas" />
            <p className='contenedor-info-acerca-p'>La aplicación te ayuda a fijar y seguir metas de ahorro específicas, como un viaje, un fondo de emergencia o una compra importante.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="contenedor-footer-izquierda">
          <div className="logo">FinanceSync</div>
          <p>La mejor herramienta para gestionar tus finanzas personales.</p>
        </div>
        <div className="contenedor-footer-derecha">
          <h3 className="titulo-redes">Síguenos en redes sociales</h3>
          <div className="logos-de-redes">
            <img src="facebook-icon.png" alt="Facebook" />
            <img src="twitter-icon.png" alt="Twitter" />
            <img src="instagram-icon.png" alt="Instagram" />
          </div>
          <ul>
            <li><a href="#terminos">Términos</a></li>
            <li><a href="#privacidad">Privacidad</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </footer>
      <script src={responsivo}></script>
    </div>
  );
}

export default App;

