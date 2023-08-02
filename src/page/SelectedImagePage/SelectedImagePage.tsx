import React from "react";
import SelectedImage from "../../components/SelectedImage/SelectedImage";
import { useSelector } from "react-redux";
import { setImage } from "../../redux/ImageSlice";

const SelectedImagePageg = () => {
    const img = useSelector(setImage)
  return (
    <div>
      <SelectedImage img={img}/>
    </div>
  );
};

export default SelectedImagePageg;
