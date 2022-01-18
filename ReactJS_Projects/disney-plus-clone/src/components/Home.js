import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import {useDispatch, useSelector} from "react-redux"
import {setMovies} from "../features/movie/movieSlice"
import {selectUserName} from "../features/user/userSlice"

function Home() {

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    // Get movies from firebase
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            // console.log(snapshot);
        //  let tempMovies = snapshot.docs.map((doc) => {
                // console.log(doc.data());
                // return {id:doc.id, ...doc.data()
                // }

              snapshot.docs.map((doc) => {
                // console.log(doc.data().type);
                switch(doc.data().type){
                    case "recommend":
                        recommends = [...recommends, {id:doc.id, ...doc.data()}]
                        break;
                    case "new":
                        newDisneys = [...newDisneys, {id:doc.id, ...doc.data()}]
                        break;
                    case "original":
                        originals = [...originals, {id:doc.id, ...doc.data()}]
                        break;
                    case "trending":
                        trending = [...trending, {id:doc.id, ...doc.data()}]
                        break;
                    default: 
                    break;
                }
            })
        // console.log(tempMovies);
        // dispatch(setMovies(tempMovies)); // grab, save and dispatch movies into the store
        dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
        })); 
        });
    }, [userName])

    return (
        <Container>
           <ImgSlider/>
           <Viewers/>
           <Movies />
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

