import React from 'react'
import styled from 'styled-components';
import requests from '../requests';
import Movies from './Movies';
import Jumbotron from './Jumbotron'

function Home() {

    return (
        <Container>
           <Jumbotron/>
           <Movies title= "Reccomended For You" fetchUrl={requests.fetchRecommended} />
           <Movies title= "Trending Now" fetchUrl={requests.fetchTrending} />
           <Movies title= "Netflix Movies Originals" fetchUrl={requests.fetchNetflixMovieOriginals} />
           <Movies title= "Netflix TV Originals" fetchUrl={requests.fetchNetflixTvOriginals} />
           <Movies title= "Action Movies" fetchUrl={requests.fetchAction} />
           <Movies title= "Comedy Movies" fetchUrl={requests.fetchComedy} />
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);
    position:relative;
   

   &:before{
       background:url("/images/home-background.png") center center / cover no-repeat fixed;
       content:"";
       position:absolute;
       top:0;
       left:0;
       right:0;
       bottom:0;
       z-index:-1;
   }
   
`
