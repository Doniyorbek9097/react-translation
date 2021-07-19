import React from "react";
import "./style.css";
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <h1>{t("paragraf.title")}</h1>
     <p>
       {t("header.0")}
     </p>
     
      <button onClick={() => handleClick("uz")}>uz</button>
      <button onClick={() => handleClick("en")}>en</button>
      <button onClick={() => handleClick("ru")}>ru</button>
    </div>
  );
}
