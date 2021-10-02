import React from 'react';
import {
    Wrap,
    Inside,
    Item,
    Tittle,
    Content
} from './Hobby.elements'
import 'aos/dist/aos.css';
import { FaBasketballBall } from 'react-icons/fa' 
import { VscCode } from 'react-icons/vsc' 


const Hobby = () => {

    const [color,setColor] = React.useState('#2f446f');
    const [color1,setColor1] = React.useState('#2f446f');
    const [color2,setColor2] = React.useState('#2f446f');

    return (
        <Wrap>
            <Inside>
                <Item onMouseEnter ={() => {setColor('white')}}  onMouseLeave  ={() => {setColor('#2f446f')}}>
                    <FaBasketballBall  style={{ marginTop: '40px', transition:'all 0.5s' }} size={100} color={color}/>
                    <Tittle id='tittle'>Bóng Rổ</Tittle>
                    <Content id='content'>fsadfsadfasdfsadf
                        asd
                        fasdfsadfasdfsadfasdfsadfaaaaaaaaa
                        asdfasdfsadfsaddddddddd
                    </Content>
                </Item>
                <Item  onMouseEnter ={() => {setColor1('white')}}  onMouseLeave  ={() => {setColor1('#2f446f')}}>
                    <VscCode style={{ marginTop: '40px' }} size={100} color={color1} />
                    <Tittle  id='tittle'>Coding</Tittle>
                    <Content id='content'>fsadfsadfasdfsadf
                        asd
                        fasdfsadfasdfsadfasdfsadfaaaaaaaaa
                        asdfasdfsadfsaddddddddd
                    </Content>
                </Item>
                <Item onMouseEnter ={() => {setColor2('white')}}  onMouseLeave  ={() => {setColor2('#2f446f')}}>
                    <FaBasketballBall style={{ marginTop: '40px' }} size={100} color={color2}/>
                    <Tittle id='tittle'>Bóng Rổ</Tittle>
                    <Content id='content'>fsadfsadfasdfsadf
                        asd
                        fasdfsadfasdfsadfasdfsadfaaaaaaaaa
                        asdfasdfsadfsaddddddddd
                    </Content>
                </Item>

            </Inside>
        </Wrap>
    );
};

export default Hobby;