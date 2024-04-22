import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styles';

const ImageGallery = ({ pictures, handleGetURL }) => {
  return (
    <Gallery>
      {pictures.map(({ webformatURL, tags, id, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            description={tags}
            imgAction={() => handleGetURL(largeImageURL)}
          />
        );
      })}
    </Gallery>
  );
};

export default ImageGallery;
