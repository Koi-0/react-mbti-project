import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MbtiContext } from "../context/MbtiContext";

const Header = () => {
    const { isLoggedIn } = useContext(MbtiContext);

    return (
        <div className="w-screen h-screen bg-gray-100 flex flex-col justify-between">
            <header className="bg-gray-100 p-4 drop-shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                    <Link to={"/"} className="text-primary">
                        홈
                    </Link>
                    <div>
                        <button className="text-primary">
                            {isLoggedIn ? "로그아웃" : "로그인"}
                        </button>
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
