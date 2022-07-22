import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const Movies = ({ movies }) => {
  const router = useRouter();
  console.log(movies);
  const { Search } = movies;

  return (
    <div className="flex justify-center ">
      <div className="my-4 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-between items-center bg-content-col ">
        {Search ? (
          Object.entries(Search).map(
            ([key, { Title, Poster, imdbID, Year, Type }]) => {
              return (
                <div
                key={key}
                  onClick={(e) => router.push(`/movie/?i=${imdbID}`)}
                  className="cursor-pointer w-56 my-4 mx-10 hover:scale-110 transition"
                  
                >
                  <Image
                    className="my-2"
                    src={Poster}
                    height={250}
                    width={250}
                  />
                  <div className="text-clip">
                    <h2>Title: {Title}</h2>
                    <h2>year: {Year}</h2>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <div>
            <h2>oops.. nothing found<br/>check the spelling!..</h2>
            <Image
              src={
                "https://res.cloudinary.com/dwmm1r1ph/image/upload/v1647081430/jobs_pic/oqolpxa9gsa5v86x6xvj.jpg"
              }
              height={250}
              width={350}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
