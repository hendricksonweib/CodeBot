import style from "./Header.module.css"
import { MdClose } from "react-icons/md";

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.inforContent}>
                <img src="https://avatars.githubusercontent.com/u/137108361?s=48&v=4" className="avatar" />

                <div className="nameContent">
                    <h1>Hendrickson Weib</h1>
                    <span>Online</span>
                </div>
            </div>
            <MdClose fontSize={20}/>
        </header>
    )
}