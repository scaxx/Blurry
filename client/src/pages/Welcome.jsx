import { Link } from "react-router-dom";

const Welcome = () => {

    return (

        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-8 items-center text-center bg-zinc-300 opacity-60 p-10 rounded-xl hover:scale-110 transition transition-all duration-500 ease-in-out shadow-2xl">

                <h1 className="uppercase font-extrabold">Blurry</h1>

                <p>
                    <span className="font-bold text-2xl">Hey there! Welcome!</span>
                    <br />
                    This is a little project of mine. A few weeks ago I was building a MERN project.
                    <br />
                    In order to build that project, I needed a few blurry images to use as a background.
                    <br />
                    After a few minutes searching for those images, I realized I could not find any that I actually liked.
                    <br />
                    So I took the challenge of building a simple web that allowed me to create those images!
                    <br />
                    That is how I came up with this idea! Hope you find it useful or have fun with it!
                    <br />
                    <br />
                    <span className="font-bold">If you are curious about how the images turn out, look at the background!</span>
                </p>

                <Link to={"/Drawing"}><button className="bg-violet-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-violet-500 hover:scale-125 transition-all duration-500 ease-in-out">Start</button></Link>

            </div>
        </div>

    );

};

export default Welcome;
