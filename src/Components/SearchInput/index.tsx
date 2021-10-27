import { useState } from 'react';
import { Movie } from '../DisplayMovie';

const omdbapiApiUrl = `https://www.omdbapi.com`;
const apiKey = '';

const SearchInput = (props: any) => {
  const { setMovie, setLoading, setError } = props;
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = async () => {
    setLoading(true);
    setError(false);
    try {
      const url = omdbapiApiUrl + `/?apikey=` + apiKey + `&t=` + searchInput;
      const response = await fetch(url);
      const result = await response.json() as Movie;
      if (!result.Title) {
        setError(true);
      }
      setMovie(result);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <input placeholder='Title' value={searchInput} onChange={e => setSearchInput(e.currentTarget.value)} />
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
}

export default SearchInput;
