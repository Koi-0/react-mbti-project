const AuthForm = ({ type, onSubmitHandler, onChangeHandler }) => {
    return (
        <form
            onSubmit={onSubmitHandler}
            className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
        >
            <input
                type="text"
                name="id"
                placeholder="아이디 (4글자 ~ 10글자)"
                className="input-primary"
                minLength={4}
                maxLength={10}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="password"
                placeholder="비밀번호 (4글자 ~ 15글자)"
                className="input-primary"
                minLength={4}
                maxLength={15}
                onChange={onChangeHandler}
            />
            {type === "signup" && (
                <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임 (1글자 ~ 10글자)"
                    className="input-primary"
                    minLength={1}
                    maxLength={10}
                    onChange={onChangeHandler}
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
