import React, {useCallback, useEffect, useState} from 'react';
import { movieApi } from "./movieApi";
import uniqBy from "lodash.uniqby";

const useScrollAxios = () => {
    let [state, setState] = useState({
        movie:[],
        loading:true
    });
    let [page, setPage] = useState(1);
    let [isBottom, setIsBottom] = useState(false);

    useEffect(()=>{
        movieApi.pageList(page).then(data => {
            setState({
                loading:false, 
                movie: uniqBy(state.movie.concat(data.data.data.movies), "id")
            });
            page++;
            setPage(page);
            console.log("infiniteScroll-returnIsBottom");
            setIsBottom(false);
        })}, [isBottom]);
    
    const infiniteScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if(scrollTop + clientHeight >= scrollHeight-10) {
            console.log("infiniteScroll-setIsBottom");
            setIsBottom(true);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", infiniteScroll);
        return () => {
            window.removeEventListener("scroll", infiniteScroll);
        }
    }, []);

    return {...state, page};
}

export default useScrollAxios;
