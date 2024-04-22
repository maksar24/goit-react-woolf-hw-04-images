import { useEffect, useState } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Wrapper from './Wrapper/Wrapper';
import { getSearchPicturesApi } from 'api/pictures/picturesApi';
import Searchbar from './Searchbar/Searchbar';
import { PER_PAGE } from 'api/api';
import Modal from './Modal/Modal';
import { useGlobalContext } from 'context/GlobalProvider';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [_error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [largeImgURL, setLargeImgURL] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const { isShowModal, toggleModal } = useGlobalContext();

  useEffect(() => {
    const getPictures = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getSearchPicturesApi(searchValue, page);
        setPictures(pictures => [...pictures, ...data.hits]);
        if (data.hits.length > PER_PAGE - 1) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchValue && getPictures();
  }, [page, searchValue]);

  const handleSubmit = value => {
    setSearchValue(value);
    setPictures([]);
    setPage(1);
  };

  const handleClick = () => setPage(prev => prev + 1);

  const handleFinishLoad = () => setIsLoading(false);

  const getLargeImgURL = imgURL => {
    setLargeImgURL(imgURL);
    setIsLoading(true);
    toggleModal();
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery pictures={pictures} handleGetURL={getLargeImgURL} />
      {isHidden && <Button action={handleClick}>Load more</Button>}
      {isShowModal && (
        <Modal
          closeModal={toggleModal}
          imgURL={largeImgURL}
          statusLoading={handleFinishLoad}
        />
      )}
    </Wrapper>
  );
};
