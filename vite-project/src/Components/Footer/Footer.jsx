//Import Footer css.......................
import './Footer.css';


//import Footer Data..............
import { FootersLinksData } from '../../Data/Data';

//Import Link from React Router................
import { Link } from 'react-router-dom';

//Import CopyRight and Fatter Socials................
import CopyRight from '../CopyRight/CopyRight';


export default function Footer(){
    return(
        <footer>
            <div className="container footer-container">
                {/*-----------About Params--------------- */}
                <div>
                    <h4>About Us</h4>
                    <ul className='About-params param-links'>
                    {
                        FootersLinksData.Aboutus.map(({link,linkname},index)=>{
                            return(
                                <li key={index}><Link to={link}>{linkname}</Link></li>
                            )
                        })
                    }
                    </ul>
                </div>

                {/*-----------Discover Params--------------- */}
                <div>
                    <h4>Discover Us</h4>
                    <ul className='Discover-params param-links'>
                    {
                        FootersLinksData.Discover.map(({link,linkname},index)=>{
                            return(
                                <li key={index}><Link to={link}>{linkname}</Link></li>
                            )
                        })
                    }
                    </ul>
                </div>

                {/*-----------My account Params--------------- */}
                <div>
                    <h4>My account</h4>
                    <ul className='MyAccount-params param-links'>
                    {
                        FootersLinksData.Myaccount.map(({link,linkname},index)=>{
                            return(
                                <li key={index}><Link to={link}>{linkname}</Link></li>
                            )
                        })
                    }
                    </ul>
                </div>

                {/*-----------Help Params--------------- */}
                <div>
                    <h4>Helps</h4>
                    <ul className='Help-params param-links'>
                    {
                        FootersLinksData.Help.map(({link,linkname},index)=>{
                            return(
                                <li key={index}><Link to={link}>{linkname}</Link></li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <CopyRight/>
        </footer>
    );
}