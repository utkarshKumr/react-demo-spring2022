

const Card  = ({onButtonClick, data}) => {
    const {nameOfHotel = ''} = data;

    return(
        <div>
            <h1></h1>
            {nameOfHotel}
        </div>

    );

}


export default Card;