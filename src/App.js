import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import { Route, Switch as switching } from "react-router";
import AboutPage from "./Pages/AboutPage";
import ExperiencePage from "./Pages/ExperiencePage";
import SkillsPage from "./Pages/SkillsPage";
import InterestPage from "./Pages/InterestPage";
import AwardsPage from "./Pages/AwardsPage";
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Switch from '@mui/material/Switch';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false)
    } else {
      setTheme('light-theme');
      setChecked(true)
    }
  }
  return (
    <div className="App">
      <Sidebar />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness6Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <MainContentStyled>
        <switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/experience" exact>
            <ExperiencePage />
          </Route>
          <Route path="/skills" exact>
            <SkillsPage />
          </Route>
          <Route path="/interest" exact>
            <InterestPage />
          </Route>
          <Route path="/awards" exact>
            <AwardsPage />
          </Route>
        </switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 14.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 14.3rem;
  }
  
  
`;

export default App;
