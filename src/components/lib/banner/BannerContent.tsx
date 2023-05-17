
interface BannerContentProps {
  movie: {
    name: string;
    overview: string;
    backdrop_path: string;
    title: string;
    original_name: string;
  };
}

export const BannerContent = ({
  movie,
}: BannerContentProps) => {

    //truncate rext
    const truncate = (str: string, n: number) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    };
  return (
    <div className="ml-[30px] pt-[140px]">
      <h1 className="text-4xl font-bold pb-[0.3rem]">
        {
          movie?.title || movie?.name || movie?.original_name
        }
      </h1>
      <div className="flex mr-[0.4rem] mb-4">
        <button className="bg-[#060101f1] border-none text-white px-[2rem] py-[0.5rem] rounded-md cursor-pointer mr-4 hover:text-[#000] hover:bg-[#fff] transition-[all 0.3s]">
          Play
        </button>
        <button className="bg-[#060101f1] border-none text-white px-[2rem] py-[0.5rem] rounded-md cursor-pointer hover:text-[#000] hover:bg-[#fff] transition-[all 0.3s]">
          My List
        </button>
      </div>
      <p className="text-sm font-bold mt-4 w-[300x]" >
        {
            truncate(`
            ${movie?.overview}
            `, 150)
        }

      </p>
    </div>
  );
};
