import  './NavBar.moduls.css';
const NavBar = ({componentCounting}) => {
    return (
        <header className="navBar">
            <h2>online Shop</h2>
            <span>{componentCounting}</span>
        </header>
    );
}

export default NavBar;