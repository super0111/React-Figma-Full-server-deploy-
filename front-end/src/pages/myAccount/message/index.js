import { useEffect, useState } from "react";
import { Styles } from "./messageStyle";
import CustomedTextButton from '../customedBtn';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as MessageIcon } from '../../../assets/img/message.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/img/alarm.svg';
import SystemMessage from "./systemMessage";
import {
    systemMsgs
} from '../../../assets/config';
import GeneralMessage from "./generalMessage";

const LeftIconButton = withStyles((theme) => ({
    root: {
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderBottomLeftRadius: '24px !important',
        borderTopLeftRadius: '24px !important',
        borderTopRightRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '170px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        backgroundColor: props => props.isclicked === 1?`var(--second)`:`var(--white)`,
        color: props => props.isclicked === 1?`var(--white)`:`var(--second)`,
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`,
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            width: '255px !important',
            marginLeft: '0px !important',
            padding: '0 !important',
            marginTop: '10 !important',
        },
        ['@media screen and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
            width: '100% !important',
        },
        '& .icon': {
            marginRight: '6px !important',
        }
    },
  }))(Button);
  
const RightIconButton = withStyles((theme) => ({
    root: {
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderBottomRightRadius: '24px !important',
        borderTopRightRadius: '24px !important',
        borderTopLeftRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '170px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        backgroundColor: props => props.isclicked === 1?`var(--second)`:`var(--white)`,
        color: props => props.isclicked === 1?`var(--white)`:`var(--second)`,
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`,
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            width: '255px !important',
            marginLeft: '0px !important',
            padding: '0 !important',
            marginTop: '10 !important',
        },
        ['@media screen and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
            width: '100% !important',
        },
        '& .icon': {
            marginRight: '6px !important',
        }
    },
  }))(Button);

export default function Message(){
    const [isSystem, setSystem] = useState(true);
    const [sysMsg, setSysMsgs] = useState([]);
    const [generalMsg, setGeneralMsgs] = useState([]);

    const addMore = () => {
        const newMsgs = systemMsgs.filter( (item, idx ) => idx < sysMsg.length + 5)
        setSysMsgs(newMsgs)
    }

    useEffect(() => {
        const newMsgs = systemMsgs.filter( (item, idx ) => idx < 5)
        setSysMsgs(newMsgs)
    }, [])

    return (
        <Styles>
            <div className="message-container">
                <div className="message-header">
                    <LeftIconButton isclicked={isSystem?1:0} onClick={() => setSystem(true)}>
                        <MessageIcon className="icon"/>
                        <span>System Messages</span>
                    </LeftIconButton>
                    <RightIconButton isclicked={!isSystem?1:0} onClick={() => setSystem(false)}>
                        <AlarmIcon className="icon"/>
                        <span>General Messages</span>
                    </RightIconButton>
                </div>
                <div className="divider">

                </div>
                <div className="message-body">
                    {isSystem?<SystemMessage msgs={sysMsg} />:<GeneralMessage />}
                    
                </div>
                <div className='message-footer'>
                    {isSystem?(
                        sysMsg && sysMsg.length > 0 && 
                            <CustomedTextButton
                                text={"View More"}
                                addMore={addMore}
                            />
                    ):(
                        generalMsg && generalMsg.length > 0 && 
                            <CustomedTextButton
                                text={"View More"}
                                addMore={addMore}
                            />
                    )}
                    
                </div>
            </div>
        </Styles>
    )
}