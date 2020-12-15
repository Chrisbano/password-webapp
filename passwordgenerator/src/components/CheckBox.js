import {React ,useState} from 'react';
import './CheckBox.css';
// import Switch from '@material-ui/core/Switch';

const CheckBox = () => {
    const [isCheck, setIsCheck] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isCheck);
    }

    return(
        <div>
            <label class="container">One
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
        </div>  
    );
}

export default CheckBox;