import React from 'react';
import { Wrap, Inside, Text, Image } from './Footer.elements.js'
import gmail from '../../image/gmail.png'
import facebook from '../../image/facebook.png'
import zl from '../../image/zl.jpg'
import ins from '../../image/ins.png'

const Footer = () => {
    return (
        <Wrap>
            <Inside>
                <Text>CONTACT ME AT ANY TIME</Text>
                <div style={{ marginTop: '10px', marginRight: '5px' }}>
                    <a target="_blank" href='https://www.facebook.com/P.T.H.9100/'>  <Image styled={{ width: '50px', height: '50px' }} src={facebook}></Image></a>
                    <a  href="https://zalo.me/0934802184" target="_blank"><Image styled={{ width: '50px', height: '50px' }} src={zl}></Image></a>
                    <a style={{textDecoration:'none'}} target="_blank" href='https://www.instagram.com/phc.trng/'> <Image styled = {{width: '50px', height: '50px'}} src ={ins}></Image></a>
                </div>
            </Inside>
        </Wrap>
    );
};

export default Footer;