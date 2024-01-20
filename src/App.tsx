import { Competences } from "./pages/Competences";
import { Profile } from "./pages/Profile";


export function App() {
  return (
    <div className="min-h-[100dvh] bg-[url(./assets/stars.svg)] bg-cover flex flex-col bg-gray-900 text-zinc-100">

    {/* Blur */}
    <div className="absolute left-0 top-0 h-[350px] w-[526px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-700  opacity-50 blur-full" />

      <header className="fixed w-full px-4 py-4 bg-gray-900 flex items-center justify-between border-b border-purple-500">
        <code className="text-2xl text-purple-500 font-bold">portfólio</code>
        <div className="flex items-center gap-3">
          <nav>
            <ul className="flex flex-row gap-3">
              <li><a className="px-4 py-2 border border-purple-600 rounded hover:bg-purple-900/50" href="profile">Perfil</a></li>
              <li><a className="px-4 py-2 border border-purple-600 rounded hover:bg-purple-900/50" href="competences">Competências</a></li>
              <li><a className="px-4 py-2 border border-purple-600 rounded hover:bg-purple-900/50" href="projects">Projectos</a></li>
              <li><a className="px-4 py-2 border border-purple-600 rounded hover:bg-purple-900/50" href="contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 flex-col p-6 mt-20 gap-40 items-center">
       <Profile />
       <Competences />
      </main>
    </div>
  )
}

