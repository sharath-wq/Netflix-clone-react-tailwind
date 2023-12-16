import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { baseImage } from "../../constents";
import { useState, useEffect } from "react";
import CardShimmer from "../shimmer/CardShimmer";

const ListItem = ({ backdrop_path }) => {
    const [isLoaded, setIsLoaded] = useState(false);

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
                >
                    <img className="w-full h-full object-cover group-hover:h-36" src={baseImage + backdrop_path} alt="" />
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
