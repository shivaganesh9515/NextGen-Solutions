'use client'

import React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: React.CSSProperties
}

const StyledButton = ({ children, onClick, type = 'button', className, style }: StyledButtonProps) => {
  return (
    <StyledWrapper className={className} style={style}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 17px 40px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: white;
    color: black;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    transition: 
      all 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      letter-spacing 0.4s ease-out,
      background-color 0.3s ease-out,
      box-shadow 0.4s ease-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    min-height: 54px;
    transform: translateY(0) scale(1);
    will-change: transform, box-shadow, letter-spacing, background-color;
    overflow: hidden;
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.8s ease-out;
    z-index: 1;
  }

  button > * {
    position: relative;
    z-index: 2;
  }

  button:hover {
    letter-spacing: 2.5px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: 
      rgb(93 24 220) 0px 5px 20px 0px,
      0 0 25px rgba(93, 24, 220, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateY(-3px) scale(1.03);
    animation: gentle-pulse 2.5s ease-in-out infinite;
  }

  button:hover::before {
    left: 100%;
    transition: left 0.8s ease-out;
  }

  button:active {
    letter-spacing: 2.5px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(2px) scale(0.99);
    transition: all 0.1s ease-out;
    animation: none;
  }

  button:focus {
    outline: none;
    letter-spacing: 2px;
    box-shadow: 
      rgb(93 24 220) 0px 5px 20px 0px,
      0 0 0 3px rgba(139, 92, 246, 0.3);
    transition: all 0.3s ease-out;
  }

  @keyframes gentle-pulse {
    0%, 100% {
      box-shadow: 
        rgb(93 24 220) 0px 5px 20px 0px,
        0 0 25px rgba(93, 24, 220, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 
        rgb(93 24 220) 0px 7px 25px 2px,
        0 0 35px rgba(93, 24, 220, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
  }
`

export default StyledButton