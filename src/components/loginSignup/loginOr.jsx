import style from "./login.module.scss";

const LoginOrLine = () => {
    return (
        <div className={style.LoginDivider}>
            <hr />
            <p>or</p>
            <hr />
        </div>
    );
}

export default LoginOrLine;