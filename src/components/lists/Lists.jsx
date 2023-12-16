import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const Lists = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if (direction === "right" && slideNumber < 3) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className="w-full mt-3 ">
            <span className="text-white text-xl font-medium ml-12">List Title </span>
            <div className="relative">
                <IoIosArrowBack
                    className={`w-12 h-full bg-gray-800 bg-opacity-50 text-white absolute left-0 z-10 top-0 bottom-0 m-auto cursor-pointer ${
                        !isMoved && "hidden"
                    }`}
                    onClick={() => handleClick("left")}
                />
                <div ref={listRef} className="ml-12 flex mt-3 translate-x-0 w-max transition-all duration-1000 ease">
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>

                <IoIosArrowForward
                    className="w-12 h-full bg-gray-800 bg-opacity-50 text-white absolute right-0 z-10 top-0 bottom-0 m-auto cursor-pointer"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default Lists;
