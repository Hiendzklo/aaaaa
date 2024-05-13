import React, { Component } from 'react';

interface UserInfoProps {}

interface UserInfoState {}

class UserInfo extends Component<UserInfoProps, UserInfoState> {
    render() {
        const user = {
            fullName: 'Nguyễn Văn A',
            gender: 'Nam',
            dateOfBirth: '06/03/2024',
            email: 'nva@gmail.com',
            address: 'Thanh Xuân, Hà Nội'
        };

        return (
            <div>
                <h2>Thông tin cá nhân</h2>
                <p>{`Họ và tên: ${user.fullName}`}</p>
                <p>{`Giới tính: ${user.gender}`}</p>
                <p>{`Ngày sinh: ${user.dateOfBirth}`}</p>
                <p>{`Email: ${user.email}`}</p>
                <p>{`Địa chỉ: ${user.address}`}</p>
            </div>
        );
    }
}

export default UserInfo;
