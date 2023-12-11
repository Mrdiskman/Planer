import { CreateItems } from "../../components/createItems";
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
                animate={{ opacity: 1, scale: 1,}}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    >
                    <motion.h1 
                    initial={{opacity:0.6}}
                    style={{cursor:"pointer", color:"red"}}
                    transition={{duration:1.5}}
                    whileHover={{opacity:1, x:5}}
                    >
                        To Do List
                    </motion.h1>
                </motion.div>
            </HeaderHomeContainerStyle>
            <MainHomeContainer>
                <CreateItems/>
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