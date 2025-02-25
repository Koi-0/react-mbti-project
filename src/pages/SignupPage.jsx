import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { useContext, useState } from "react";
import { MbtiContext } from "../context/MbtiContext";

const SignupPage = () => {
    const { handleInputChange } = useContext(MbtiContext);

    const [registerState, setRegisterState] = useState({
        id: "",
        password: "",
        nickname: "",
    });

    const navigate = useNavigate();

    const onChangeHandler = (e) => handleInputChange(e, setRegisterState);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await register(registerState);

            // 회원가입 성공
            alert("회원가입이 완료되었습니다.");
            navigate("/loginPage");
        } catch (error) {
            // 아이디가 존재하는 경우
            if (error.response.status === 409) {
                alert(error.response.data.message);
            } else {
                alert("회원가입에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full bg-white shadow-lg rounded-lg p-8 max-w-md">
                <h1 className="h2-primary text-3xl mb-6">회원가입</h1>
                <AuthForm
                    type="signup"
                    onSubmitHandler={onSubmitHandler}
                    onChangeHandler={onChangeHandler}
                />
                <div className="mt-4">
                    <p className="text-gray-700">
                        이미 계정이 있으신가요?
                        <Link
                            to={"/loginPage"}
                            className="text-[#FF5A5F] hover:underline ml-3"
                        >
                            로그인
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
