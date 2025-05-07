import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Subject({ subject }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prev => !prev);
  }

  function getSubjectContent(subj) {
    switch (subj) {
      case "Обектно-ориентирано програмиране":
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
      case "Операционни системи":
        return(
          <div>
            <label>
              <a href="https://os.qtrp.org/os-problems.pdf">Сборник</a>
            </label>
          </div>
        )
      case "Статистика и емпирични методи":
        return(
          <div>
            <ul>
              <li>
                <a href="https://github.com/andy489/Empirical_Methods_and_Statistics" target="_blank">Гитхъб на Анди</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=PC1DXtAdI6c&list=PL7xl2HXTYasImKZoBC4aNTU4U3NvLpRDS" target="_blank">СЕМ упражнения - Мартин Минчев 2021</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=rYE-2qCjlB0&list=PL7xl2HXTYasLBgU-vltJCS9ufpcozYB2-" target="_blank">СЕМ упражнения - Мартин Минчев 2020</a>
              </li>
              <li>
                <a href="https://unisofiafaculty-my.sharepoint.com/personal/mjminchev_office365faculty_uni-sofia_bg/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmjminchev%5Foffice365faculty%5Funi%2Dsofia%5Fbg%2FDocuments%2FTeaching%2FVIS%2C%20SEM%2F%D0%A1%D0%95%D0%9C%20%D0%92%D0%B8%D0%A1%20shared&ga=1" target="_blank">Стари домашни,контролни и изпити</a>
              </li>
            </ul>
          </div>
        );
      case "Web програмиране":
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
        case "FrontEnd":
          return(
            <div>
              <ol>
                <li>
                  <a href="https://www.youtube.com/watch?v=1PnVor36_40&list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si" target="_blank">CSS</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=YszONjKpgg4&list=PLZlA0Gpn_vH8mpXIUHjWoMAAgoCEinL0R" target="_blank">Even more CSS</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=YeFzkC2awTM&list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6" target="_blank">Javascript</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=1wZoGFF_oi4&list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK" target="_blank">React</a>
                </li>
              </ol>

            </div>
          )
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
