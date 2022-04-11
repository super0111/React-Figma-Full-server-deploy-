import { useEffect, useRef, useState } from 'react';
import { Styles } from "./notificationStyle";
import CustomedCheckBox from './checkBox';

const checkLs = [
    {label: 'Notify me when new app screens have been added  '},
    {label: 'Notify me when the app screens have been updated'},
    {label: 'Notify me when the new design job is added'},
]

export default function NotificationSetting({setNotification, notification}){

    const [checked, setChecked] = useState(notification);
    
    const checkedItem = (idx) => {
        let newChecked = [...checked];
        newChecked[idx] = !checked[idx];
        setChecked(newChecked);
    }

    useEffect(() => {
        setNotification(checked);
    }, [checked, setNotification])

    return (
        <Styles>
            <div className="notification-setting-container">
                <div className="notification-body">
                    <div className='notification-info'>Notification Settings</div>
                    {checkLs.map((item, idx) => 
                        <CustomedCheckBox 
                            label={item.label} 
                            idx={idx} 
                            isChecked={checked[idx]} 
                            key={idx} 
                            checkedItem={checkedItem}
                        />)}
                </div>
            </div>
        </Styles>
    )
}