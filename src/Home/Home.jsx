import Navbar from "../components/Navbar/Navbar";
import Featured from "../components/featured/Featured";
import Lists from "../components/lists/lists";

const Home = () => {
    return (
        <div className="main-color overflow-hidden">
            <Navbar />
            <Featured />
            <Lists />
            <Lists />
            <Lists />
        </div>
    );
};

export default Home;
