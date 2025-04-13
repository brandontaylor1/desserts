import React from 'react'
import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';




const StyledDefaultButton = styled.button`
    border-radius: 50px;
    border: 1px solid var(--primary-rose-400);
    width: 160px;
    height: 44px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    cursor: pointer;
    positon: absolute;
    pointer-events: auto;
    margin-top: -22px;
    z-index: 10;

    &:hover {
        border: 1px solid var(--primary-red);
        color: var(--primary-red);
        backgroundc-color: white;
    }
`
const StyledDefaultCartButton = styled.button`
    width: 100%;
    height: 53px;
    margin-top: 8px;
    background-color: var(--primary-red);
    color: white;
    border-radius: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledActiveButton = styled.button`
    background-color: var(--primary-red);
    color: white;
    border-radius: 50px;
    border: none;
    height: 44px;
    width: 160px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    positon: absolute;
    pointer-events: auto;
    margin-top: -22px;
    z-index: 10;
`;

export const DefaultButton = ({ children, onClick }) => {
    return <StyledDefaultButton
        className='text-preset-4-bold gap-1'
        onClick={onClick}
    >
        <MdAddShoppingCart 
        size={20}
        style={{
            color: 'var(--primary-red)',
        }}/>
        {children}
        </StyledDefaultButton>
};

export const ActiveButton = ({ children, decrementCount, incrementCount }) => {
    return (
        <>
            <StyledActiveButton>
                <div>
                    <CiCircleMinus 
                        size={20}
                        style={{cursor: "pointer"}}
                        onClick={decrementCount}
                    />
                </div>
                    {children}
                    <div>
                    <CiCirclePlus 
                        size={20}
                        style={{cursor: "pointer"}}
                        onClick={incrementCount}
                    />
                    </div>
            </StyledActiveButton>
        </>
    )
  
};

export const CartButton = ({ children, onClick }) => {
    return <StyledDefaultCartButton
        className='text-preset-4-bold gap-1'
        onClick={onClick}
    >
        {children}
        </StyledDefaultCartButton>
}