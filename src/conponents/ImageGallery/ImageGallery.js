import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import s from './ImageGallery.module.css';
import sItem from '../ImageGalleryItem/ImageGalleryItem.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import pixabayAPI from '../../services/PixabayAPI';

function ImageGallery({
  query,
  isNewQuery,
  page,
  setLastPage,
  setVisibilityLoadMore,
  resetState,
  openImage,
}) {
  const [images, setImages] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchImages();

    async function fetchImages() {
      if (isNewQuery) {
        setImages([]);
      }

      setShowLoader(true);

      const newImages = await pixabayAPI.fetchPixabayImages(query, page);
      setImages(state => [...state, ...newImages.hits]);

      setShowLoader(false);

      imagesIsAvailable();
      scrollToEndPage();

      const lastPage = Math.ceil(newImages.total / 12);
      setLastPage(lastPage);

      if (page < lastPage) {
        setVisibilityLoadMore(true);
      }

      function imagesIsAvailable() {
        if (!newImages.hits.length) {
          toast.error('За запитом нічого не знайдено. Спробуйте інший запит!');
          resetState();
        }
      }
    }
  }, [query, page]);

  const scrollToEndPage = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleClickImage = event => {
    openImage(
      event.target
        .closest(`.${sItem.ImageGalleryItem}`)
        .querySelector('img')
        .getAttribute('srclarge'),
    );
  };

  return (
    images && (
      <div>
        <ul onClick={handleClickImage} className={s.ImageGallery}>
          <ImageGalleryItem images={images} openImage={openImage} />
        </ul>

        {showLoader && (
          <div className={s.Loader}>
            <Loader type="Circles" color="#3f51b5" height={40} width={40} />
          </div>
        )}
      </div>
    )
  );
}

export default ImageGallery;
