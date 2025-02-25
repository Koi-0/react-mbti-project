import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useContext, useState } from "react";
import { MbtiContext } from "../context/MbtiContext";

const LoginPage = () => {
    const { setIsLoggedIn, handleInputChange } = useContext(MbtiContext);

    const [loginState, setLoginState] = useState({
        id: "",
        password: "",
    });

    const navigate = useNavigate();

    const onChangeHandler = (e) => handleInputChange(e, setLoginState);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await login(loginState);

            // 로그인 성공
            alert("로그인이 완료되었습니다.");
            localStorage.setItem("accessToken", response.accessToken); // accessToken 저장

            setIsLoggedIn(true);
            navigate("/");
        } catch (error) {
            // 아이디가 존재하지 않는 경우
            if (!error.response.data.userId) {
                alert(error.response.data.message);
            } else {
                alert("로그인에 실패했습니다. 다시 시도해주세요.");
            }

            setIsLoggedIn(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full bg-white shadow-lg rounded-lg p-8 max-w-md">
                <h1 className="h2-primary text-3xl mb-6">로그인</h1>
                <AuthForm
                    type="login"
                    onSubmitHandler={onSubmitHandler}
                    onChangeHandler={onChangeHandler}
                />
                <div className="mt-4">
                    <p className="text-gray-700">
                        계정이 없으신가요?
                        <Link
                            to={"/signupPage"}
                            className="text-[#FF5A5F] hover:underline ml-3"
                        >
                            회원가입
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
