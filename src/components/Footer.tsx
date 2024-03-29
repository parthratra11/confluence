import type { ReactNode } from "react";

export default function Footer({ children, className } : { children?: ReactNode, className?: string}) {
    return <footer className={className}>
        { children }
    </footer>
}