import SelectedImage from "../../components/SelectedImage/SelectedImage";
import { useSelector } from "react-redux";
import { setImage } from "../../redux/ImageSlice";

import LoadText from "../../components/SelectedImage/LoadText";


const SelectedImagePageg = () => {
  const img = useSelector(setImage);
  return <div>{img ? <SelectedImage img={img} /> : <LoadText text="Load your image" />}</div>;
};

export default SelectedImagePageg;
