import { Linkedin, Github, Download } from "lucide-react";

export function Profile() {
  return (
    <div id="profile" className="flex flex-row items-center justify-center gap-4">
      <div className="w-[350px] space-y-4">
        <h1 className="text-3xl">Perfil</h1>
        <p className="leading-relaxed">Sou um desenvolvedor full-stack altamente experiente e apaixonado pela criação de soluções inovadoras. Com 1 anos de experiência em desenvolvimento web, tenho um profundo conhecimento em várias linguagens de programação, frameworks e tecnologias modernas. Meu objetivo é criar aplicações robustas, escaláveis e de alto desempenho, entregando experiências excepcionais aos usuários.</p>
        <div className="flex gap-2 items-center">
          <a
            download
            target="_blank"
            rel="noreferrer"
            href="../../src/resources/cv-aderito-rafael.pdf"
            className="flex bg-purple-500 p-2 rounded "
          >
            Baixar CV
            <Download className="ml-2" />
          </a>

          <a 
            href="https://www.linkedin.com/in/ad%25C3%25A9rito-rafael-503602251/"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-500 p-2 rounded"
          >
            <Linkedin />
          </a>

          <a 
            href="https://github.com/aderitorafael16"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-500 p-2 rounded"
          >
            <Github />
          </a>
        </div>
      </div>
      <div className="w-[400px] h-[400px] bg-[url(./assets/me.jpeg)] bg-cover border-8 border-purple-500 rounded-full "/>
    </div>
  )
}