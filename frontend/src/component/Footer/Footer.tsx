import React, {FC} from 'react';

import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className="page-footer p-5 bg-black text-white">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <h3>Perfumes</h3>
                        <p>0869984954</p>
                        <br/>
                        <p>Thời gian hoạt động từ 8:00 - 20:00 hàng tuần</p>
                    </div>
                    <div className="footer-right">
                        <h3>Thông tin liên hệ</h3>

                        <a href="#">
                            <i className="fab fa-linkedin fa-2x mr-3" style={{color: "white"}}></i>
                        </a>

                        <a href="https://www.facebook.com/nguyenquoccuong.vn"><i className="fab fa-facebook-f fa-2x mr-3" style={{color: "white"}}></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x mr-3" style={{color: "white"}}></i></a>
                    </div>
                </div>
                <div className="mx-auto" style={{width: "200px"}}>
                    <p>©Bản quyền Quốc Cường</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
