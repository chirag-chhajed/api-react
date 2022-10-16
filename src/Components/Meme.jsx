import React from "react";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <div className="bg-main w-100 h-auto rounded-b-md px-4 sm:w-80">
            <div className="py-8 flex flex-col gap-7 ">
                <div className="flex align-middle gap-2 justify-center sm:flex-col">
                    <input  
                        type="text" 
                        placeholder="Top Text"
                        name="topText"
                        className="pl-3 h-12 rounded-md"
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        className="pl-3 h-12 rounded-md"
                        value={meme.bottomText}
                        onChange={handleChange} 
                     />
                </div>
                <button 
                    className="w-full bg-button text-buttonColor  h-16 rounded-xl font-bold text-xl"
                    onClick={getMemeImage}
                    >
                    Get a new meme Image
                </button>
                <div className="relative" >
                <img 
                    className="px-2 w-full  object-cover mt-6 "
                    src={meme.randomImage} 
                    alt="meme-image" />
                <h2 className="absolute w-11/12 text-center left-1/2 top-0 my-6 px-1 -translate-x-1/2 font-extrabold text-2xl text-white ">
                    {meme.topText}
                </h2>
                <h2 className="absolute w-11/12 text-center left-1/2 bottom-0 mb-2  px-1 -translate-x-1/2 font-extrabold text-2xl text-white ">
                    {meme.bottomText}
                </h2>
            </div>
            </div>
        </div>
    )
}