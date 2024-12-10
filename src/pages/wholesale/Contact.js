import Textbox from '../../components/Textbox/Textbox'
import './Wholesale.css'

export default function Contact(){
    return(
        <div className='textright'>
            <div className='title2'>
                <div className='contactus'>
                    CONTACT US
                </div>
                <div className='inquiries'>
                    FOR WHOLESALE INQUIRIES
                </div>
            </div>
            <div className='inputcon'>
                <div className='smallcon'>
                    <div className='incol'>
                        <input name='Name' className='inputdata' type='text' placeholder='Name*' required></input>
                        <input name='Email' className='inputdata' type='email' placeholder='Email*' required></input>

                    </div>
                    <div className='incol'>
                        <input name='Phone' className='inputdata' type='text' placeholder='Phone' required></input>
                        <input name='Company' className='inputdata' type='text' placeholder='Company' required></input>
                    </div>
                    <div className='incol'>
                        <textarea rows="5"></textarea>
                    </div>
                    <div className='incol'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}