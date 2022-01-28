import { useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import Profile from "./Profile";
import Card from "./Card";
import { UserContext } from "../contexts/CurrentUserContext";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [cards, setCards] = useState([]);
    const currentUser = useContext(UserContext);

    useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id))
        })
    }

    return (
        <main>
            <Profile avatar={currentUser.avatar} name={currentUser.name} about={currentUser.about} onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} />
            <section className="gallery">
                {cards.map((item) => {
                    return <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                })}
            </section>
        </main>
    )
}

export default Main;