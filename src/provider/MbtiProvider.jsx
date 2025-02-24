import { MbtiContext } from "../context/MbtiContext";

const MbtiProvider = ({ children }) => {
    // 로직 추가

    return <MbtiContext.Provider value={{}}>{children}</MbtiContext.Provider>;
};

export default MbtiProvider;
