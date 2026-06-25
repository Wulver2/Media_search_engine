import { createContext, useState, useContext, useEffect } from "react";

const MediaContext = createContext();

export const useMediaContext = () => useContext(MediaProvider);

export const MediaProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    
    return <MovieContext.MediaProvider>
        {children}
    </MovieContext.MediaProvider>
}