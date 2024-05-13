import React from 'react';

const courses = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];

const Bt1 = () => {
    return (
        <div>
            <h2>Danh sách khóa học</h2>
            <ol>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ol>
        </div>
    );
}

export default Bt1;
