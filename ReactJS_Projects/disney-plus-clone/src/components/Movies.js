import React from 'react';
import styled from 'styled-components';
import {selectMovies} from "../features/movies/movieSlice"
import {useSelector} from "react-redux"
// import { Link } from 'react-router-dom';
function Movies() {
    const movies = useSelector(selectMovies); // grab movies from the store in Home.js
    console.log("This is movies", movies);

    return (
        <Container>
            <h4>Recommended For You</h4>
            
            <Content>
                  <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                  </Wrap>
                  <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                  </Wrap>
                  <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                  </Wrap>
                  <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
                  </Wrap>
            </Content>


        </Container>
    )
}

export default Movies

const Container = styled.div`
    
    iframe{
        margin-bottom:15px;
    }
`

const Content = styled.div`
    padding: 20px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

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
        ${'' /* box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px; */}

    }
`