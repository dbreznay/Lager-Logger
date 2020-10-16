import React from 'react';

const style = {
    title:{
        "fontWeight":  "bolder",
        "textAlign" :  "center",
        "fontSize"  :  "4rem",
        "color"      :  "#ffc821",
        "textShadow":  "2px 2px 0px black",
        "marginBottom" :  "5px"
    },
    description:{
        "textAlign" :  "center",
        "fontSize"  :  "1.2rem",
        "color"      :  "white",
        "textShadow":  "1px 1px 1px black",
        "margin"    :  "0px"
    }
};

const MenuTitle = (props) => {
    return(
        <div>
            <h1 style={style.title}>
                CIRCLE OF DEATH
            </h1>
            <p style={style.description}>
                Play <b>Circle of Death</b> online with your friends. 
            </p>

        </div>        
    );
}
export default MenuTitle;