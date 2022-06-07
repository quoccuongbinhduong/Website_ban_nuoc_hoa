import React, {FC} from 'react';
import {Link, useLocation} from "react-router-dom";

import {Order} from "../../../types/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faShoppingBag} from "@fortawesome/free-solid-svg-icons";

const ManageUserOrder: FC = () => {
    const location = useLocation<Order>();
    const {
        id,
        email,
        firstName,
        lastName,
        totalPrice,
        postIndex,
        phoneNumber,
        date,
        city,
        address,
        orderItems
    } = location.state;

    return (
        <>
            <h4 style={{textAlign: "center"}}><FontAwesomeIcon icon={faShoppingBag}/> Thông tin đơn hàng #{id}</h4>
            <div className="row border my-5 px-5 py-3">
                <div className="col-md-6">
                    <h5 style={{marginBottom: "30px"}}><FontAwesomeIcon icon={faInfoCircle}/> Thông tin khách hàng</h5>
                    <p className="personal_data_item">Tên:
                        <span className="personal_data_text">{firstName}</span>
                    </p>
                    <p className="personal_data_item">Họ:
                        <span className="personal_data_text">{lastName}</span>
                    </p>
                    <p className="personal_data_item">Thành phố:
                        <span className="personal_data_text">{city}</span>
                    </p>
                    <p className="personal_data_item">Địa chỉ:
                        <span className="personal_data_text">{address}</span>
                    </p>
                    <p className="personal_data_item">Email:
                        <span className="personal_data_text">{email}</span>
                    </p>
                    <p className="personal_data_item">Số điện thoại:
                        <span className="personal_data_text">{phoneNumber}</span>
                    </p>
                    <p className="personal_data_item">Mã định danh:
                        <span className="personal_data_text">{postIndex}</span>
                    </p>
                </div>
                <div className="col-md-6">
                    <h5 style={{marginBottom: "30px"}}><FontAwesomeIcon icon={faInfoCircle}/> Thông tin đặt hàng</h5>
                    <p className="personal_data_item">Mã đơn hàng:
                        <span className="personal_data_text">{id}</span>
                    </p>
                    <p className="personal_data_item">Ngày:
                        <span className="personal_data_text">{date}</span>
                    </p>
                    <h4 style={{marginBottom: "30px", marginTop: "30px"}}>Nội dung đơn hàng:
                        <span style={{color: "green"}}> {totalPrice} VND</span>
                    </h4>
                </div>
            </div>
            <table className="table border text-center">
                <thead className="table-active">
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Thương hiệu</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Tồn kho</th>
                </tr>
                </thead>
                <tbody>
                {orderItems.map((orderItem) => {
                    return (
                        <tr key={orderItem.id}>
                            <th><Link
                                to={`/product/${orderItem.perfume.id}`}>{orderItem.perfume.id}</Link></th>
                            <th>{orderItem.perfume.perfumer}</th>
                            <th>{orderItem.perfume.perfumeTitle}</th>
                            <th>{orderItem.quantity}</th>
                            <th>{orderItem.perfume.price} VND</th>
                            <th>{orderItem.amount} VND</th>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
};

export default ManageUserOrder;
