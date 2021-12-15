import { useEffect, useState } from "react";
import { api } from "../utils/api";
import Profile from "./Profile";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlaceClick, onAvatarEditClick }) => {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then((data) => {
                const {name, about, avatar} = data[0];
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
                setCards(data[1]);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <main>
            <Profile avatar={userAvatar} name={userName} about={userDescription} onEditClick={onEditProfile} onAddClick={onAddPlaceClick} onAvatarEditClick={onAvatarEditClick} />
            <section className="gallery">
                {cards.map((item) => {
                    return <Card name={item.name} link={item.link} likes={item.likes.length}/>
                })}
            </section>

        </main>
    )
}

export default Main;