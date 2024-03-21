import React from "react";
import Card from "./Card.js";

export default function Main({handleEditPicClick,handleEditProfileClick,handleNewPostClick,handleZoomClick,user,cards}) {
  return (
    <div>
      <main className="content">
        <section className="profile">
          <div>
            <img
              className="profile__image"
              src={user.avatar}
              alt="imagen de perfil"
            />
            <button className="profile__image-btn" onClick={handleEditPicClick}></button>
          </div>
          <div className="profile__container">
            <div className="profile__container-b">
              <h1 className="profile__name">{user.name}</h1>
              <button className="profile__edit-btn" onClick={handleEditProfileClick}></button>
            </div>
            <h4 className="profile__description">{user.about}</h4>
          </div>
          <button className="profile__add-btn" onClick={handleNewPostClick}>+</button>
        </section>
        <section className="update">
          {
            cards.map((item, index) => {
              return <Card
                key={index}
                handleClick={handleZoomClick}
                likes={item.likes}
                name={item.name}
                link={item.link} />
            })
          }
        </section>
      </main>
    </div>
  );
}