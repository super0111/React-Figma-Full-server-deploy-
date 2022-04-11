import { Styles } from "./inputStyle";


export default function CustomedInput({ inputValue, inputHandler, placeholderName, type }){
    return (
        <Styles>
            <input
                type={type?type:'text'}
                required={type==='email'?true:false}
                className='customed-input'
                onChange={e => inputHandler(e.target.value)}
                value={inputValue}
                placeholder={placeholderName}
            />
        </Styles>
    )
}