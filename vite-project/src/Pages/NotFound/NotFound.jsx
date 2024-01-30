//Import Css.................
import './NotFound.css';


//Import Link from React Router................
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <section className="Not-Found">
            <div className="cotainer not-found-container">
                <h1>404</h1>
                <h3>Opps, This Page Not Found</h3>
                <Link to={'/'} className='btn btn-border'>Go To Home</Link>
            </div>
        </section>
    )
}