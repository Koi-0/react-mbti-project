const AuthForm = ({ type }) => {
    return (
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
            {type === "signup" && (
                <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    className="input-primary"
                />
            )}
            <button
                type="submit"
                className="btn-primary w-full rounded-lg text-center py-3"
            >
                {type === "signup" ? "회원가입" : "로그인"}
            </button>
        </form>
    );
};

export default AuthForm;
