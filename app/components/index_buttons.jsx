import Link from "next/link"
import HomeIcon from "@mui/icons-material/Home"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import PhoneIcon from "@mui/icons-material/Phone"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import BookIcon from "@mui/icons-material/Book"

const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <HomeIcon className="w-full h-auto" />
            break
        case "about":
            return <AccountCircleIcon className="w-full h-auto" />
            break
        case "projects":
            return <ColorLensIcon className="w-full h-auto" />
            break
        case "contact":
            return <PhoneIcon className="w-full h-auto" />
            break
        case "github":
            return <GitHubIcon className="w-full h-auto" />
            break
        case "linkedin":
            return <LinkedInIcon className="w-full h-auto" />
            break
        case "cv":
            return <BookIcon className="w-full h-auto" />
            break
        default:
            break;
    }
}

const IndexButtons = ({ x, y, label, link, icon, newTab }) => {
    return (
        <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x}, ${y})` }}>
            <Link href={link} target={newTab ? "_blank" : "_self"} className="text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent border-solid backdrop-blur-[10px] shadow-glass-inset" aria-label={label} name={label}>
                <span className="relative w-14 h-14 p-4">
                    {
                        getIcon(icon)
                    }
                </span>
            </Link>
        </div>
    )
}

export default IndexButtons