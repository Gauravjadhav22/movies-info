const API_KEY = process.env.API_KEY;
import Footer from "../components/Footer";
import Image from "next/image";
import Header from "../components/Header";
import axios from "axios";
import Nav from "../components/Nav";
const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <Header />
      <Nav />
    <div className="flex justify-center">
      <div className=" my-4 mx-10">
        <Image className="my-2" src={movie.Poster} height={550} width={550} alt="random image"/>
        <div className="flex justify-between">
          <div className="text-clip">
            <h2>Title: {movie.Title}</h2>
            <h2>Year: {movie.Year}</h2>
            <h2>Release: {movie.Released}</h2>
            <h2>Metascore: {movie.Metascore}</h2>
            <h2>totalSeasons: {movie.totalSeasons || "n/a"}</h2>
          </div>
          <div className="truncate">
            <h2>Director: {movie.Director}</h2>
            <h2>Country: {movie.Country}</h2>
            <h2>Genre: {movie.Genre}</h2>
            <h2>Writer: {movie.Writer}</h2>
            <h2>Runtime: {movie.Runtime}</h2>
            <h2 className="text-red">imdbRating: {movie.imdbRating}</h2>
            <h2 className="text-red">imdbVotes: {movie.imdbVotes}</h2>

          </div>
       

      </div>
          <div className="truncate">
            <h2 className="text-xl">Ratings:</h2>
            <h2 className="text-red">1: {movie.Ratings[0].Source} {movie.Ratings[0].Value}</h2>
          
          </div>
          <p className="text-2xl">
             Actors:  {movie.Actors}
          </p>
          <p className="text-xl">
             Awards:  {movie.Awards}
          </p>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Movie;

export const getServerSideProps = async (context) => {
  const query = context.query.i || "vikings";
  console.log(context.query);

  const request = await axios.get(
    `https://www.omdbapi.com/?i=${query}&apikey=${API_KEY}`
  );
  console.log("here is the id request");

  console.log(request.data, "dflsdf");
  return {
    props: {
      movie: request.data,
    },
  };
};
