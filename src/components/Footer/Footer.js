import React,{useEffect} from 'react'
import{Link} from "react-router-dom"
import { connect } from "react-redux";
import { changeCurrentPage } from "../../redux/actions/currentPageActions";


function Footer({
    currentPage,
    changeCurrentPage
}) {
  return (
    <div className='footer'>
        <div>
            <div>
                <img className='mainLogoDarkFooter' src='image/mainLogo2.png' alt='mainLogo'></img>
                <p>Monica Saavedra</p>
            
                <a style={{color: "white"}} href="mailto:contacto@monicasaavedra.cl?body=Me interesa ser contactado para trabajar con Ud.">contacto@monicasaavedra</a>
                <a style={{color: "white"}} href="mailto:info@monicasaavedra.cl?body=Me interesa ser contactado para trabajar con Ud.">info@monicasaavedra</a>
                <a style={{color: "white"}} href='https://wa.me/56984486911' target="_blank">+56 9 8448 6911 </a>

            </div>
            <div>
                <div>
          
                    <Link to="/" onClick={()=>changeCurrentPage("home")}>Inicio</Link>
                    <Link to='services'  onClick={()=>changeCurrentPage("services")}>Reseñas</Link>
                </div>
                <div>
                    <Link to="/about" onClick={()=>changeCurrentPage("about")}>Acerca de mí</Link>
                    <Link to='/contactus'  onClick={()=>changeCurrentPage("contactus")}>Contactame</Link>
                </div>
                <div>
                    <Link to="/pricing" onClick={()=>changeCurrentPage("pricing")}>Personalizar</Link>
                    <Link to='/webniar'  onClick={()=>changeCurrentPage("webniar")}>Cartera</Link>
                </div>
            </div>
            <div>
                <p>#Nuestras RRSS</p>
                <div className='socialMediaArea'>
                    <a href='https://twitter.com/miraccumbur' target="_blank"><img src='icon/twitter.png' alt="twitter"></img></a>
                    <a href='https://www.instagram.com/miraccumbur/' target="_blank"><img src='icon/instagram.png' alt="instagram"></img></a>
                    <a href='https://www.facebook.com/' target="_blank"><img src='icon/facebook.png' alt="facebook"></img></a>
                    <a href='https://www.linkedin.com/in/miraccumbur/' target="_blank"><img src='icon/linkedin.png' alt="linkedin"></img></a>
                </div>
            </div>

        </div>
        <p>© VIBA Sertec Todos los derechos reservados</p>
    </div>
  )
}

function mapStateToProps(state) {
    return {
      currentPage: state.currentPageReducer,
    };
  }
  
  const mapDispatchToProps = {
    changeCurrentPage,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer);
  