//import BestSellingBook css.................
import './BestSellingBook.css';

//import Title Props.........................
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo';


//import Tree Shape.........................
import TreeShape from '../../assets/treeShape.png';

//import Selling Books Data......................
import { sellingBooksData } from '../../Data/Data';

//Import Link from React Router................
import { Link } from 'react-router-dom';

//Import React Icon.....................
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBook(){
    return(
        <section className='BestSellingBook'>
            {/*--------------------Selling Book Tree Shape----------- */}
            <div className='treeShape'>
                <img src={TreeShape} alt=''/>
            </div>

                {/*..................Selling Book Content............. */}
            {
                sellingBooksData.map(({img, infoTitle, infoTitleTop, desc, price, shopbtnLink})=>{
                    return(
                        <div className="container bestselling-container">
                            {/*-------------Left------------ */}
                            <div className="selling-book-left">
                                <img src={img} alt=''/>
                            </div>

                            {/*--------------Right----------- */}
                            <div className="selling-book-right">
                                <TitileTypeTwo Title={'Best selling book'} className = 'sellingBookTitle'/>
                                <div><small>{infoTitleTop}</small></div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5><span>{price}</span></h5>
                                <Link to={shopbtnLink} className='btn'>
                                    <small>Shop it now</small>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}