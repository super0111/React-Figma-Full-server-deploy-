import { Styles } from "./style";
import MessageItem from "../messageItem";

export default function SystemMessage({ msgs }){
    return (
        <Styles>
            <div className="system-message-container">
                {msgs && msgs.map((item, idx) =>
                    <MessageItem 
                        senderName={item.senderName}
                        content={item.content}
                        date={item.date}
                        key={idx}
                    />
                )}
            </div>
        </Styles>
    )
}