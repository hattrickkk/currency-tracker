import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

type PropsType = {
    path: string
    title: string
    className: string
    onClick?: () => void
}

function LinkItem({ path, title, className, onClick }: PropsType) {
    return (
        <li key={path} className={className}>
            <Link to={path} onClick={onClick}>
                {title}
            </Link>
        </li>
    )
}

LinkItem.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default React.memo(LinkItem)
