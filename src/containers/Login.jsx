import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Login.scss';

const Login = ( { children } ) => {
    const [isLogin,setIsLogin] = useState( window.localStorage.getItem( "isLogin" )? window.localStorage.getItem( "isLogin" ): "false" );
    const [user,setUser] = useState( "" );
    const [pass,setPass] = useState( "" );
    const [userAPI, setUserAPI]  = useState( "" );
    const [passAPI, setPassAPI]  = useState( "" );

    useEffect( () => {
        const loadData = async () => {
            const urlAPILogin = "https://jsonplaceholder.typicode.com/users/8";

            const res = await axios.get(urlAPILogin);
    
            setUserAPI( res.data.email.toLowerCase() );
            setPassAPI( res.data.address.zipcode );
        };
  
        loadData();
    }, []);

    const fn_login = ( e ) => {
        e.preventDefault();

        if( user.trim() && pass.trim() ){
            if( user === userAPI && pass === passAPI ){
            //if( user === "fossola@andreani.com" && pass === "123456" ){
                window.localStorage.setItem( "islogin", "true" );
                setIsLogin( "true" );

                document.getElementById( "login" ).style.display = "none";

            } else {
                window.localStorage.setItem( "islogin", "false" );
                setIsLogin( "false" );
                setUser( "" );
                setPass( "" );

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
            {isLogin === "true"? 
                children:
                <div className="login" id="login">
                    <div className="card-body">
                        <div className="form-container">
                            <form action="/" className="form">
                                <label htmlFor="email" className="label">Email</label>
                                <input type="text" id="email" placeholder="usuario@correo.com" className="input input-email" onChange={( e ) => setUser( e.target.value )} required />
                        
                                <label htmlFor="password" className="label">Password</label>
                                <input type="password" id="password" placeholder="**********" className="input input-password" onChange={( e ) => setPass( e.target.value )} required />
                        
                                <input type="submit" value="Iniciar Sesi&oacute;n" onClick={fn_login} className="primary-button login-button" />
                            </form>
                        </div>
                    </div>
                </div>
            }
            {/* {isLogin === "true" && children} */}
        </div>
    );
};

export default Login;