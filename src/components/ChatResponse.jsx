import style from "./ChatResponse.module.css"

export function ChatResponse (){
    return(
       <div className={style.ResponseConteiner}>
                <time title='23 de agosto as 11:30' dateTime="2024-08-23 11:30:38">Hendrickson - 11:30</time>
                <div className={style.bublle}>
                    <p>Tive uma ideia incrível para um projeto! 😍</p>
                </div>
       </div>
    )
}