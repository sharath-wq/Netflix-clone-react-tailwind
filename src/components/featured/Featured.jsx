import { FaPlay, FaInfoCircle } from "react-icons/fa";
import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { banner_url, baseImage } from "../../constents";
import { generateRandomIndex } from "../../utils/helpler";

const Featured = () => {
    const [banner, setBanner] = useState({});

    const { backdrop_path, original_title, overview, title } = banner;

    useEffect(() => {
        axios.get(banner_url).then((response) => setBanner(response.data.results[generateRandomIndex()]));
    }, []);

    return (
        <div className="h-[90vh] relative">
            <img className="w-full h-full object-cover" src={baseImage + backdrop_path} alt="" />
            <div className="w-1/3 absolute left-10 bottom-40 sm:left-28 sm:bottom-60 flex flex-col">
                {/* Info */}
                <h1 className="sm:text-6xl text-4xl text-white font-bold">{title && original_title}</h1>
                <span className="my-5 mx-0 sm:flex hidden text-base text-white font-medium">{overview}</span>
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
