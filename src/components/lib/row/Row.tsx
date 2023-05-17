import { useEffect, useState } from "react";
import axiosInstance from "../../../config/axios";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

export const Row = ({ title, fetchUrl, isLargeRow = false }: RowProps) => {
  const [movies, setMovies] = useState<any>([]);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  //use a useEffect hook to fetch data from tmdb api
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    };
    fetchData();
  }, [fetchUrl]);

  console.log("movies", movies);
  return (
    <section
      className="
        text-white
        mt-10
        px-4
    "
    >
      <h2>{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll p-4">
        {movies.map(
          (movie: any) =>

                <img
                key={movie.id}
                className={`object-contain h-[100px] w-[200px] mr-4 rounded-md transition-[all 0.3s] hover:scale-105 cursor-pointer ${
                  isLargeRow && "h-[250px] w-[350px]"
                } `}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        }
      </div>
    </section>
  );
};
