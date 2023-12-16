import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { baseImage, trialer_base_url, API_KEY } from "../../constents";
import { useState, useEffect } from "react";
import CardShimmer from "../shimmer/CardShimmer";
import axios from "axios";

const ListItem = ({ backdrop_path, id }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [trailerLink, setTrailerLink] = useState("");

    useEffect(() => {
        axios.get(`${trialer_base_url}${id}/videos?api_key=${API_KEY}`).then((response) => {
            if (response.data.results.length > 0) {
                const trailer = response.data.results.find((video) => video.type === "Trailer");

                if (trailer) {
                    const trailerKey = trailer.key;
                    const youtubeUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0`;
                    setTrailerLink(youtubeUrl);
                } else {
                    setTrailerLink("No Trailer Found");
                }
            } else {
                setTrailerLink("No Videos available");
            }
        });
    }, [id]);

    useEffect(() => {
        const image = new Image();
        image.src = baseImage + backdrop_path;
        image.onload = () => {
            setIsLoaded(true);
        };
    }, [backdrop_path]);

    return (
        <>
            {isLoaded ? (
                <div
                    className={`w-56 group h-36 main-color overflow-hidden ml-1.5 cursor-pointer text-white hover:shadow-3xl hover:scale-150 hover:bg-[#252525] transition-all ease-in-out duration-500 rounded-lg`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {!isHovered && (
                        <img
                            className="w-full h-full object-cover group-hover:h-36"
                            src={baseImage + backdrop_path}
                            alt=""
                        />
                    )}
                    {isHovered && trailerLink && (
                        <iframe
                            className="w-full h-full absolute top-0 left-0"
                            src={trailerLink}
                            allow="autoplay; encrypted-media"
                            title="Trailer"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            ) : (
                <CardShimmer />
            )}
        </>
    );
};

export default ListItem;

{
    /* <div className="hidden group-hover:flex w-56 h-36">
                <div className="flex">
                    <FaPlay />
                    <IoMdAdd />
                    <AiOutlineDislike />
                    <AiOutlineLike />
                </div>
                <div>
                    <span>1 hour 14 minuts</span>
                    <span>+16</span>
                    <span>1999</span>
                </div>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus quas hic a, corrupti itaque
                    accusantium delectus quasi quis dolores, maiores temporibus deleniti voluptatem suscipit doloremque vero
                    sit quia illum!
                </div>
                <div>Action</div>
            </div> */
}
