import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Subject({ subject }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prev => !prev);
  }

  function getSubjectContent(subj) {
    switch (subj) {
      case "OOP":
        return(
            <div>
                <ul>
                    <li>
                        <a href="https://learn.fmi.uni-sofia.bg/pluginfile.php/544741/mod_resource/content/3/OOP_konspekt.pdf" target="_blank">Конспект</a>
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=3tIqpEmWMLI&list=PL7xl2HXTYasLxns8ZX_i_2BdGGRU1GWlA" target="_blank">The Cherno OOP playlist</a>
                    </li>
                </ul>
            </div>
        );
      case "OS":
        return <p>Skeleta</p>;
      case "SEM":
        return <p>Bate zabravi</p>;
      case "WEB":
        return(
            <ul>
                <li>Javascript домашно: 11.05</li>
                <li>Рецензии на реферати - няма дати</li>
                <li>Финална версия на реферат</li>
                <li>Групов проект</li>
            </ul>
        );
      case "Git":
        return (
            <ul>
                <li>Quiz 3: До 24.05</li>
                <li>Quiz 4: До 24.05</li>
            </ul>
        );
      case "Blockchain":
        return (
          <ul>
            <li>Домашно 1: 11.05</li>
            <li>Контролно 2: 14.05</li>
            <li>Домашно 2: 17.05</li>
            <li>Домашно 3: 25.05</li>
            <li>Контролно 3: 28.05</li>
          </ul>
        );
      case "Strawberry Prolog":
        return(
            <div>
                <p>Проект на тема по твой избор.Предай до края на Май месец за да не се занимаваш през сесията</p>
            </div>
        );
      
    }
  }

  return (
    <div style={{ margin: "1rem" }}>
      <button onClick={handleClick}>{subject}</button>

      <AnimatePresence>
        {isClicked && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: "0.5rem",
              color: "lightblue",
              backgroundColor: "#222",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            }}
          >
            {getSubjectContent(subject)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Subject;
