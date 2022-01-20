import React, { useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import {setMovies} from "../features/movie/movieSlice" // import the action setMovies
import {useDispatch} from "react-redux" // import useDispatch to dispatch the action


function Home() {

    const dispatch = useDispatch();
    // Get movies from firebase
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            // console.log(snapshot);
        //  let tempMovies = snapshot.docs.map((doc) => {
        //         // console.log(doc.data());
        //         return {id:doc.id, ...doc.data()}
        //     })
        // console.log("Movies in Home.js", tempMovies);
        // dispatch(setMovies(tempMovies)); // grabs, dispatches and saves movies into the store
       
        let movies = []
        let recommends = [];
        let newIn = [];
        let originals = [];
        let trending = [];

        let typeMovies = snapshot.docs.map((doc) => {
            // console.log(doc.data().type);
                switch (doc.data().type) {
                  
                    case 'recommend':
                      return recommends = [...recommends, { id: doc.id, ...doc.data() }];
          
                    case 'new':
                      return newIn = [...newIn, { id: doc.id, ...doc.data() }];
          
                    case 'original':
                      return originals = [...originals, { id: doc.id, ...doc.data() }];
          
                    case 'trending':
                      return trending = [...trending, { id: doc.id, ...doc.data() }];

                      case 'movies':
                      return movies = [...movies, {id:doc.id, ...doc.data()}]

                      default:
                          return ([{id:doc.id, ...doc.data()}])
                
              
            }
        })
        console.log("Recommended Movies in Home.js", typeMovies);
        dispatch(setMovies({
            recommend: recommends,
            newIn: newIn,
            original: originals,
            trending: trending,
            movies: movies
        })); // grabs, dispatches and saves movies into the store
        
        });
    }, [dispatch])

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
    ${'' /* min-height: calc(100vh - 70px); */}
    min-height: 100vh;
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

