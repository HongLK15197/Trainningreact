import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class PropsDemo extends Component {

    mangSinhVien=[
        {ma:'sv01', ten:'Hong', tuoi:'18'},
        {ma:'sv02', ten:'Mi', tuoi:'22'},
        {ma:'sv03', ten:'Ngoc', tuoi:'24'},
        {ma:'sv04', ten:'Cham', tuoi:'18'},
        {ma:'sv05', ten:'Nhat', tuoi:'20'},
        {ma:'sv06', ten:'Phuc', tuoi:'16'}
    ];

    // renderSinhVien=()=>{
    //     const result=this.mangSinhVien.map((sv,index)
    //     =>{
    //         return <div className="col-4" key={index}>
    //             <ThongTinSinhVien sinhVien={sv} />
    //         </div>
    //     });

    //     return result;
    // }

    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4"> Thông Tin Sinh Viên </h3>
                <div className="row">
                    <div className="col-4">
                        <ThongTinSinhVien
                        sinhVien={this.mangSinhVien[0]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien
                        sinhVien={this.mangSinhVien[1]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien
                         sinhVien={this.mangSinhVien[2]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien
                         sinhVien={this.mangSinhVien[3]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien
                        maSV={this.mangSinhVien[4].ma}
                        tenSV={this.mangSinhVien[4].ten} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien
                        maSV={this.mangSinhVien[5].ma}
                        tenSV={this.mangSinhVien[5].ten} />
                    </div>
                </div>
            </div>
        )
    }
}
