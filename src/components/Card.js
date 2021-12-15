const Card = ({name, link, likes}) => {
    return (
        <div className="gallery__item card">
            <img className="card__image" src={link} alt={name} />
            <div className="card__section">
                <h4 className="card__text">{name}</h4>
                <div className="card__likes">
                    <button type="button" className="card__heart-button"></button>
                    <span className="card__likes-count">{likes}</span>
                </div>
            </div>
            <button type="button" className="card__delete-button"></button>
        </div>
    )
}

export default Card;