// import React, { useEffect, useState } from 'react'
// import axios from './axios';
// import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from 'movie-trailer';

// const base_url = "https://image.tmdb.org/t/p/original/";

// function Row({title, fetchUrl,isLargeRow }) {

//     const[movies, setMovies]= useState([]);
//     const [trailerUrl, setTrailerUrl] = useState("");

//     useEffect(()=> {
//         async function fetchData(){
//             const request = await axios.get(fetchUrl);

//             setMovies(request.data.results);
//             return request;
//         }
//         fetchData();
//     },[fetchUrl]);

//     console.table(movies);

//     const opts= {
//         height: "390",
//         width: "100%",
//         playerVars: {
//             autoplay:1,
//         }
//     };

//     const handleClick = (movie) =>{
//         if(trailerUrl){
//             setTrailerUrl('');
//         }
//         else{
//             movieTrailer(movie?.name || "").then(url => {
//                 const urlParams=new URLSearchParams(new URL(url).search);
//                 setTrailerUrl(urlParams.get("v"));
//             }).catch(error => console.log(error))
//         }
//     }

//   return (
//     <div className='row'>
//         <h2>{title}</h2>

//         <div className='row_posters'>
//             {movies && movies.map(movie => (
//                 <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} onClick = {()=>handleClick(movie)} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                
//             ))}
//         </div>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </div>
//   )
// }

// export default Row

// Ratings Done

// import React, { useEffect, useState } from 'react';
// import axios from './axios';
// import './Row.css';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';

// const base_url = 'https://image.tmdb.org/t/p/original/';
// const API_KEY = '5f322500b9a0871f757b6cf03afd7fc7'; // Replace with your TMDb API key

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState('');
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   useEffect(() => {
//     async function fetchMovieRatings(movieId) {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
//         );
//         setRatings((prevRatings) => ({
//           ...prevRatings,
//           [movieId]: response.data.vote_average,
//         }));
//       } catch (error) {
//         console.error(error);
//         setRatings((prevRatings) => ({
//           ...prevRatings,
//           [movieId]: null,
//         }));
//       }
//     }

//     movies.forEach((movie) => {
//       fetchMovieRatings(movie.id);
//     });
//   }, [movies]);

//   const opts = {
//     height: '390',
//     width: '100%',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl('');
//     } else {
//       movieTrailer(movie?.name || '')
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get('v'));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (
//     <div className="row">
//       <h2>{title}</h2>

//       <div className="row_posters">
//         {movies &&
//           movies.map((movie) => (
//             <div key={movie.id} onClick={() => handleClick(movie)}>
//               <img
//                 className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
//                 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//                 alt={movie.name}
//               />
//               <div className="movie_info">
//                 {/* <p className="movie_name">{movie.name}</p> */}
//                 <p className="movie_rating">
//                   Rating: {ratings[movie.id] || 'N/A'}
//                 </p>
//               </div>
//             </div>
//           ))}
//       </div>
//       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </div>
//   );
// }

// export default Row;

// Before MOOD 

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';
const API_KEY = '5f322500b9a0871f757b6cf03afd7fc7'; // Replace with your TMDb API key

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    async function fetchMovieRatings(movieId) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setRatings((prevRatings) => ({
          ...prevRatings,
          [movieId]: response.data.vote_average,
        }));
      } catch (error) {
        console.error(error);
        setRatings((prevRatings) => ({
          ...prevRatings,
          [movieId]: null,
        }));
      }
    }

    movies.forEach((movie) => {
      fetchMovieRatings(movie.id);
    });
  }, [movies]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '', { tmdbId: movie.id, apiKey: API_KEY })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

       {/* <div className="row_posters">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} onClick={() => handleClick(movie)}>
              <img
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
              <div className="movie_info">
                <p className="movie_rating">
                  Rating: {ratings[movie.id] || 'N/A'}
                </p>
              </div>
            </div>
          ))}
      </div>  */}

      <div className="row_posters">
  {movies &&
    movies.map((movie) => (
      <div key={movie.id} onClick={() => handleClick(movie)}>
        <img
          className={`row_poster row_posterLarge`}
          src={`${base_url}${movie.poster_path}`}
          alt={movie.name}
        />
        <div className="movie_info">
          <p className="movie_rating">
            Rating: {ratings[movie.id] || 'N/A'}
          </p>
        </div>
      </div>
    ))}
</div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

