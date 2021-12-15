import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';

const Profile = ({ name, about, avatar, onEditClick, onAddClick, onAvatarEditClick }) => {
    return (
        <section className="profile">
            <div className="profile__avatar-container" onClick={onAvatarEditClick}>
                <img className="profile__avatar" src={avatar} alt={name}/>
                <div className="profile__avatar-edit"></div>   
            </div>
            <div className="profile__info">
                <div className="profile__content">
                    <h1 className="profile__name">{name}</h1>
                    <button type="button" className="button button_size_s profile__edit-button" onClick={onEditClick}>
                        <img src={editButton} alt="Кнопка редактировать профиль"/>
                    </button>
                </div>
                <p className="profile__about">{about}</p>
            </div>
            <button type="button" className="button button_size_l profile__add-button" onClick={onAddClick}>
                <img className="profile__add-image" src={addButton} alt="Кнопка добавить"/>
            </button>
        </section>
    )
}

export default Profile;