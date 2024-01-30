//Import CopyRight Css
import './CopyRight.css';

//Import Footer socials Data..........
import { FootersLinksData } from '../../Data/Data';

//Import React Icon..........
import { MdCopyright } from "react-icons/md";

export default function CopyRight(){
    return(
        <div className='footer-copyright'>
            <div className="container copyright-container">
                <p><MdCopyright /> 2024 Zapterify. All rights reserved.</p>
                <div className="footer-socials">
                    {
                        FootersLinksData.socials.map((item,index)=>{
                            return(
                                <a href={item.link} key={index}>
                                    <item.icon/>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}