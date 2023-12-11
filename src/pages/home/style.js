import { styled } from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const HeaderHomeContainerStyle = styled.header`
    background-color: black;
    width: 100vw;
    height: 10vh;
    max-height: 90px;
    display: flex;
    justify-content: center;

    .animationContainer{
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }
`
export const MainHomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    background-color: #ffffff;
`
