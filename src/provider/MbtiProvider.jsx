import { useState } from "react";
import { MbtiContext } from "../context/MbtiContext";

const MbtiProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("accessToken")
    );

    const handleInputChange = (e, setState) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <MbtiContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                handleInputChange,
            }}
        >
            {children}
        </MbtiContext.Provider>
    );
};

export default MbtiProvider;
