import React from "react";
//import { API } from "../config";
import Img from "gatsby-image";

const ShowImage = ({ item, url }) => (
    <div className="product-img">
   {/*  <img
            src={`${item.fluid.images[0].src}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
     />
      */}
      <Img  className="mb-3" fluid={item.images[0].fluid}  style={{ maxHeight: "50%", maxWidth: "50%" }}/>
    </div>
);

export default ShowImage;
