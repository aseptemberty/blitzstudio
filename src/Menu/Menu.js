import '../Menu/Menu.scss'

function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About me</a></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </div>
    );
}

export default Menu;