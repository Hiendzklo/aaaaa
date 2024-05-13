import React from 'react';

export default function Bt4() {
  const containerStyle = {
    display: 'flex', // Thiết lập container là flex để các items trong đó xếp hàng ngang
    justifyContent: 'center', // Căn giữa các box trên trục ngang
    alignItems: 'center' // Căn giữa các box trên trục dọc
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: '10px',
    backgroundColor: 'red' // Màu nền mặc định, sẽ được thay đổi bên dưới
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...boxStyle, backgroundColor: 'red' }}>Box</div>
      <div style={{ ...boxStyle, backgroundColor: 'blue' }}>Box</div>
      <div style={{ ...boxStyle, backgroundColor: 'green' }}>Box</div>
    </div>
  );
}
