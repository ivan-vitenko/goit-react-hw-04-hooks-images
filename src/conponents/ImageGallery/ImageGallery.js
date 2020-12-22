import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import s from './ImageGallery.module.css';
import sItem from '../ImageGalleryItem/ImageGalleryItem.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import pixabayAPI from '../../services/PixabayAPI';

function ImageGallery({ query, page, setLastPage, resetState, openImage }) {
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    // if (query) {
    //   setImages([]);
    //   setTotalImages(0);
    // }

    // setShowLoader(true);
    fetchImages();
    // setShowLoader(false);

    async function fetchImages() {
      const newImages = await pixabayAPI.fetchPixabayImages(query, page);
      // console.log(newImages);
      setImages(state => [...state, ...newImages.hits]);
      // setImages([...images, ...newImages.hits]);
      // console.log(images);
      // console.log(newImages);
      // console.log(query);
      // console.log(page);
      // console.log('');

      setTotalImages(newImages.total);

      imagesIsAvailable();
      scrollToEndPage();

      setLastPage(Math.ceil(totalImages / 12));
    }

    function imagesIsAvailable() {
      if (!images.length) {
        toast.error('За запитом нічого не знайдено. Спробуйте інший запит!');
        resetState();
      }
    }
  }, [
    // images,
    // totalImages, showLoader,
    query,
    page,
    // setLastPage, resetState
  ]);

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
