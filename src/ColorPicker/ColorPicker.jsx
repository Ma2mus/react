import React, {useState} from "react";
import styles from "./ColorPicker.module.css"

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) =>{
        setColor(event.target.value);
    }
    return(
        <div>
            <div id={styles.displayColorContainer} style={{backgroundColor: color}}>
                <p className={styles.displayColorText}>Selected Color: {color}</p>
            </div>
            <label>Select color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}
export default ColorPicker