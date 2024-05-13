import React from 'react';

const UserLayout = () => {
    const layoutStyle = {
        display: 'grid',
        gridTemplateAreas: `'header header header' 'menu main main'`,
        gridTemplateColumns: '1fr 3fr',
        height: '100vh'
    };

    return (
        <div style={layoutStyle}>
            <Header />
            <Menu />
            <Main />
        </div>
    );
}

const Header = () => {
    const headerStyle = {
        gridArea: 'header',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#eeeeee'
    };

    return (
        <header style={headerStyle}>
            <div>Logo</div>
            <Navigation />
        </header>
    );
}

const Navigation = () => {
    const navStyle = {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
    };

    return (
        <nav>
            <ul style={navStyle}>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </nav>
    );
}

const Menu = () => {
    const menuStyle = {
        gridArea: 'menu',
        backgroundColor: 'lightgreen',
        padding: '10px'
    };

    return (
        <aside style={menuStyle}>
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
        </aside>
    );
}

const Main = () => {
    const mainStyle = {
        gridArea: 'main',
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    };

    return (
        <main style={mainStyle}>
            <Article />
            <CartGrid />
        </main>
    );
}

const Article = () => {
    return (
        <article style={{marginBottom: '20px'}}>
            <h1>Article Title</h1>
            <p>Article content goes here...</p>
        </article>
    );
}

const CartGrid = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px'
    };

    return (
        <div style={gridStyle}>
            {[...Array(12)].map((_, index) => (
                <div key={index} style={{ backgroundColor: 'pink', padding: '10px' }}>Cart {index + 1}</div>
            ))}
        </div>
    );
}

export default UserLayout;
