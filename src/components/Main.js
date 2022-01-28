import { useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import Profile from "./Profile";
import Card from "./Card";
import { UserContext } from "../contexts/CurrentUserContext";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [cards, setCards] = useState([]);
    const { name, avatar, about } = useContext(UserContext);

    useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main>
            <Profile avatar={avatar} name={name} about={about} onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} />
            <section className="gallery">
                {cards.map((item) => {
                    return <Card key={item._id} card={item} onCardClick={onCardClick}/>
                })}
            </section>
        </main>
    )
}

export default Main;