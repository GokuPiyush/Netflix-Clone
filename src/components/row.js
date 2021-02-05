import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../css/row.css';

export default function Row({title, fetchUrl, isLargeRow=false}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) && (
            <img 
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`} 
              key={movie.id} 
              src={`${BASE_URL}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
              alt={movie.name}
            />
          )
        ))}
      </div>
    </div>
  );
}