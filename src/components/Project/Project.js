import React from 'react';
import {
    Wrap,
    Inside,
    Video,
    Left,
    Tittle,
    Content
} from './Project.elements.js'
import video from '../../image/video.mp4'

const Project = () => {
    return (
        <Wrap>
            <Inside>
                <Left>
                    <Tittle>Project</Tittle>
                    <Content>Xin chào, tôi là Huỳnh Phước Trường, hiện tại đang là sinh viên năm 4
                        trường Đại Học Sư Phạm Kỹ Thuật và đang trên con đường trở thành 1
                        Front End Developer, bằng kiến thức và kỹ năng tích lũy được trong những
                        năm qua, tôi tạo ra trang web này với hy vọng những nhà tuyển dụng có thể thông
                        qua đó và đánh giá được 1 phần năng lực của tôi, để từ đó tôi có thể tiến thêm
                        1 bước nữa trên con đường sự nghiệp của mình.</Content>
                </Left>
                <Video controls autoplay muted >
                    <source src={video} type="video/mp4" ></source>
                </Video>
            </Inside>
        </Wrap>
    );
};

export default Project;