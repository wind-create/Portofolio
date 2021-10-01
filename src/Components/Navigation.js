import styled from 'styled-components'
import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/experience" activeClassName="active-class" exact>Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skills" activeClassName="active-class" exact>Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/interest" activeClassName="active-class" exact>Interest</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/awards" activeClassName="active-class" exact>Awards</NavLink>
                </li>
            </ul>
            <footer className="footer">
            </footer>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 3px solid var(--border-color);

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        widht: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color);
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &:before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(.97,-0.18,.08,.86);
                    z-index: 3;
                    opacity: 0.21;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
                
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 2rem 0 ;
            font-size: 0.5rem;
            display: block;
            text-align: center;
        }
    }

`;
export default Navigation
