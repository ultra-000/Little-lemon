import { useRef } from "react";
import logo from "../../assets/icons/logo.svg";

function Header() {
    const menuRef = useRef(null);
    const closeMenu = () => {
        menuRef.current.classList.add("translate-x-[100%]");
    };
    const openMenu = () => {
        menuRef.current.classList.remove("translate-x-[100%]");
    };
    return (
        <header>
            <div className="container mx-auto py-8 px-12 flex justify-between items-center">
                <div>
                    <img src={logo} alt="Website logo" />
                </div>
                <button className="lg:hidden" onClick={openMenu}>
                    <svg aria-hidden="true" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#000" style={{color: "#000"}} height="27" width="27" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path></g></svg>
                    <span className="sr-only">Menu</span>
                </button>
                <nav ref={menuRef} className="absolute left-0 top-0 translate-x-[100%] transition-all duration-300 w-full h-screen bg-[var(--primary-color)] text-white lg:static lg:bg-inherit lg:h-auto lg:text-black lg:w-auto lg:translate-x-0">
                    <div className="flex flex-row-reverse py-8 px-12 lg:hidden">
                        <button onClick={closeMenu}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#000" style={{color: "#fff"}} height="27" width="27" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></g></svg>
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                    <ul className="h-full flex flex-col justify-center items-center gap-8 lg:flex-row lg:h-auto lg:justify-between">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/menu">Menu</a>
                        </li>
                        <li>
                            <a href="/reservations">Reservations</a>
                        </li>
                        <li>
                            <a href="/order-online">Order Online</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
