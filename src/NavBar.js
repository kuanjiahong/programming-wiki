function NavBar() {
    return (
        <nav className="sticky top-0 bg-white">
            <ul className="grid grid-cols-1 text-center md:grid-cols-5">
                <li><a href="#data-types">Data Types</a></li>
                <li><a href="#syntax">Syntax</a></li>
                <li><a href="#web-development">Web development</a></li>
                <li><a href="#oop">OOP</a></li>
                <li><a href="#boiler-plate">Boiler plate code</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;