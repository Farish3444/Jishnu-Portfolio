import React,{useState} from 'react'
import Logo from '../assets/logoblack.png';
import mainFrame from '../assets/hero.png';
import arrow from '../assets/arrowred.png';
import workport from '../assets/heroroundblack.png';
import slash  from '../assets/slash.png';
import facebookLogo from '../assets/facebookblack.png';
import linkedin from '../assets/linkedinblack.png';
import insta from '../assets/instablack.png';
import be from '../assets/objects-5@2x.png';
import './Header.css';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles,darkTheme,ligthTheme } from './Body/theme';

const StyledApp = styled.div `
color:${(props)=>props.theme.fontColor};
`;

const h3Black = {
    color: "rgb(10, 5, 5)",
    marginLeft: "50%"
}

const h3White = {
    color:"white",
    marginLeft:'50%'
}

const Header = () => {
    
    const [theme, setTheme] = useState("light");
    return (
    // <ThemeProvider theme={theme==="light"}>
        <div>
            <img  src={Logo} alt="" />
            <h3 style={h3Black} >About me  |  Work  |  Service  |  Contact </h3>
            <div className="mainFrame">
            <img 
            src={mainFrame} 
            alt="mainFrame" 
            />
            </div>
            <div className="arrow">
            <img src={arrow}  />
            </div>
            <div className="workport">
            <img src={workport} />
            </div>
            <div className="slash">
            <img src={slash} />
            </div>
            <h1 style={{fontSize:'100px'}} className='hello'>Hello</h1>
            {/* <h1 style={{fontSize:'100px',color:'#c6c6cc'}}>01</h1> */}
            <br/>
            <p>we help your brand elevate and reach</p>
            <div className="facebooklogo">
            <img 
                src={facebookLogo}
                alt="facebooklogo"
            />
            </div>

            <div className="linkedin">
            <img 
                src={linkedin}
            />
            </div>

            <div className="insta">
                <img 
                    src={insta}
                />
            </div>

            <div className='be'>
                <img 
                    src={be}
                />
            </div>
       </div>
      
    )
}

export default Header
