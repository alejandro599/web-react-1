import React from 'react';
import '../style/HeroForm.scss';

export default function HeroForm() {
    return (
        <>
            <div className="sign-up ">
            
                <form className="form">
                <i className="far fa-user user"></i>
                    <label htmlFor="" className="label">
                        Usuario: 
                    </label>
                    <input type="text" className="input" placeholder="Ingrese su Usuario..."/>
                    <label htmlFor="" className="label">
                        Contraseña: 
                    </label>
                    <input type="password"  className="input" placeholder="Ingrese su Contraseña"/>
                    <button className="send">Iniciar Sesión</button>
                </form>
            </div>
        </>
    )
}
