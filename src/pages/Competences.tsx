import { CaretLeftIcon, CaretRightIcon} from "@radix-ui/react-icons";

import { CardTech } from "../components/CardTech";
import html from "@/assets/techs/html5-2.svg"
import css from "@/assets/techs/css-4.svg"
import express from "@/assets/techs/express-109.svg"
import nest from "@/assets/techs/nestjs.svg"
import expo from "@/assets/techs/expo-1.svg"
import nextjs from "@/assets/techs/next-js.svg"
import prisma from "@/assets/techs/prisma-3.svg"
import typescript from "@/assets/techs/typescript-2.svg"
import react from "@/assets/techs/react-1.svg"
import reactNative from "@/assets/techs/react-native-1.svg"
import tailwindCss from "@/assets/techs/tailwind-css-2.svg"
import JavaScript from "@/assets/techs/javascript-2.svg"

export function Competences() {
  return (
    <div id="competences" className="flex flex-col items-center">
      <h1 className="text-3xl mb-16">Competências</h1>
      <div className="flex flex-row items-center justify-center space-x-2">
        <CaretLeftIcon 
          width={200} 
          height={200}
          className="text-purple-700 -mt-14" 
        />

        <div className="w-[700px] h-[250px] flex flex-row overflow-x-scroll gap-4">
          <CardTech name="HTML 5" image={html} />
          <CardTech name="CSS 3" image={css} />
          <CardTech name="Espress JS" image={express} />
          <CardTech name="Nest JS" image={nest} />

          <CardTech name="Expo" image={expo} />
          <CardTech name="Next JS" image={nextjs} />
          <CardTech name="Prisma" image={prisma} />
          <CardTech name="TypeScript" image={typescript} />

          <CardTech name="React JS" image={react} />
          <CardTech name="TailwindCss" image={tailwindCss} />
          <CardTech name="React Native" image={reactNative} />
          <CardTech name="JavaScript" image={JavaScript} />
        </div>

        <CaretRightIcon 
          width={200} 
          height={200} 
          className="text-purple-700 -mt-14" 
        />
      </div>
    </div>
  )
}