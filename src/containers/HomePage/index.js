import {useState} from 'react';
import data from './data';
import ListElement from './components/ListElement';

const HomePage = () => {
    const [dataInState, changeData] = useState(data);
    const [knowMore, setKnowMore] = useState(false);
    const {name = '',description = '', hobbies = []} = dataInState;

    return(
        <div>
            <h2>Hiii, I am {name}</h2>
            <p>{description}</p>
            <button onClick={() => {setKnowMore(!knowMore)}}>Click here to {!knowMore?'Know More!':'Close'}</button>
            {knowMore &&
            <ul>
                {hobbies.map((item) => {
                    return <ListElement data={item}/>
                })}
            </ul>}
        </div>
    )
}
export default HomePage;