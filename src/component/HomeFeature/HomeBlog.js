import React from 'react';
import HeaderContent from '../Content/HeaderContent';
import HomeBlogItem from './HomeBlogItem';
function HomeBlog(props) {
    return (
        <section className="section-gap">
            <div className="container">
                <HeaderContent
                    mainContent="Blog mới đăng"
                    infoContent="Những bài blog về thời trang mới nhất"
                ></HeaderContent>
                <div className="row">
                    {props.data &&
                        props.data.length > 0 &&
                        props.data.map((item, index) => {
                            return (
                                // sửa mới
                                <HomeBlogItem data={item} key={index} />
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default HomeBlog;
