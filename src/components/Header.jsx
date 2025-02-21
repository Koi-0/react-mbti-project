import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-between">
            <header className="bg-gray-100 p-4 drop-shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                    <Link to={"/"} className="text-primary">
                        홈
                    </Link>
                    <div>
                        <Link to={"/loginPage"} className="text-primary">
                            로그인
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Header;
