import { useState } from 'react';

export interface Movie {
  Title?: string;
  Poster?: string;
  Year?: string;
  Plot?: string;
  Genre?: string;
  Actors?: string;
}

export const DisplayMovie = (movie: Movie) => {
  const { Title, Poster, Year } = movie;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  if (!movie.Title) return (<></>);
  return (
    <div className='movie'>
      <div className='title' onClick={() => setShowDetails(!showDetails)}>{Title} </div>
      <div className='year'>{Year}</div>
      <img src={Poster} alt={Title} />
      {showDetails ? <DisplayDetails {...movie} /> : ''}
    </div>
  );
}

const DisplayDetails = (movie: Movie) => {
  const { Plot, Genre, Actors } = movie;
  return (
    <>
      <div className='genre'>{Genre}</div>
      <div className='plot'>{Plot}</div>
      <div className='actors'>{Actors}</div>
    </>
  );
}
