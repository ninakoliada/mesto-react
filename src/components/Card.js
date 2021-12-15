const Card = ({card, onCardClick}) => {
    function handleClick () {
        onCardClick(card)
    }
    
    return (
        <div className="gallery__item card">
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__section">
                <h4 className="card__text">{card.name}</h4>
                <div className="card__likes">
                    <button type="button" className="card__heart-button"></button>
                    <span className="card__likes-count">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" className="card__delete-button"></button>
        </div>
    )
}

export default Card;