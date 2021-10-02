import React from 'react';
import { Wrap, Inside, WrapBar, WrapInfoBar, Tittle, Percent, Bar } from './Final.elements'

const Final = () => {

    const data = [
        {
            tittle: 'something',
            percent: '80%'
        },
        {
            tittle: 'something',
            percent: '60%'
        },
        {
            tittle: 'something',
            percent: '100%'
        }
    ]



    return (
        <Wrap>
            <Inside>
                {data.map((data) => (
                     <WrapBar>
                     <WrapInfoBar>
                         <Tittle>{data.tittle}</Tittle>
                         <Percent>{data.percent}</Percent>
                     </WrapInfoBar>
                     <Bar percent={data.percent}></Bar>
                 </WrapBar>
                ))}
            </Inside>

        </Wrap>
    );
};

export default Final;