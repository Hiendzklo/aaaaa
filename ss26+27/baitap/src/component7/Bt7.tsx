import React from 'react';

interface Props {}

// Header component
const Header: React.FC<Props> = () => {
    return <div style={{ backgroundColor: '#f3f3f3', padding: '10px', textAlign: 'center' }}>Header</div>;
}

// Menu component
const Menu: React.FC<Props> = () => {
    return <div style={{ backgroundColor: '#333', color: 'white', width: '200px', padding: '20px' }}>Menu</div>;
}

// Main component
const Main: React.FC<Props> = () => {
    return <div style={{ flexGrow: 1, padding: '20px' }}>Main</div>;
}

// Footer component
const Footer: React.FC<Props> = () => {
    return <div style={{ backgroundColor: '#ccc', padding: '10px', textAlign: 'center' }}>Footer</div>;
}

// AdminIndex component that combines all the sub-components
const Bt7: React.FC<Props> = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Menu />
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
}

export default Bt7;
