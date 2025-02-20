import { Link } from "react-router-dom";
import Header from "../components/Header";
import TestPage from "./TestPage";

const HomePage = () => {
    return (
        <div className="h-full bg-gray-100 flex flex-col justify-between">
            <Header />
            <Link to={"/loginPage"}>
                <TestPage />
            </Link>
        </div>
    );
};

export default HomePage;
