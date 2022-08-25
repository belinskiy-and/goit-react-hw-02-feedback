import styled from "styled-components";

export const Button = styled.button`
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.button};
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    min-width: 100px;
    height: 35px;
    cursor: pointer;
    text-transform: capitalize;

    &:not(:last-child) {
        margin-right: ${p => p.theme.space[3]}px;
    }

    &:hover {
        background-color: ${p => p.theme.colors.buttonHover};    
    }
`;
