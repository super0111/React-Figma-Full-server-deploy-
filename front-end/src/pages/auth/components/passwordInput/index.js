import { Styles } from "./passwordInputStyle";
import { ReactComponent as EyeIcon } from '../../../../assets/img/account/eye.svg';
import { ReactComponent as NonEyeIcon } from '../../../../assets/img/account/non_eye.svg';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

export default function PasswordInput({ inputValue, inputHandler, placeholderName }){
    const [view, setView] = useState(false);
    return (
        <Styles>
            <input
                type={view?"text":"password"}
                className='password-input'
                onChange={e => inputHandler(e.target.value)}
                value={inputValue}
                placeholder={placeholderName}
            />
            {inputValue &&
                <div className={!view?"eye-icon":"non-eye-icon"}>
                    {!view?(
                        <IconButton
                            onClick={() => setView(true)}
                        >
                            <EyeIcon />
                        </IconButton>
                    ):(
                        <IconButton
                            onClick={() => setView(false)}
                        >
                            <NonEyeIcon />
                        </IconButton>
                    )}
                    
                </div>
            }
        </Styles>
    )
}