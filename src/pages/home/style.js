import { styled } from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    height: 190vh;
    gap: 100px;
`
export const HeaderHomeContainerStyle = styled.header`
    background-color: black;
    width: 100vw;
    height: 10vh;
    max-height: 150px;
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
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    background-color: #ffffff;
    gap: 50px;
`
