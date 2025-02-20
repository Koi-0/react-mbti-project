import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Link to={"/loginPage"}>
                <div>HomePage</div>
            </Link>
        </>
    );
};

export default HomePage;
