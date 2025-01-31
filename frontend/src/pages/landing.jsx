import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'



export default function LandingPage() {

    const router = useNavigate();
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2 style={{ color: "#CBA35C",fontWeight: 500, }}> Mulakat</h2>
                </div>

                <div className='navList'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1 ><span style={{ color: "#FF9839" }} className='type-writter' >Connect</span>  with Your Loved Ones</h1>
                    <p>Cover a distance by Video Call</p>
                    <div role='button' className='buton_getStarted'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>

                <div>
                    <img src="/ed5d8f86e956f68822bb8639f5002819-removebg.png" alt="" />
                </div>






            </div>


        </div>

    )
}
