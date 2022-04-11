import { Styles } from './style';
import { ReactComponent as Avatar } from '../../../../assets/img/account/avatar/1.svg';
import { ReactComponent as DotIcon } from '../../../../assets/img/account/dot.svg';

export default function MessageItem({senderName, content, date}){
    return (
        <Styles>
            <div className='message-item-container'>
                <div className='timeline-container'>
                    <div className='timeline'>
                    </div>
                    <DotIcon className='dot-icon'/>
                </div>                    
                <div className='message-cover'>
                    <Avatar className='sender-avatar'/>
                    <div className='message-item-body'>
                        <div className='message-item-header'>
                            <div className='message-item-sender'>
                                {senderName}
                            </div>
                            <div className='message-item-content'>
                                {content}
                            </div>
                        </div>
                        <div className='message-item-date'>
                            {date}
                        </div>
                    </div>    
                </div>
            </div>
        </Styles>
    )
}