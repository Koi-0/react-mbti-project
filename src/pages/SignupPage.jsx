import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignupPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full bg-white shadow-lg rounded-lg p-8 max-w-md">
                <h1 className="h2-primary text-3xl mb-6">회원가입</h1>
                <AuthForm type="signup" />
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
