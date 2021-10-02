import React from 'react';
import {
    Wrap,
    Inside,
    Item,
    Header,
    Tittle,
    Icon,
} from './Abilities.element'
import draw from '../../image/draw.svg'
import edit from '../../image/edit.svg'
import group from '../../image/group.svg'
import school from '../../image/school.svg'
import 'aos/dist/aos.css';

const Abilities = () => {
    return (
        <Wrap id="abilities">
            <Header>Abilities</Header>
            <Inside>
                <Item data-aos="fade-in">
                    <Icon src={draw}></Icon>
                    <Tittle>Grapphic Design</Tittle>
                </Item>
                <Item data-aos="fade-in">
                    <Icon src={edit}></Icon>
                    <Tittle>Positive Learning</Tittle>

                </Item>
                <Item data-aos="fade-in">
                    <Icon src={group}></Icon>
                    <Tittle>Team Work</Tittle>

                </Item>
                <Item data-aos="fade-in">
                    <Icon src={school}></Icon>
                    <Tittle>Adaption</Tittle>
                </Item>
            </Inside>
        </Wrap>
    );
};

export default Abilities;