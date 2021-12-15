const Card = ({card, onCardClick}) => {
    return (
        <div className="gallery__item card">
            <img className="card__image" src={card.link} alt={card.name} onClick={() => {
                onCardClick(card)
            }} />
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