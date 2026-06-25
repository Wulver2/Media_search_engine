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
    
    const addFavorite = (movie) => {
        update = [...favorites, movie]
        setFavorites(update)
    }

    const removeFavorite = (movieID) => {
        const element = favorites[movieID]
        if (movieID > 0) {
            setFavorites(favorites.filter(movie =>
                movie !== element
            ))
        }
    }

    const isFavorite = (movieID) => {
        return favorites.some(movie => movie.id == movieID)
    }
    
    return <MovieContext.MediaProvider>
        {children}
    </MovieContext.MediaProvider>
}