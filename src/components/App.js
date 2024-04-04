import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/api";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [openPopupProfile, setOpenPopupProfile] = React.useState(false);
  const [openPopupNewPost, setOpenPopupNewPost] = React.useState(false);
  const [openPopupZoom, setOpenPopupZoom] = React.useState(false);
  const [openPopupPic, setOpenPopupPic] = React.useState(false);
  const [openPopupErase, setOpenPopupErase] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  const closeAllPopups = () => {
    setOpenPopupErase(false);
    setOpenPopupZoom(false);
    setOpenPopupProfile(false);
    setOpenPopupNewPost(false);
    setOpenPopupPic(false);
  };

  const handleEditAvatarClick = () => {
    setOpenPopupPic(true);
  };
  const handleEditProfileClick = () => {
    setOpenPopupProfile(true);
  };
  const handleAddPlaceClick = () => {
    setOpenPopupNewPost(true);
  };
  const handleZoomClick = (name, link) => {
    setOpenPopupZoom(true);
    setSelectedCard({
      name,
      link,
    });
  };
  const handleImageAddLike = (card) => {
    return api.addLike(card._id).then((cardResponse) => {
      card.likes = cardResponse.likes;
      setCards([...cards]);
    });
  };
  const handleImageRemoveLike = (card) => {
    return api.removeLike(card._id).then((cardResponse) => {
      card.likes = cardResponse.likes;
      setCards([...cards]);
    });
  };
  const handleImageRemove = (card) => {
    setSelectedCard(card);
    setOpenPopupErase(true);
  };

  const handleSubmitEditProfile = ({ name, about }) => {
    return api
      .updateUser(name, about)
      .then((user) => {
        setCurrentUser(user);
      })
      .then(() => {
        closeAllPopups();
      });
  };

  const removeSelectedCard = () => {
    return api
      .deleteCard(selectedCard._id)
      .then(() => {
        setCards(cards.filter((card) => card._id !== selectedCard._id));
      })
      .then(() => {
        closeAllPopups();
      });
  };

  const handleSubmitEditAvatar = ({ pic }) => {
    return api
      .updateAvatar(pic)
      .then((user) => {
        setCurrentUser(user);
      })
      .then(() => {
        closeAllPopups();
      });
  };
  const handleSubmitAddPlace = ({ title, link }) => {
    return api
      .insertCard(link, title)
      .then((card) => {
        setCards([card, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      });
  };

  React.useEffect(() => {
    api.getCards().then((cards) => {
      setCards(cards);
    });
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            handleEditPicClick={handleEditAvatarClick}
            handleEditProfileClick={handleEditProfileClick}
            handleNewPostClick={handleAddPlaceClick}
            handleZoomClick={handleZoomClick}
            handleImageAddLike={handleImageAddLike}
            handleImageRemove={handleImageRemove}
            handleImageRemoveLike={handleImageRemoveLike}
            cards={cards}
          />
          <Footer />

          <EditProfilePopup
            handleSubmit={handleSubmitEditProfile}
            open={openPopupProfile}
            close={closeAllPopups}
          />
          <AddPlacePopup
            handleSubmit={handleSubmitAddPlace}
            open={openPopupNewPost}
            close={closeAllPopups}
          />
          <ImagePopup
            selectedCard={selectedCard}
            open={openPopupZoom}
            close={closeAllPopups}
          ></ImagePopup>
          <EditAvatarPopup
            handleSubmit={handleSubmitEditAvatar}
            open={openPopupPic}
            close={closeAllPopups}
          />
          <PopupWithForm
            open={openPopupErase}
            title="¿Estás Seguro/a?"
            confirmation="Sí"
            handleSubmit={removeSelectedCard}
            activeSubmit={true}
            onClose={closeAllPopups}
          ></PopupWithForm>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
