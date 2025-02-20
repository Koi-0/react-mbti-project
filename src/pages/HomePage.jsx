import { Link } from "react-router-dom";
import TestPage from "./TestPage";

const HomePage = () => {
    return (
        <Link to={"/loginPage"}>
            <TestPage />
        </Link>
    );
};

export default HomePage;
