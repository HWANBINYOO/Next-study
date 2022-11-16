import { NextPage } from 'next';
import styled from "@emotion/styled";

const Header:NextPage = () => {

    return (
        <Wapper>
            <HeaderTitle>
                Face Analyzer
            </HeaderTitle>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 140px;
    background-color:#222831;
     
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.p`
    font-size: 50px;
    color: white;
    font-weight: bold;
`;

export default Header;

