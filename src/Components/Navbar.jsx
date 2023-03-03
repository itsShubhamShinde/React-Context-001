import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { GlobalData } from '../App';

const darktheam = { color: "#5ddbf7", backgroundColor: "#0f172a" };
const lighttheam = { color: "#0f172a", backgroundColor: "#5ddbf7" };

const bttheamDark ={ color:"white", backgroundColor: "#0f172a"}
const bttheamLight ={ color:"black", backgroundColor: "#5ddbf7"}



const Navbar = () => {
    const context = useContext(GlobalData)

    return (
        <div className='NavbarmainDiv'>
            <div className='DisplayText'>I have changed theme to {context.theam ? "Dark..!" : "Light..!"}</div>
            <div className='Titlemenu' style={context.theam ? darktheam : lighttheam}>
                <h2>Geekstar</h2>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/Contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/Services">
                        <li>Services</li>
                    </Link>


                </ul>
            </div>
            <div className='buttonDiv' style={context.theam ? darktheam : { color: "#0f172a", backgroundColor: "white" }}>
                <button onClick={() => {
                    context.setTheam(!context.theam)
                }} style={context.theam ? bttheamLight : bttheamDark}>Toggle theam to {context.theam ? "Light..!" : "Dark..!"}</button>
            </div>
        </div>
    )
}

export default Navbar