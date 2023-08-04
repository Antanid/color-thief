import Color, { Palette } from "color-thief-react";
import React from "react";
import style from "./style/style.module.scss";

type PalleteType = {
  img: string;
  onCopieText: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  copie: string;
};

const PaletteBlock: React.FC<PalleteType> = ({ img, onCopieText, copie }) => {
  return (
    <div className={style.main_palette}>
       
      <Color src={img} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
           if (loading) return <h1>Loading</h1>;
          return (
            <div className={style.pallete_ul}>
               <p>{'Predominant color'.toUpperCase()}</p>
              <ul>
                <li onClick={onCopieText} style={{ background: data }}>
                  <span>{copie === data ? "Copied" : data}</span>
                </li>
              </ul>
           
            </div>
          );
        }}
      </Color>
      <Palette src={img} crossOrigin="anonymous" format="hex" colorCount={10}>
        {({ data, loading }) => {
          if (loading) return <h1>Loading</h1>;
          return (
            <div className={style.pallete_ul}>
              <ul>
                {data?.map((color, index) => (
                  <li onClick={onCopieText} key={index} style={{ background: color }}>
                    <span>{copie === color ? "Copied" : color}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette>
    </div>
  );
};

export default PaletteBlock;
