import React, { useState } from 'react'
import '../styles/Login.scss';

const Login = () => {
    const [isLogin,setIsLogin] = useState( false );
    const [user,setUser] = useState( "" );
    const [pass,setPass] = useState( "" );

    const fn_login = ( e ) => {
        e.preventDefault();
        console.log( "Usuario: ", user );
        console.log( "Password: ", pass );

        if( user.trim() && pass.trim() ){
            if( user === "fossola@andreani.com" && pass === "123456" ){
                setIsLogin( true );
                alert( "Login correcto" );
                document.getElementById( "login" ).style.display = "none";

            } else {
                setIsLogin( false );
                alert( "Usuario o contraseña incorrecta!!" );

                document.getElementById( "email" ).value = "";
                document.getElementById( "password" ).value = "";
                document.getElementById( "email" ).focus();

            }

        } else {
            alert( "complete los datos requeridos!" );

        }

    }

    return(
        <div className="container">
            <div className="login" id="login">
                <div className="card-body">
                    <div className="form-container">
                        <form action="/" className="form">
                            <label for="email" className="label">Email</label>
                            <input type="text" id="email" placeholder="usuario@correo.com" className="input input-email" onChange={( e ) => setUser( e.target.value )} required />
                    
                            <label for="password" className="label">Password</label>
                            <input type="password" id="password" placeholder="**********" className="input input-password" onChange={( e ) => setPass( e.target.value )} required />
                    
                            <input type="submit" value="Iniciar Sesi&oacute;n" onClick={fn_login} className="primary-button login-button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;