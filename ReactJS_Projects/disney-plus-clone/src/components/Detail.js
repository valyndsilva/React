import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import instance from '../axios'
import requests from '../requests'

const base_url = "https://image.tmdb.org/t/p/original/";

function Detail() {
    
    const [movie, setMovie] = useState([]);
    
    // This snippet runs based on a specific condition / variable
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchRecommended);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]);
            return request;
        }
        fetchData();
        // if [] is empty, run once when <Movies/> loads and don't run again.
    }, []);
    console.log(movie);

    function truncate(str,n){
        return str?.length > n?str.substr(0, n-1)+"...":str;
    }

    return (
        <Container>
            <Background>
            <img key={movie.id} src={`${base_url}${movie?.poster_path}`} alt={movie.original_title} />
                {/* <img src="/images/detail-luca-background.jpg" alt="" /> */}

            </Background>
            <MovieTitle>
            <h1> {movie?.title || movie?.original_title} </h1>
                {/* <img src="/images/detail-luca-logo.png" alt=""/> */}
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
            {(movie?.release_date)} &#x25CF; 1h 35m &#x25CF; Family, Kids, Animation
            {/* {(movie?.release_date).split('', 4)} &#x25CF; 1h 35m &#x25CF; Family, Kids, Animation */}
            </SubTitle>
            <Description>
            {truncate(movie?.overview, 200)}
                {/* Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface. */}
            </Description>
               
            
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
        width:100%;
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