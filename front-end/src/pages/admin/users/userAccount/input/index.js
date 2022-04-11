import { Styles } from "./inputStyle";


export default function CustomedInput({ label, inputValue, inputHandler, placeholderName, type }){
    return (
        <Styles>
            <div className="input-label">{label}</div>
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