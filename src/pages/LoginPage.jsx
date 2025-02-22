import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full bg-white shadow-lg rounded-lg p-8 max-w-md">
                <h1 className="h2-primary text-3xl mb-6">로그인</h1>
                <AuthForm type="login" />
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
