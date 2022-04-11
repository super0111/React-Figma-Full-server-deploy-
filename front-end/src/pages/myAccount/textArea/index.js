import { Styles } from "./textAreaStyle";

export default function CustomedTextArea({ inputValue, inputHandler, placeholderName }){
    return (
        <Styles>
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