import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { GrMail} from 'react-icons/gr'
import styled from 'styled-components'
const SideLink = () => {


    const AllStyled = styled.div`
        width: 50px;
        background: #212c3f;
        border-radius: 10px;
        margin-right: 8px;

        z-index: 2;
        font-size: 2rem;
        position: sticky;
        float: right;
        right: 0;
        top: calc( 100vh - 60vh);
        text-align: center;
        
        ul{
            margin: 8px 0;
            padding: 0px;
            list-style: none;
        }

        li{
            margin-top: 5px;
            &:hover {
                transform: scale(1.2);
                transition: all 0.3s ease-in-out;
            }
        }
        a{
            color: white;

          
        }

    `;

    return (
        <AllStyled>
            <div className="side-link">
                <ul>
                    <li><a target="_blank" href='https://www.facebook.com/P.T.H.9100/'><FaFacebook  size= {25}></FaFacebook></a></li>
                    <li><a target="_blank" href='https://www.instagram.com/phc.trng/'><FaInstagram size= {25}></FaInstagram></a></li>
                    <li><a target="_blank" href="mailto:someone@yoursite.com"><GrMail size= {25}></GrMail></a></li>
                </ul>
            </div>
        </AllStyled>
    );
};

export default SideLink;