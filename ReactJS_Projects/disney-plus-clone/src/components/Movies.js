import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import instance from '../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Movies({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    
    // This snippet runs based on a specific condition / variable
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            // "https://api.themoviedb.org/3//trending/movie/week?api_key=${API_KEY}&language=enUS",
            // console.log(request);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [] is empty, run once when <Movies/> loads and don't run again.
    }, [fetchUrl]);
    console.log(movies);
    return (
        <Container>
            <h4> {title} </h4>
            
            <Content>
            {movies.map(movie =>(
                <img key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.original_title}/>
            ))}
                {/* <Wrap>
                    <img src="/images/movies-luca.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/movies-encanto.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/movies-toy-story-3.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/movies-sing-2.jpeg" alt=""/>
                </Wrap> */}
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    
`

const Content = styled.div`
    padding: 20px;
    display: flex;
    overflow-y:hidden;
    overflow-x:scroll;
    ${'' /* display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr)); */}

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
        border-radius:10px;
        border: 3px solid rgba(249, 249, 249, 0.1);
        ${'' /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px; */}
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
        &:hover{
            transform: scale(1.05);
            opacity: 1;
            border-color: rgba(249, 249, 249, 0.8);
            ${'' /* box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px; */}
        }
    }


`
const Wrap = styled.div`
    cursor: pointer;
    border-radius:10px;
    overflow:hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    }
`