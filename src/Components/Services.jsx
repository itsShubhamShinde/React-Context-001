import React,{useContext} from 'react'
import { GlobalData } from '../App'
import './Services.css';

const darktheam = { color: "white", backgroundColor: "#0f172a" };
const lighttheam = { color: "black", backgroundColor: "white" };

const Services = () => {
  const context = useContext(GlobalData)

  return (
    <div className='ServicesDiv' style={context.theam ? darktheam : lighttheam}>
        <h1>Our service are not available</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
    </div>
  )
}

export default Services