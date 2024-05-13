import React from 'react';

const Calculation: React.FC = () => {
    // Hàm thực hiện phép cộng
    const add = (a: number, b: number): number => {
        return a + b;
    };

    // Hàm thực hiện phép trừ
    const subtract = (a: number, b: number): number => {
        return a - b;
    };

    // Hàm thực hiện phép nhân
    const multiply = (a: number, b: number): number => {
        return a * b;
    };

    // Hàm thực hiện phép chia
    const divide = (a: number, b: number): number | string => {
        if (b === 0) {
            return "Không thể chia cho 0";
        }
        return a / b;
    };

    return (
        <div>
            <h2>Danh sách kết quả</h2>
            <p>{`10+10=${add(10, 10)}`}</p>
            <p>{`10-10=${subtract(10, 10)}`}</p>
            <p>{`10*10=${multiply(10, 10)}`}</p>
            <p>{`10/10=${divide(10, 10)}`}</p>
        </div>
    );
};

export default Calculation;
