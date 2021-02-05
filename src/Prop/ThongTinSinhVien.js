import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {
    render() {

        //this.props là thuộc tính có sẳn của react component

        //this.state != this.props
        //Giống nhau là dùng để binding dữ liệu lên giao diện và đều là thuộc tính có sẳn của react class component
        //Khác nhau:
        //this.state quản lý các trạng thái của biến làm thay đổi dữ liệu truyền vào
        //this.props nhận giá trị từ component cha truyền vào
        //this.state(=>gọi phương thwusc setstate) có thể gán lại giá trị được những this.props thì không có phép gán lại giá trị

        let {sinhVien} = this.props;

        return (
            <div style={{backgroundColor:this.props.bgColor}} className="card text-white bg-dark">
                <img width="100" height="180" className="card-img-top" src="https://picsum.photos/100/180" alt="Hello" />
                <div className="card-body">
                    <h4 className="card-title">{sinhVien?.ten}</h4>
                    <p className="card-text">{sinhVien?.tuoi}</p>
                </div>
            </div>

        )
    }
}
