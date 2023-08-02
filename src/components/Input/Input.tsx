import style from './style/style.module.scss';

type InputType = {
    onUploadImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
    downloadImg: string ;
}

const Input: React.FC <InputType> = ({onUploadImg, downloadImg}) => {
  return (
    <div className={style.input_head}>
        <h1>Thief Color</h1>
        <div className={style.inpul_label}>
            <label htmlFor='file'>
            <img src={downloadImg} alt='loadImg' />
              Upload Image
            </label>
            <input onChange={onUploadImg} type='file' id='file' />
        </div>
    </div>
  )
}

export default Input