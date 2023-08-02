import style from './style/style.module.scss'

type SelectImageType = {
  img: string
}

const SelectedImage: React.FC <SelectImageType> = ({img}) => {
  return (
    <div className={style.selected_image_div}> 
    {
      img ?   <img src={img} alt='selectedImage'/> :
      <h2>Load your image</h2>
    }
  
    </div>
  )
}

export default SelectedImage