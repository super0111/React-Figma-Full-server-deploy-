import { Styles } from './style/inputStyle';

export default function Input({collectionName, setCollectionName}){

    const handleChange = (e) => {
        setCollectionName(e.target.value);
    }

    return (
        <Styles>
            <input
                className='input'
                onChange={e => handleChange(e)}
                value={collectionName}
                placeholder=""
                maxLength="64"
            />
        </Styles>
    )
}