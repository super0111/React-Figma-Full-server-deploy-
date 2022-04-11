import { Styles } from "./style/imageViewerStyle";
import IconButton from '@mui/material/IconButton';
import { ReactComponent as CloseIcon } from '../../../../assets/img/user/collection/cover_close.svg';

export default function ImageViewer({info, index, closeItem}){

    return (
        <Styles>
            <div className="image-container">
                {info !== '' &&
                    <>
                        <img src="/img/user/collection/collection.png" alt="" className="image" />
                        <div className="overlay">
                            <div className="overlay-image"></div>
                            <IconButton 
                                aria-label="delete"
                                className="close-btn"
                                onClick={() => closeItem(index)}
                            >
                                <CloseIcon className="close-icon"/>
                            </IconButton>
                        </div>
                    </>}
            </div>
        </Styles>
    )
}