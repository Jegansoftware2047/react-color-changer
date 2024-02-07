import React from "react";
const Square=({colorvalue,hexvalue,isDarkText})=>{
    return(
        <section
        className="square"
        style={{
            backgroundColor :colorvalue,
            color : isDarkText?"#000":"#FFF"
        }}
        >
            <p>{colorvalue ? colorvalue :"Type your fav color"}</p>
            <p>{hexvalue ? hexvalue : null}</p>

        </section>
    )
}
Square.defaultProps={
    colorValue:"Empty Color value"
}
export default Square