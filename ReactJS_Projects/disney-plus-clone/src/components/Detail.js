import React from 'react'
import styled from 'styled-components'
function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/detail-luca-background.jpg" alt="" />
            </Background>
            <MovieTitle>
                <img src="/images/detail-luca-logo.png" alt=""/>
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
            2021 &#x25CF; 1h 35m &#x25CF; Family, Kids, Animation
            </SubTitle>
            <Description>
                Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface.
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
    }
    
`

const MovieTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    
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