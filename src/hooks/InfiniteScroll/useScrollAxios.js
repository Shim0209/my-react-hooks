import React, {useCallback, useEffect, useState} from 'react';
import defaultAxios from 'axios';

const api = defaultAxios.create({
    baseURL: "https://yts.mx/api/v2/"
})
const movieApi = {
    movieList: (pages, limits) => api.get("list_movies.json", {
        params: {
            page: pages,
            limit: limits,
        }
    })
}

const useScrollAxios = () => {
    let [state, setState] = useState({
        movie:[],
        loading:true
    });
    let [page, setPage] = useState(1);
    let [isBottom, setIsBottom] = useState(false);

    useEffect(()=>{
        movieApi.movieList(page, 50).then(data => {
            setState({
                loading:false, 
                movie: state.movie.concat(data.data.data.movies)
            });
            page++;
            setPage(page);
            setIsBottom(false);
        })}, [isBottom]);
    
    const infiniteScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if(scrollTop + clientHeight >= scrollHeight-20) {
            setIsBottom(true);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", infiniteScroll);
        return () => {
            window.removeEventListener("scroll", infiniteScroll);
        }
    }, []);

    return {...state};
}

export default useScrollAxios;
