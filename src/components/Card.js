import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({
  card,
  name,
  link,
  likes,
  handleClick,
  handleRemoveLike,
  handleAddLike,
  handleRemove,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const hasOwnerLike = card.likes.some((like) => like._id === currentUser._id);
  const handleLike = () => {
    if (hasOwnerLike) {
      handleRemoveLike(card);
    } else {
      handleAddLike(card);
    }
  };

  return (
    <>
      <div className="update__card">
        <img
          onClick={() => {
            handleClick(name, link);
          }}
          className="update__image"
          src={link}
          alt={name}
        />
        {isOwn && (
          <button
            onClick={() => {
              handleRemove(card);
            }}
            className="update__delete-btn"
          ></button>
        )}
        <div className="update__description">
          <h2 className="update__title">{name}</h2>
          <div className="update__like-container">
            <button
              onClick={handleLike}
              className={`update__like-btn ${
                hasOwnerLike ? "update__liked_btn" : ""
              }`}
            ></button>
            <p className="update__counter">{likes.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
