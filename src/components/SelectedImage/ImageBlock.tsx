

type ImageType = {
    img: string
}


const ImageBlock: React.FC <ImageType> = ({img}) => {
  return (
    <img src={img} alt="selectedImage" />
  )
}

export default ImageBlock