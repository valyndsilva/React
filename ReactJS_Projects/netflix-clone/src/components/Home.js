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
           <Movies title= "Trending Now" fetchUrl={requests.fetchDisneyTrending} />
           <Movies title= "Action Movies" fetchUrl={requests.fetchDisneyAction} />
           <Movies title= "Romance Movies" fetchUrl={requests.fetchDisneyRomance} />
           <Movies title= "Comedy Movies" fetchUrl={requests.fetchDisneyComedy} />
           <Movies title= "Documentaries" fetchUrl={requests.fetchDisneyDocumentaries} />
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
