import { FaPlay, FaInfoCircle } from "react-icons/fa";
import Button from "./Button";

const Featured = () => {
    return (
        <div className="h-[90vh] relative">
            <img
                className="w-full h-full object-cover"
                src="https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg"
                alt=""
            />
            <div className="w-1/3 absolute left-28 bottom-60 flex flex-col">
                {/* Info */}
                <h1 className="text-6xl text-white font-bold">Wonka</h1>
                <span className="my-5 mx-0 text-base text-white font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, praesentium.
                </span>
                <div className="flex ">
                    {/* buttons */}
                    <Button style={"bg-white text-[main-color] hover:bg-[#d2d9d8]"} icon={<FaPlay />} text={"Play"} />
                    <Button style={"bg-[#6d6d6db3] text-white hover:opacity-[.8]"} icon={<FaInfoCircle />} text={"Info"} />
                </div>
            </div>
        </div>
    );
};

export default Featured;
