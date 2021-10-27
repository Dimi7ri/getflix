export interface Movie {
  Title?: string;
  Poster?: string;
  Year?: string;
}

export const DisplayMovie = (movie: Movie) => {
  const { Title, Poster, Year } = movie;

  if (!movie.Title) return (<></>);
  return (
    <div>
      <div>{Title} </div>
      <div>{Year}</div>
      <img src={Poster} alt={Title} />
    </div>
  );
};
