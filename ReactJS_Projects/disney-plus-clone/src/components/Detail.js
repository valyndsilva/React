import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import db from '../firebase'


function Detail() {
    // Grab id from page
    const {id} = useParams();
    // console.log(id);
    const [movie, setMovie] = useState();

    useEffect(()=>{
        // Grab the movie info from db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                // Save movie data into state
                setMovie(doc.data());
            } else{
                // redirect to homepage

            }
        })
    }, [id])
    console.log("Movie is", movie);

    return (
        <Container>
        {movie && (
            /* Use anonymous tag <></> */
            <> 
            <Background>
            <img src={movie.backgroundImg} alt=""/> 
            </Background>
            <MovieTitle>
            <img src={movie.titleImg} alt=""/> 
            </MovieTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" alt=""/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                  <span>+</span>
                </AddButton>
                <GroupWatch>
                  <img src="./images/group-icon.png" alt="" />
                </GroupWatch>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
            {movie.description}
            </Description>
            </>
        )
        }
    
               
            
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: 0.8;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
        background-position: center center;
    }
    
`

const MovieTitle = styled.div`
    height: 30vh;
    width: 85vw;
    min-height: 150px;
    min-width: 200px;
    margin-top: 60px;
    font-size:26px;

    h1{
        letter-spacing: 1.4;
    }

    img{
        ${'' /* width:100%; */}
        height:100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display:flex;
    align-items: center;
`
const PlayButton = styled.button`
    cursor:pointer;
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right:22px;
    display:flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    text-transform: uppercase;

    &:hover{
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    margin-right: 16px;
    cursor: pointer;
    width: 44px;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    span{
        font-size:30px;
        color:white;
    }
`
const GroupWatch = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`