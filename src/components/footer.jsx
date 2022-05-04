import classNames from "classnames";
import style from "../App.module.scss"
export const Footer = () => {
    return (
        <footer className={classNames("page-footer","bg-dark","w-100","d-flex","justify-content-center","align-items-center","text-white","mt-auto",style.footer)}>
            <p className="m-0">Developed by CSUN Students</p>
        </footer>
    );
}