import React from 'react';
import {
    Wrap,
    Inside,
    Image,
    Bar,
    Right,
    Tittle,
    Content,
    Decoration
} from './Information.elements'
import avatar from '../../image/avatar.JPG'

import 'aos/dist/aos.css';


const Information = () => {


    return (
        <Wrap id="info" >
            <Inside>
                <Image data-aos="fade-right" >
                    <Decoration style={{ backgroundImage: `url(${avatar})` }}/>
                </Image>
               
                <Right data-aos="fade-left">
                    <Tittle>About Me</Tittle>
                    <Content>
                        Xin chào, tôi là Huỳnh Phước Trường, hiện đang là sinh viên năm 4
                        trường Đại Học Sư Phạm Kỹ Thuật và đang trên con đường trở thành 1
                        Front End Developer, bằng kiến thức và kỹ năng tích lũy được trong những
                        năm qua, tôi tạo ra trang web này với hy vọng những nhà tuyển dụng có thể thông
                        qua đó và đánh giá được 1 phần năng lực của tôi, để từ đó tôi có thể tiến thêm
                        1 bước nữa trên con đường sự nghiệp của mình.
                    </Content>
                </Right>
            </Inside>
        </Wrap>
    );
};

export default Information;