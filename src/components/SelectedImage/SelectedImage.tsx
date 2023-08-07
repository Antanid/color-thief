import ImageBlock from "./ImageBlock";
import style from "./style/style.module.scss";

type SelectImageType = {
  img: string;
};

const SelectedImage: React.FC<SelectImageType> = ({ img }) => {
  return (
    <div className={style.selected_image_div}>
      <ImageBlock img={img} />
    </div>
  );
};

export default SelectedImage;
