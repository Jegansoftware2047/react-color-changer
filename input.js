
import colorNames from 'colornames'

const input=({
    colorvalue,setColorValue,setHexValue,isDarkText,
    setIsDarkText
})=>{
    return(
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add color name:</label>
        <input
        type='text'
        placeholder='add color names'
        required
        value={colorvalue}
        onChange={(e)=>{
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value))
        
        }}/>
        <button style={{ color: isDarkText === "active" ? "#F00" : "#00F" }} type='button'
        onClick={()=>setIsDarkText(!isDarkText)}>toggel text color</button>
    </form>
    )
}
export default input