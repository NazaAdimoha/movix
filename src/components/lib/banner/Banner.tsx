import { useEffect, useState } from "react";
import { BannerContent } from "./BannerContent";
import { Request } from "../../../config/Request";
import axiosInstance from "../../../config/axios";

export const Banner = () => {
    const [movie, setMovie] = useState<any>([]);

    //use a useEffect hook to fetch data from tmdb api
    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosInstance.get(
                Request.fetchNetflixOriginals        
            );
            setMovie(
                res.data.results[
                    Math.floor(Math.random() * res.data.results.length - 1)
                ]
            );
            return res;
        };
        fetchData();
    }, []);

    console.log('movie', movie);
  return (
    <header className=" text-white h-[448px] object-contain" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>
       <BannerContent 
            movie={movie}
       />
        <div className="h-[7.4rem] w-full bg-gradient-to-t from-[#000000] to-transparent bottom-0 z-0" />
    </header>
  );
};
