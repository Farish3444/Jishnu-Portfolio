import React,{useState} from 'react'
import jishnu from '../../assets/dffg-1@2x.png'
import redbackground from '../../assets/dffg-2@2x.png'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles,darkTheme,ligthTheme } from './theme';


const StyledApp = styled.div `
color:${(props)=>props.theme.fontColor};
`;

const Body = () => {

    const [theme, setTheme] = useState("light");
    const [buttontext, setButtontext] = useState(false);

    const themeToggler =()=>{
        theme ==="light" ? (setTheme("dark")):setTheme("light");
    };

    const lightTheme = {
        body:'#fff',

    }

    return (
        <ThemeProvider theme={theme=== "light" ? ligthTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
                <button onClick={()=>{themeToggler();setButtontext(!buttontext)}}>{buttontext ? "☀":"☾" }</button>
            <div className="jishnu">
                <img 
                    src={jishnu}
                />
            </div>    
            <div className="redbackground">
                <img 
                    src={redbackground}
                />
            </div>    
        </StyledApp>

        </ThemeProvider>
    )
}

export default Body
