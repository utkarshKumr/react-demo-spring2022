import {useState, useEffect} from 'react';
// import data from './data';
import {loadData} from './data';
import ListElement from './components/ListElement';
import './index.css';

const HomePage = () => {
    const [dataInState, changeData] = useState({});
    const [knowMore, setKnowMore] = useState(false);

    useEffect(() => {

    if(knowMore) loadData(changeData);

    },[knowMore]);

    const handleOnClick = () => {
        setKnowMore(!knowMore);
        // you can also call apis here, based on action.
    }

    const {name = '',description = '', hobbies = []} = dataInState;

    return(
        <div>
            <button onClick={handleOnClick}>Click here to {!knowMore?'load data':'Close'}</button>
            <h2>{name}</h2>
            <p>{description}</p>
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