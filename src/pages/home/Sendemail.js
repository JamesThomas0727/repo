import './home.css'
import Getin from "../../components/getin"
import Send from "../../components/Send"

export default function Sendemail(){
    return(
        <div className='Sendemail'>
            <div className='get'>
<Getin />
            </div>
            <div className='send'>
<Send />
            </div>
        </div>
    )
}