import { Nav } from "../../components/lib/Nav";
import { Banner } from "../../components/lib/banner";
import { Row } from "../../components/lib/row";
import { Request } from "../../config/Request";


export const HomeScreen = () => {
    return (
        <div>
            {/* Nav */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={Request.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title="Trending Now"
                fetchUrl={Request.fetchTrending}
                isLargeRow
            />
            <Row  
                title="Top Rated"
                fetchUrl={Request.fetchTopRated}
                isLargeRow
            />
            <Row 
                title="Action Movies"
                fetchUrl={Request.fetchActionMovies}
                isLargeRow
            />
            <Row 
                title="Comedy Movies"
                fetchUrl={Request.fetchComedyMovies}
                isLargeRow
            />

            <Row 
                title="Horror Movies"
                fetchUrl={Request.fetchHorrorMovies}
                isLargeRow
            />

            <Row 
                title="Romance Movies"
                fetchUrl={Request.fetchRomanceMovies}
                isLargeRow
            />

            <Row 
                title="Documentaries"
                fetchUrl={Request.fetchDocumentaries}
                isLargeRow
            />

            

        </div>
    );
}