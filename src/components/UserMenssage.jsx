import style from "./UserMenssage.module.css"

export function UserMenssage() {
    return (
        <div className={style.MenssageConteiner}>
            <time title='23 de agosto as 11:30' dateTime="2024-08-23 11:30:38">Você - 11:30</time>
            <div className={style.bublle}>
                <p>Sério? Me conta mais.</p>
            </div>
        </div>
    )
}