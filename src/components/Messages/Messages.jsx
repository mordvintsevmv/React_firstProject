import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";
import React from "react";

const Messages = (props) => {

    let dialoguesElements = props.messagePage.dialogueData.map((el) => <DialogueItem key={el.id} id={el.id} name={el.name} />)

    let messageElements = props.messagePage.messageData.map((el) => <ChatItem key={el.id} message={el.message} />)

    let newMessage = React.createRef();

    let onMessageChange = () => {
        props.messageChange(newMessage.current.value);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>
                {dialoguesElements}
            </div>

            <div className={MessagesCSS.chat}>
                {messageElements}

                <textarea ref={ newMessage } value={ props.messagePage.currentMessage.text} onChange={ onMessageChange }></textarea>
                <button onClick={ onAddMessage }>Send</button>
            </div>

        </div>
    )
}

export default Messages;