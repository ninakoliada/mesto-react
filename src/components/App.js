import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { UserContext } from '../contexts/CurrentUserContext';

import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function onEditProfile() {
    setIsEditProfilePopupOpen(true)
  }

  function onAddPlace() {
    setIsPlacePopupOpen(true)
  }
  
  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true)
  }
  function onCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(userData) {
    api.editUserInfo(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        closeAllPopups()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then((newUserData) => {
        closeAllPopups()
        setCurrentUser(newUserData);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="page__content">
      <UserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onEditAvatar={onEditAvatar}
          onCardClick={onCardClick}
          />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <PopupWithForm isOpen={isPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name="place">
          <label className="popup__form-field">
            <input id="place-name" name="name" className="popup__input popup__input_type_name" type="text" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__error place-name-error"></span>
          </label>
          <label className="popup__form-field">
            <input id="place-link" name="link" className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__error place-link-error"></span>
          </label>
        </PopupWithForm>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
