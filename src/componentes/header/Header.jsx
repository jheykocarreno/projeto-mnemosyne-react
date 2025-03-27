import LogoMnemosyne from '../../assets/icons/mnemosyne-logo.svg'

const Header = () => {
    return(
        <header class="app-header">
            <img src={LogoMnemosyne} alt="Logo do site Mnemosyne"/>
            <nav class="links">
                <a href="#">home</a>
                <a href="#">adicionar memónia</a>
            </nav>
        </header>
    )
}

export default Header;