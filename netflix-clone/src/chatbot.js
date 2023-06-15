import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [mood, setMood] = useState('');
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from API
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5f322500b9a0871f757b6cf03afd7fc7');
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const sortMovies = () => {
    // Perform sorting logic based on the user's mood
    let sortedMovies = [];

    // Example sorting based on mood
    if (mood === 'happy') {
      sortedMovies = [...movies].sort((a, b) => a.vote_average - b.vote_average);
    } else if (mood === 'sad') {
      sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
    } else {
      sortedMovies = [...movies];
    }

    setSortedMovies(sortedMovies);
  };

  return (
    <div>
      <h3>How are you feeling today?</h3>
      <input type="text" value={mood} onChange={handleMoodChange} />

      <button onClick={sortMovies}>Sort Movies</button>

      <div className="row_posters">
        {sortedMovies.map((movie) => (
          <div key={movie.id}>
            <img
              className="row_poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatbot;
