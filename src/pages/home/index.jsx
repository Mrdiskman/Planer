import { List } from "../../components/list";
import { HeaderHomeContainerStyle, HomePageContainer, MainHomeContainer } from "./style";
import { motion, useWillChange } from "framer-motion";

export function Home(){
    const willChange = useWillChange()
    return(
        <HomePageContainer>
            <HeaderHomeContainerStyle>
                <motion.div
                className="animationContainer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    >
                    <h1>To Do List</h1>
                </motion.div>
            </HeaderHomeContainerStyle>
            <MainHomeContainer>
                <motion.div
                    className="animationContainer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]}}>
                    <List/>
                </motion.div>
            </MainHomeContainer>
        </HomePageContainer>
    )
}