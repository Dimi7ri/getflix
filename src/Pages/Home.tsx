import { useState } from 'react';
import { DisplayMovie, Movie } from '../Components/DisplayMovie';
import { Search } from '../Components/SearchInput';

const Home = () => {
  const [movie, setMovie] = useState<Movie | undefined>();

  return (
    <div className='content'>
      <h1>Find your favorite movies</h1>
      <Search setMovie={setMovie} />
      <DisplayMovie {...movie} />
    </div>
  );
}

export default Home;
