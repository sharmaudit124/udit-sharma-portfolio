import { GITHUB_URL, INSTA_URL, LINKEDIN_URL, TWITTER_URL } from "@/assets/constants/constants";
import { Github, Instagram, Linkedin, X } from "lucide-react"

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

function Socials({ containerStyles, iconStyles }: SocialsProps) {
  const icons = [
    {
      path: LINKEDIN_URL,
      name: <Linkedin />
    },
    {
      path: GITHUB_URL,
      name: <Github />
    },
    {
      path: INSTA_URL,
      name: <Instagram />
    },
    {
      path: TWITTER_URL,
      name: <X />
    },
  ]
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <a href={icon.path} key={index} target="_blank">
          <div className={`${iconStyles}`}>{icon.name}</div>
        </a>
      })}
    </div>
  )
}


export default Socials