import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import requests from '../requests';
// import db from '../firebase'

function Home() {

    // useEffect(() => {
    //     db.collection("movies").onSnapShot((snapshot) => {
    //         // console.log(snapshot);
    //         let tempMovies = snapshot.docs.map((doc) => {
    //             console.log(doc.data());
    //             return {id:doc.id, ...doc.data()}
    //         })
    //     })
    // }, [])

    return (
        <Container>
           <ImgSlider/>
           <Viewers/>
           {/* <Movies/> */}
           <Movies title= "Reccomended For You" fetchUrl={requests.fetchRecommended} />
           <Movies title= "Disney Trending" fetchUrl={requests.fetchDisneyTrending} />
           <Movies title= "Disney Movie Originals" fetchUrl={requests.fetchDisneyMovieOriginals} />
           <Movies title= "Disney TV Originals" fetchUrl={requests.fetchDisneyTvOriginals} />
           
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

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

