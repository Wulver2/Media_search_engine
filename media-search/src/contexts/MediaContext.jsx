import { createContext, useState, useContext, useEffect } from "react";

const MediaContext = createContext();

export const useMediaContext = () => useContext(MediaContext);

export const MediaProvider = ({ children }) => {
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
        const update = [...favorites, movie]
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

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <MediaContext.Provider value = {value}>
        {children}
    </MediaContext.Provider>
}