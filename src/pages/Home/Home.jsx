import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Lists from "../../components/lists/lists";
import { genres } from "../../constents";

const Home = () => {
    return (
        <div className="main-color overflow-hidden">
            <Navbar />
            <Featured />
            {genres.map((genre) => (
                <Lists key={genre.title} title={genre.title} link={genre.link} />
            ))}
        </div>
    );
};

export default Home;
