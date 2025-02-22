import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-screen h-screen bg-gray-100 flex flex-col justify-between">
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
            <main className="container mx-auto h-full pt-10">
                <Outlet />
            </main>
        </div>
    );
};

export default Header;
