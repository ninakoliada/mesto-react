import { useEffect, useState } from "react";
import { api } from "../utils/api";
import Profile from "./Profile";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                const {name, about, avatar} = userData;
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
                setCards(cardsData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main>
            <Profile avatar={userAvatar} name={userName} about={userDescription} onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} />
            <section className="gallery">
                {cards.map((item) => {
                    return <Card key={item._id} card={item} onCardClick={onCardClick}/>
                })}
            </section>
        </main>
    )
}

export default Main;