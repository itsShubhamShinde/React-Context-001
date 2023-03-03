import React,{useContext} from 'react'
import { GlobalData } from '../App'
import './Contact.css'

const darktheam = { color: "white", backgroundColor: "#0f172a" };
const lighttheam = { color: "black", backgroundColor: "white" };

const Contact = () => {
  const context = useContext(GlobalData)

  return (
    <div className='ContactDiv' style={context.theam ? darktheam : lighttheam}>
      <h1>You can mail me help@shubhamshinde.in</h1>
    </div>
  )
}

export default Contact;