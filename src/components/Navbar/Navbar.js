import React from 'react';
import { Wrap, Inside, Header, List, Item } from './Navbar.elements'

const Navbar = () => {

    const [visible, setVisible] = React.useState(true);

    React.useState(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setVisible(false);
            }
            else {
                setVisible(true);
            }
        })

        return () => window.removeEventListener('scroll');
    }, [])



    return (
        <Wrap visible={visible}>
            <Inside>
                <Header>Portfolio</Header>
                <List>
                    <Item visible={visible} onClick = {() => {document.getElementById('info').scrollIntoView({behavior:'smooth'})}}>Infomation</Item>
                    <Item visible={visible}  onClick = {() => {document.getElementById('abilities').scrollIntoView({behavior:'smooth'})}}>Abilities</Item>
                    <Item visible={visible}>Project</Item>
                </List>
            </Inside>
        </Wrap>
    );
};

export default Navbar;

