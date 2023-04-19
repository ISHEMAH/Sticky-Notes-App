import Logo from './Logo/Logo.png'

const Header  = () => {
    return(
        <header>
            <div className="Logo">
                <img src={Logo}/>
            </div>
            <h1>Sticky Notes</h1>
        </header>
    )
}

export default Header;