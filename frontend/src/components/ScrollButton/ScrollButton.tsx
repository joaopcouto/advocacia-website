import React, {useState} from 'react';
import './styles.css';
import arrowUp from '../../assets/icons/caret-up-thin.svg';

const ScrollButton: React.FC = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='scroll-button' onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}}>
            <img src={arrowUp} alt="Scroll to Top"/>
        </button>
    );
}

export default ScrollButton