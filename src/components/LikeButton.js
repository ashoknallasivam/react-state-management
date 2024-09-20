//src/components/SampleCode.js
import React, { useState } from "react";
import classNames from "classnames";

function LikeButton() {
  const [likes, setLikes] = useState(100);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={classNames("like-button", { liked: isLiked })}
      onClick={handleLike}
    >
      Like | <span className="likes-counter">{likes}</span>
    </button>
  );
}

export default LikeButton;
