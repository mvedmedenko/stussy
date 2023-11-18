import s from "./Chat.module.css"

type ChatProps = {
    setIsChat: (status: boolean) => void
}


const Chat = (props: ChatProps) => {

    const onClickHandler = () => {
        props.setIsChat(false)
    }


    return (
        <div className={s.chat}>
            <div className={s.inner}>
                <div className={s.title_box}>
                    <div className={s.title}>Stüssy Support</div>
                    <div className={s.close_box} onClick={onClickHandler}>
                        <span className={s.close}></span>
                    </div>
                </div>
                <form className={s.form}>
                    <div className={s.text}>
                        Sorry, we are offline at the moment. <br />
                        Leave a message and we'll get back to you.
                    </div>
                    <div className={s.input_title}>Name</div>
                    <input className={s.input} type="text" />
                    <div className={s.input_title}>Email</div>
                    <input className={s.input} type="email" />
                    <div className={s.input_title}>Message</div>
                    <textarea className={s.textarea} cols="30" rows="10"></textarea>
                </form>
                <div className={s.button_block}>
                    <button className={s.button}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Chat;