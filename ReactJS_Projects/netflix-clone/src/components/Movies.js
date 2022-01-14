import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import instance from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Movies({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    const[trailerUrl, setTrailerUrl] = useState("");
    // This snippet runs based on a specific condition / variable
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            // console.log(request);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [] is empty, run once when <Movies/> loads and don't run again.
    }, [fetchUrl]);
    console.log(movies);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay:1,
        },
    };

    const handleClick = (movie) => {
        console.log(trailerUrl);
        if(trailerUrl){
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                // https://www.youtube.com/watch?v=rt-2cxAiPJk
                setTrailerUrl(urlParams.get('v'));
            }).catch((error => console.log(error)))
        }
    }

    return (
        <Container>
            <h4> {title} </h4>
            
            <Content>
            {movies && movies.map(movie =>(  
                 <img key={movie.id} onClick={()=> handleClick(movie)} src={`${base_url}${movie.poster_path}`} alt={movie.original_title}/>    
            ))
            }
            </Content>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding: 20px;
    iframe{
        margin-bottom:15px;
    }
`

const Content = styled.div`
    padding: 20px;
    display: flex;
    overflow-y:hidden;
    overflow-x:scroll;
  
    &::-webkit-scrollbar{
        display:none;
    }

    img{
        width:100%;
        height:100%;
        max-height: 200px;
        object-fit: contain;
        margin-right: 15px;
        transition: transform 450ms;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
        &:hover{
            transform: scale(1.05);
            opacity: 1;
        }
    }

`