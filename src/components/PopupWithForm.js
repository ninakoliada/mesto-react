const PopupWithForm = ({ name, title, isOpen, onClose, children }) => {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_visibility_visible' : ''}`}>
            <div className="popup__background" onClick={onClose}></div>
            <div className="popup__body">
                <h3 className="popup__text">{title}</h3>
                <form className="popup__form" name={name}>
                    {children}
                    <button type="submit" className="button button_size_l popup__button">Сохранить</button>
                </form>
                <button type="button" className="button popup__close" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default PopupWithForm;