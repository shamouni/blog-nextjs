import Link from "next/link";


const Header = () => {
    return (
        <header>
            <div className="container-fluid">

                <nav className="navbar navbar-expand-md navbar-dark py-0">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/assets/images/logo.png" alt="logo" height="65" />
                        </a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">
                                        Home <span className="sr-only">(current)</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/posts">
                                    <a className="nav-link">Sport</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/posts">
                                    <a className="nav-link">Economics</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/posts">
                                    <a className="nav-link">Politics</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                                Categories
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link href="/posts">
                                    <a className="dropdown-item">Europe</a>
                                </Link>
                                <Link href="/posts">
                                    <a className="dropdown-item">America</a>
                                </Link>
                                <Link href="/posts">
                                    <a className="dropdown-item">Asian</a>
                                </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
