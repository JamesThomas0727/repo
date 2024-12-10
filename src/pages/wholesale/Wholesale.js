import Emptybox from "../../components/Textbox/Emptybox";
import Textbox from "../../components/Textbox/Textbox";
import Contact from "./Contact";
import Text from "./text";


export default function Wholesale(){
    return(
        <div className="wholesale">
            <div className="textleft">
                <Text />
            </div>
            <div className="textright">
                <Contact />
            </div>
        </div>
    )
}