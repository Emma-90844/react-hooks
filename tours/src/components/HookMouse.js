import React, {useState , useEffect} from 'react'


function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    } 

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        
        //Clean up Effect
        return () => {
            console.log('Component unmounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>

            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
