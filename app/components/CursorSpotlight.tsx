'use client'
import React, { useEffect, useState } from 'react'

const CursorSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [isVisible])

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
            style={{
                opacity: isVisible ? 1 : 0,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(94, 234, 212, 0.06), transparent 40%)`,
            }}
        />
    )
}

export default CursorSpotlight
