import { CardTech } from "./CardTech";
import html from "@/assets/techs/html5-2.svg"
import css from "@/assets/techs/css-4.svg"
import express from "@/assets/techs/express-109.svg"
import nest from "@/assets/techs/nestjs.svg"

export function Competences() {
  return (
    <div id="competences" className="flex flex-col items-center">
      <h1 className="text-3xl mb-3">Competências</h1>
      <div className="flex items-center justify-center gap-4">
        <CardTech name="HTML 5" image={html} />
        <CardTech name="CSS 3" image={css} />
        <CardTech name="Espress JS" image={express} />
        <CardTech name="Nest JS" image={nest} />
      </div>
    </div>
  )
}