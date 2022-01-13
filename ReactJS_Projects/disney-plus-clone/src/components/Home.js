import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import requests from '../requests';
// import db from '../firebase'
// import {useDispatch} from "react-redux"
// import {setMovies} from "../features/movie/movieSlice"

function Home() {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     db.collection("movies").onSnapShot((snapshot) => {
    //         // console.log(snapshot);
    //         let tempMovies = snapshot.docs.map((doc) => {
    //             console.log(doc.data());
    //             return {id:doc.id, ...doc.data()}
    //         })
        // console.log(tempMovies);
        // dispatch(setMovies(tempMovies));
    //     })
    // }, [])

    return (
        <Container>
           <ImgSlider/>
           <Viewers/>
           {/* <Movies/> */}
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

