import React from "react";

const BackgroundImage = ({user, urls}) => {
  return(
    <div>
      {document.body.style.backgroundImage = `url(${urls.regular})`}
    </div>
  )
}

export default BackgroundImage;