import { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Wrapper from './Wrapper/Wrapper';
import { getSearchPicturesApi } from 'api/pictures/picturesApi';
import Searchbar from './Searchbar/Searchbar';
import { PER_PAGE } from 'api/api';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: '',
    searchValue: '',
    page: 1,
    largeImgURL: '',
    isHidden: false,
    isShowModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, searchValue } = this.state;
    if (prevState.page !== page || prevState.searchValue !== searchValue)
      this.getPictures();
  }

  getPictures = async () => {
    try {
      this.setState({ isLoading: true, error: '' });
      const data = await getSearchPicturesApi(
        this.state.searchValue,
        this.state.page
      );
      this.setState(prevState => ({
        totalPictures: data.totalHits,
        pictures: [...prevState.pictures, ...data.hits],
      }));
      if (data.hits.length > PER_PAGE - 1) {
        this.setState({ isHidden: true });
      } else {
        this.setState({ isHidden: false });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue, pictures: [], page: 1 });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFinishLoad = () => {
    this.setState({ isLoading: false });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isShowModal: !prevState.isShowModal }));
  };

  getLargeImgURL = imgURL => {
    this.setState({ largeImgURL: imgURL, isLoading: true });
    this.toggleModal();
  };

  render() {
    const { isLoading, pictures, isHidden, isShowModal, largeImgURL } =
      this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery pictures={pictures} handleGetURL={this.getLargeImgURL} />
        {isHidden && <Button action={this.handleClick}>Load more</Button>}
        {isShowModal && (
          <Modal
            closeModal={this.toggleModal}
            imgURL={largeImgURL}
            statusLoading={this.handleFinishLoad}
          />
        )}
      </Wrapper>
    );
  }
}
