import { Github, Instagram, Linkedin, X } from "lucide-react"

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

function Socials({ containerStyles, iconStyles }: SocialsProps) {
  const icons = [
    {
      path: "/",
      name: <Linkedin />
    },
    {
      path: "/",
      name: <Github />
    },
    {
      path: "/",
      name: <Instagram />
    },
    {
      path: "/",
      name: <X />
    },
  ]
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <a href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </a>
      })}
    </div>
  )
}


export default Socials