import { useState } from 'react';
import { DisplayMovie, Movie } from '../Components/DisplayMovie';
import SearchInput from '../Components/SearchInput';
import Loader from '../Components/Loader';
import ErrorMessage from '../Components/ErrorMessage';

const Home = () => {
  const [movie, setMovie] = useState<Movie | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className='content' data-testid='home-page'>
      <h1>Find your favorite movies</h1>
      <SearchInput setMovie={setMovie} setLoading={setLoading} setError={setError} />

      {
        loading ?
          <Loader /> :
          <DisplayMovie {...movie} />
      }
      {
        error ? <ErrorMessage /> : ''
      }
    </div>
  );
}

export default Home;
