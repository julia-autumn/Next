import {Navigation} from "./Navigation";
import '../app/globals.css';

const navItems = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
]

export const TheHeader = () => {
    return (
        <header className="header">
            <Navigation navLinks={navItems} />
            
        </header>
    )
}
