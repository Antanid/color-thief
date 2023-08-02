import Input from "../../components/Input/Input";
import { addImg } from "../../redux/ImageSlice";
import { useAppDispatch } from "../../redux/store";
import downloadImg from "../../image/unloadImg.png"

const InputPage = () => {
  const dispatch = useAppDispatch();

  const onUploadImg = (e: React.ChangeEvent<HTMLInputElement> ) => {
  // @ts-ignore
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      img.onload = () => {
        dispatch(addImg(event.target?.result));
      };
      // @ts-ignore
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Input
      downloadImg={downloadImg}
       onUploadImg={onUploadImg}
        />
    </div>
  );
};

export default InputPage;
