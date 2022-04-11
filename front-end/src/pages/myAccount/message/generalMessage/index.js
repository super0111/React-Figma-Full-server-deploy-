import { Styles } from "./style";
import MessageItem from "../messageItem";

export default function GeneralMessage({ msgs }){
    return (
        <Styles>
            <div className="general-message-container">
                {msgs? msgs.map((item, idx) =>
                    <MessageItem 
                        senderName={item.senderName}
                        content={item.content}
                        date={item.date}
                        key={idx}
                    />
                ):(<div className="empty">All good, no message yet. </div>)}
            </div>
        </Styles>
    )
}