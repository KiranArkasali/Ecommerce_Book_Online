//import TitileTypeTwo CSS.......................
import './TitileTypeTwo.css';

//import victor image....................
import victor from '../../assets/victor.png';

export default function TitileTypeTwo({ClassName, Title}){
    return(
        <div className={`titleTypeOne ${ClassName}`}>
            <h2>{Title}</h2>
            <img src={victor} alt='' className='victor'/>
        </div>
    );
}