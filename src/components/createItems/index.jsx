import { AnimatePresence, motion, usePresence, useWillChange } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { BoxStyle, CreateContainer } from "./style";


function Box() {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
      if (!isPresent) {
        gsap.to(ref.current, {
          opacity: 0,
          onComplete: () => safeToRemove?.()
        });
      }
    }, [isPresent, safeToRemove]);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  
    return (
        <BoxStyle ref={ref}>
          <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
            <input defaultValue="Exercicio" {...register("name")} />
            <input defaultValue="25/12" {...register("expiresIn")} />
            <button type="submit" className="sendForm">Enviar</button>
          </form>
        </BoxStyle>
    )
  }

export function CreateItems() {
      const [show, setShow] = useState(true);
    
      return (
        <CreateContainer>
          <div className="controls">
            <motion.button
              transition={{duration:0.5}}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Fechar" : "Criar Nova Tarefa"}
            </motion.button>
          </div>
          <AnimatePresence>{show ? <Box /> : null}</AnimatePresence>
        </CreateContainer>

      )
}