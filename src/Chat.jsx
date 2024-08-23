import { Data } from "./components/Data"
import { ChatResponse } from "./components/ChatResponse"
import { UserMenssage } from "./components/UserMenssage"

import style from "./Chat.module.css"

export function Chat() {
    return (
        <main className={style.mainConteiner}>
            <div className={style.dataTime}>
                <Data />
            </div>
            <div className={style.chatConteiner}>
                <ChatResponse />
                <UserMenssage />
                <ChatResponse />
                <UserMenssage />
                <ChatResponse />
                <UserMenssage />
                <ChatResponse />
                <UserMenssage />
                <ChatResponse />
                <UserMenssage />
                <ChatResponse />
                <UserMenssage />
                <ChatResponse />
                <UserMenssage />
                
            </div>
        </main>
    )
}