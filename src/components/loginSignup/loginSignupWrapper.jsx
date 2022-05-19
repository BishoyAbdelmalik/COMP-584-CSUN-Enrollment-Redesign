import classNames from "classnames";
import logo from "./../../CSUNorthridgelogo.svg";
import style from "./login.module.scss";

const LoginSignupWrapper = ({children}) => {
    return (
        <div
          className={classNames(
            "text-left",
            style.fitPageHeight,
            style.backgroundImg
          )}
        >
          <div className={classNames(style.loginWrapper)}>
            <div>
              <img
                alt="California State California"
                src={logo}
                height="30"
                className="d-inline-block align-content-center"
              />{" "}
              | Enrollment
            </div>
            {children}
          </div>
    
        </div>
      );
}
 
export default LoginSignupWrapper;