import { IoIosArrowBack } from "react-icons/io";

const Watch = () => {
    return (
        <div className="w-screen h-full">
            <div className="flex items-center absolute top-3 left-3 text-white cursor-pointer z-10">
                <IoIosArrowBack />
                Home
            </div>

            <video
                className="w-full h-screen object-cover"
                src="https://video-previews.elements.envatousercontent.com/h264-video-previews/a21919f0-7277-4a52-a39d-7b565f73b0d9/10650710.mp4"
                autoPlay
                progress={true}
                controls
            ></video>
        </div>
    );
};

export default Watch;
