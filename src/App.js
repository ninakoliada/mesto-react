import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePopup from "./components/ImagePopup";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";

function App() {
  useEffect(() => {
    document.querySelector('body').classList.add('page');
  });

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined);
  }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onAddPlace={() => setIsPlacePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
        onCardClick={(card) => setSelectedCard(card)}
        />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" name="profile">
        <label className="popup__form-field">
          <input id="user-name" name="name" className="popup__input popup__input_type_name" type="text" placeholder="ФИО" required minLength="2" maxLength="40" />
          <span className="popup__error user-name-error"></span>
        </label>
        <label className="popup__form-field">
          <input id="user-about" name="about" className="popup__input popup__input_type_about" type="text" placeholder="Род занятий" required minLength="2" maxLength="200" />
          <span className="popup__error user-about-error"></span>
        </label>
      </PopupWithForm>

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

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name="avatar">
        <label className="popup__form-field">
          <input id="avatar-link" name="link" className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__error avatar-link-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
