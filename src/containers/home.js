import {useState, useEffect} from 'react';
import Card from './components/card';
import Filter from './components/'
import './home.css';
const HomePage = () => {


    const [toggleState, setToggleState] = useState(false);
    const [listOfHotels, setHotelList] = useState([]);


    const callbackFunc = (data) => {
        setHotelList(data);
    }
    
    useEffect(() => {
        apiHomeCall(callbackFunc) // fetch
    },[toggleState]);

    const handlerFunction = () => {
        // newApiCall();
        
    }
    return(
        <div>

            <div className='class-Name'>
                <Filter/>
            </div>
            

            {listOfHotels.map((item) => {
                return <Card data={item} onButtonClick={handlerFunction} onClick={() => {setToggleState(!toggleState)}}/>
            })}

            <button onClick={()=> handlerFunction()}></button>


            
        </div>

        
    )

}

export default HomePage;