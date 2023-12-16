import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const ListItem = ({ index }) => {
    return (
        <div
            className={`w-56 group h-36 main-color overflow-hidden ml-1.5 cursor-pointer text-white hover:shadow-3xl hover:scale-150 hover:bg-[#252525] transition-all ease-in-out duration-500 rounded-lg`}
        >
            <img
                className="w-full h-full object-cover group-hover:h-36"
                src="https://image.tmdb.org/t/p/original/mc3rG5M9dFVjMfaCFNfbD5gu2pK.jpg"
                alt=""
            />
            {/* <div className="hidden group-hover:flex w-56 h-36">
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
            </div> */}
        </div>
    );
};

export default ListItem;
