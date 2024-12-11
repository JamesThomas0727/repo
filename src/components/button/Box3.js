import Input from '../input/Input';
import Textbox from '../Textbox/Textbox';
import Button from './Button';
import '../footer/Footer.css'

export default function Box3(){
    return(
        <div className='box3'>
        <Textbox text = "Subsicibe Here*" />
        <Input text = "Your email" />
        <div className='smallt'>
        <Textbox text = "subscribe to our mail list for monthly discounts and offers" />
        </div>
        <Button text ="SUBSCRIBE" />

    </div>
    )
}