import React from "react";
import jumboData from "../fixtures/jumbotron";
import { Jumbotron } from "../components/";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron
          key={item.id}
          direction={item.direction}
          className={item.className}
        >
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.AnimationContainer className="jumbotron_animationContainer">
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
              ></Jumbotron.Image>
              <Jumbotron.Animation className="jumbotron_animation">
                {item.animationVideo && (
                  <Jumbotron.AnimationVideo
                    className="jumbotron_animationVideo"
                    autoplay
                    playsinline
                    muted
                    loop
                  >
                    <source src={item.animationVideo} type="video/mp4" />
                  </Jumbotron.AnimationVideo>
                )}
                {item.animationImage && (
                  <Jumbotron.AnimationImage className="jumbotron_animationImage">
                    <img src={item.animationImage} alt={item.alt} />
                  </Jumbotron.AnimationImage>
                )}
                {item.animationText1 && (
                  <Jumbotron.AnimationText className="jumbotron_animationText">
                    <div className="text-0">{item.animationText1}</div>
                    <div className="text-1">{item.animationText2}</div>
                  </Jumbotron.AnimationText>
                )}
              </Jumbotron.Animation>
            </Jumbotron.AnimationContainer>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
