import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import Searchbar from './conponents/Searchbar/Searchbar';
import ImageGallery from './conponents/ImageGallery/ImageGallery';
import Button from './conponents/Button/Button';
import Modal from './conponents/Modal/Modal';

function App() {
  const [query, setQuery] = useState('');
  const [isNewQuery, setIsNewQuery] = useState(true);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [visibilityLoadMore, setVisibilityLoadMore] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const resetState = () => {
    setQuery('');
    setIsNewQuery(true);
    setPage(0);
    setLastPage(1);
    setVisibilityLoadMore(false);
    setLargeImageURL('');
  };

  const handleLoadMore = () => {
    setIsNewQuery(false);

    setPage(state => state + 1);

    if (page === lastPage - 1) {
      setVisibilityLoadMore(false);
      toast.info('За запитом завантажено останні картинки');
    }
  };

  const handleFormSubmit = newQuery => {
    setIsNewQuery(true);
    setQuery(newQuery);
    setPage(1);
  };

  const openImage = imageURL => {
    setLargeImageURL(imageURL);
  };

  const closeImage = event => {
    if (event.target === event.currentTarget || event.code === 'Escape') {
      setLargeImageURL('');
      window.removeEventListener('keydown', closeImage);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {query && (
        <ImageGallery
          query={query}
          isNewQuery={isNewQuery}
          page={page}
          setLastPage={setLastPage}
          setVisibilityLoadMore={setVisibilityLoadMore}
          resetState={resetState}
          openImage={openImage}
        />
      )}

      {visibilityLoadMore && <Button onClick={handleLoadMore} />}

      {largeImageURL && (
        <Modal imageURL={largeImageURL} closeImage={closeImage} />
      )}

      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default App;
