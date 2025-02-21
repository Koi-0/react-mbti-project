import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-100 p-4 shadow-md">
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
    );
};

export default Header;
