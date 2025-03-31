import './card.scss';

const Card = ({ item }) => {
    return (
        <div className="card">
            <img className="card-img" src={item.image} alt="" />
            <h3 className="card-title">{
                item.title.length > 30
                    ? item.title.substr(0, 27).trim() + '...'
                    : item.title
            }</h3>
            <p className="card-text">{
                item.description.length > 30
                    ? item.description.substr(0, 27).trim() + '...'
                    : item.description
            }</p>
            <p className="card-text">{item.category}</p>
            <div className="card-block">
                <p>${item.price}</p>
                <button>buy</button>
            </div>
        </div>
    );
}

export default Card;
