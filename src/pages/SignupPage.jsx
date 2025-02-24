import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useState } from "react";
import { register } from "../api/auth";

const SignupPage = () => {
    const navigate = useNavigate();
    const [registerState, setRegisterState] = useState({
        id: "",
        password: "",
        nickname: "",
    });

    console.log("registerState =>", registerState);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setRegisterState((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await register(registerState);
            console.log("회원가입 성공 : ", response);
            alert("회원가입이 완료되었습니다.");
            navigate("/loginPage");
        } catch (error) {
            console.error("회원가입 실패 : ", error);
            alert("회원가입에 실패했습니다. 다시 시도해주세요!");
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
