import React from 'react';

// Khai báo interface cho props
interface User {
  firstName: string;
  lastName: string;
}

// Component FormatName sử dụng functional component
const FormatName: React.FC<{ user: User }> = ({ user }) => {
  // Hàm formatName để tạo chuỗi họ và tên đầy đủ
  const formatName = (user: User) => {
    return `${user.firstName} ${user.lastName}`;
  };

  // Hiển thị tên ra giao diện
  return (
    <div>
      <h1>Họ và tên: {formatName(user)}</h1>
    </div>
  );
};

// Test component trong cùng file (thường dùng trong storybook hoặc testing)
const App = () => {
  const testUser = { firstName: "Nguyễn Văn", lastName: "Nam" };

  return (
    <div>
      <FormatName user={testUser} />
    </div>
  );
};

// Export component mặc định
export default App;
