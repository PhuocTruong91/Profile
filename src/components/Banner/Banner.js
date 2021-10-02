import React from 'react';
import styled from 'styled-components'
import { Wrap, Inside, Left, Tittle, Content, Video } from './Banner.elements';
import video from '../../image/video.mp4'

const Banner = () => {

    const Cover = styled.div`
      position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    height: 1000px;
    z-index: -1;
    background-color: black;
    opacity: 0.7;
    `

    return (
        <Wrap>
            <Video loop={true} autoPlay={true} muted={true}>
                <source src={video} type="video/mp4" />
            </Video>
            <Cover></Cover>
            <Inside>
                <Left>
                    <Tittle>Hi, I'm a Front-end developer</Tittle>
                    <Content>
                        This is my Portfolio which show a little bit 
                        about myself 
                    </Content>
                </Left>
            </Inside>
        </Wrap>
    );
};

export default Banner;