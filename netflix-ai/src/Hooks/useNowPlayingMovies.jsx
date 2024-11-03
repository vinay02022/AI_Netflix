import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../slice/moviesSlice'
import { useEffect } from 'react';
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        console.log("API_CALLING", json.results);

        dispatch(addNowPlayingMovies(json.results))

    }  //API CALL
    useEffect(() => {
        getNowPlayingMovies();

    }, [])
}
export default useNowPlayingMovies;