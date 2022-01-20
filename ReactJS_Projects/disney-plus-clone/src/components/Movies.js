import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {selectMovies, selectRecommend, selectNewIn, selectOriginal, selectTrending} from "../features/movie/movieSlice" // get movies state saved in the db
// import {selectRecommend, selectNewDisney, selectOriginal, selectTrending} from "../features/movie/movieSlice"
import {useSelector} from "react-redux"

function Movies() {
    const movies = useSelector(selectMovies); // grab movies from the store in Home.js
    console.log("Movies data sent from Home.js to Movies.js", movies); // empty initially and grabs data from the store in Home.js
    const moviesRecommend = useSelector(selectRecommend); // grab movies from the store in Home.js
    console.log("Recommended Movies data sent from Home.js to Movies.js", moviesRecommend); 
    const moviesNewIn = useSelector(selectNewIn); // grab movies from the store in Home.js
    console.log("New Movies data sent from Home.js to Movies.js", moviesNewIn); 
    const moviesOriginal = useSelector(selectOriginal); // grab movies from the store in Home.js
    console.log("Original Movies data sent from Home.js to Movies.js", moviesOriginal); 
    const moviesTrending = useSelector(selectTrending); // grab movies from the store in Home.js
    console.log("Trending Movies data sent from Home.js to Movies.js", moviesTrending); 
    return (
        <Container>
            {movies && (
            /* Use anonymous tag <></> */
            <> 
            {/* <h4>Movies For You</h4>
            <Content>
                
                  { movies && movies.map((movie)=>(
                      
                            <Wrap key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title}/>
                                </Link>
                            </Wrap>
                            
                  ))
                  }
            </Content> */}

            <Recommend>
            <h4>Recommended For You</h4>
                <Content>
                    { moviesRecommend && moviesRecommend.map((movie)=>(
                        
                            <Wrap  key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title}/>
                                </Link>
                            </Wrap>
                            
                    ))
                    }
                 </Content>
            </Recommend>

            <NewIn>
            <h4>New In</h4>
                <Content>
                    { moviesNewIn && moviesNewIn.map((movie)=>(
                        
                            <Wrap  key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title}/>
                                </Link>
                            </Wrap>
                            
                    ))
                    }
                 </Content>
            </NewIn>
            <Original>
            <h4>Disney Originals</h4>
                <Content>
                    { moviesOriginal && moviesOriginal.map((movie)=>(
                        
                            <Wrap  key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title}/>
                                </Link>
                            </Wrap>
                            
                    ))
                    }
                 </Content>
            </Original>
            <Trending>
            <h4>Trending Now</h4>
                <Content>
                    { moviesTrending && moviesTrending.map((movie)=>(
                        
                            <Wrap  key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title}/>
                                </Link>
                            </Wrap>
                            
                    ))
                    }
                 </Content>
            </Trending> 
         
            </>
        )
        }
    
        </Container>
    )
}

export default Movies

const Container = styled.div`
  
`

const Content = styled.div`
    padding: 20px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media(max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
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

const Recommend = styled.div`

`
const NewIn = styled.div`

`
const Original = styled.div`

`
const Trending = styled.div`

`