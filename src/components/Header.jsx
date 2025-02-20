import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-200 p-4">
            <nav className="container mx-auto flex justify-between items-center text-white">
                <Link to={"/"} className="hover:text-gray-300">
                    홈
                </Link>
                <div className="space-x-4">
                    <Link to={"/loginPage"} className="hover:text-gray-300">
                        로그인
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
