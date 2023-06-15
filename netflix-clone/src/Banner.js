// import React, { useEffect, useState } from 'react';
// import axios from './axios';
// import requests from './requests';
// import './Banner.css';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';

// function Banner() {
//   const [movie, setMovie] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(requests.fetchNetflixOriginals);
//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length)
//         ]
//       );
//     }
//     fetchData();
//   }, []);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + '...' : str;
//   }

//   const opts = {
//     height: '390',
//     width: '100%',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

  // const handleClick = () => {
  //   if (trailerUrl) {
  //     setTrailerUrl('');
  //   } else {
  //     movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get('v'));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: 'cover',
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         backgroundPosition: 'center center',
//       }}
//     >
//       <div className="Banner-Trailer">
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button" onClick={handleClick}>
//             Play
//           </button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">
//           {truncate(movie?.overview, 150)}
//         </h1>
//       </div>
//       <div className="banner--fadeBottom" />
//     </header>
//   );
// }

// export default Banner;


import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="Banner-Trailer">
        {trailerUrl ? (
          <>
            <YouTube videoId={trailerUrl} opts={opts} />
            <button className="banner_button play-button" onClick={handleClick}>
              Close Trailer
            </button>
          </>
        ) : (
          <div className="banner_container">
            <div className="banner_contents">
              <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="banner_buttons">
                <button className='banner_button' onClick={handleClick}>Play</button>
                <button className="banner_button">My List</button>
              </div>
              <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
              </h1>
            </div>
            {/* <div className="banner--fadeBottom" /> */}
          </div>
        )}
      </div>
    </header>
  );
}

export default Banner;
