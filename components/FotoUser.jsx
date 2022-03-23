import React from "react";
import Image from "react-bootstrap/Image";
const FotoUser = (props) => {
  return (
    <div className="image-user">
      <Image src={props.image} roundedCircle fluid />
    </div>
  );
};

export default FotoUser;
