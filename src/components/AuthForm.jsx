import { Link } from "react-router-dom";

const AuthForm = () => {
    return (
        <main className="h-full bg-gray-100 flex items-center justify-center ">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
                <h1 className="h2-primary text-3xl mb-6">로그인</h1>
                <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <input
                        type="text"
                        name="id"
                        placeholder="아이디"
                        className="input-primary"
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="비밀번호"
                        className="input-primary"
                    />
                    <button
                        type="submit"
                        className="btn-primary w-full rounded-lg text-center py-3"
                    >
                        로그인
                    </button>
                </form>
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
        </main>
    );
};

export default AuthForm;
