import { RiSendPlane2Fill } from "react-icons/ri";

import style from "./Input.module.css"

export function Input (){
 return(
    <form className={style.conteinerInput}>
       <input type="text" placeholder="Digite sua mensagem" /> 
       <button type="submit"><RiSendPlane2Fill fontSize={24} color="#E1E1E6"/></button>
    </form>
 )
}