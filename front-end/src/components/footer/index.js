import { Styles } from './style/footerStyle';

export default function Footer(){
    return (
        <Styles>
            <div className='footer-before-container'>
                <div className='footer'>
                    <div className='terms'>TERMS</div>
                    <div className='privacy'>PRIVACY</div>
                    <div className='copyright'>@2022 TOP TOP DESIGN</div>
                </div>
            </div>
        </Styles>
      );
}