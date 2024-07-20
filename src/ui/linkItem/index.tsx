import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    path: string
    title: string
    className: string
    onClick?: () => void
}

function LinkItem({ path, title, className, onClick }: Props) {
    return (
        <li key={path} className={className}>
            <Link to={path} onClick={onClick}>
                {title}
            </Link>
        </li>
    )
}

export default React.memo(LinkItem)
