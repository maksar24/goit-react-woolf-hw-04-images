import { Image, Item } from './ImageGalleryItem.styles';

const ImageGalleryItem = ({ url, description, imgAction }) => {
  return (
    <Item>
      <Image src={url} alt={description} onClick={imgAction} />
    </Item>
  );
};

export default ImageGalleryItem;
