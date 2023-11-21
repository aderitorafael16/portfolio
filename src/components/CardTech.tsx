
interface ICardTechProps {
  name: string;
  image: string;
}

export function CardTech({name, image}: ICardTechProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-[200px] h-[200px] bg-purple-500 rounded-lg p-4">
      <div className="self-start">
        <h1 className="font-bold">{name}</h1>
      </div>
      <img width={100} src={image} alt={name} />
    </div>
  )
}