import { useState } from 'react';
import { Movie } from '../DisplayMovie';

const omdbapiApiUrl = `https://www.omdbapi.com`;
const apiKey = '';

export const Search = (props: any) => {
  const { setMovie } = props;
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = async () => {
    try {
      const url = omdbapiApiUrl + `/?apikey=` + apiKey + `&t=` + searchInput;
      const response = await fetch(url);
      const result = await response.json() as Movie;
      console.log(result);
      setMovie(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input placeholder='Title' value={searchInput} onChange={e => setSearchInput(e.currentTarget.value)} />
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
}
