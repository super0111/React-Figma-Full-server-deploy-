import { Styles } from "./textAreaStyle";

export default function CustomedTextArea({ label, inputValue, inputHandler, placeholderName }){
    return (
        <Styles>
            <div className="text-area-label">{label}</div>
            <textarea 
                className='cutomed-textarea'
                onChange={e => inputHandler(e.target.value)}
                value={inputValue}
                rows="5" 
                cols="100" 
                maxLength="150"
                placeholder={placeholderName}
            />
        </Styles>
    )
}