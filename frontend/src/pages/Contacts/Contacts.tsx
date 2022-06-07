import React, {FC} from 'react';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contacts: FC = () => {
    return (
        <div className="container mt-5">
            <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faInfoCircle}/>Liên hệ</h4>
            <br/>
            <p><b>Số điện thoại:</b> 086 998 4854<br/>
                <b>E-mail:</b> cn69113@gmail.com</p>
            <br/>
            <h6>Thời gian làm việc</h6>
            <p>Shop online mở cửa bắt đầu vào lúc 8:00 - 20:00 các ngày trong tuần. <br/>
                Đơn đặt hàng trược tuyến nhận mọi lúc.</p>
            <br/>
            <h6>Vận chuyển</h6>
            <p>Giao hàng thông qua đơn vị vận chuyển.</p>
        </div>
    );
};

export default Contacts
