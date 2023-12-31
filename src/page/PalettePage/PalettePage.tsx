import PaletteBlock from "../../components/PaletteBlock/PaletteBlock";
import { useSelector } from "react-redux";
import { setImage } from "../../redux/ImageSlice";
import { useEffect, useState } from "react";
import style from "../../components/PaletteBlock/style/style.module.scss";

const PalettePage = () => {
  const img = useSelector(setImage);
  const [copie, setCopie] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setCopie("");
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [setCopie, copie]);

  const onCopieText = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const color = (e.target as HTMLElement).innerText;
    setCopie(color);
    navigator.clipboard.writeText(color);
  };
  return (
    <div className={style.parent_div}>
      {img && (
          <PaletteBlock copie={copie} onCopieText={onCopieText} img={img} />
      )}
    </div>
  );
};

export default PalettePage;
