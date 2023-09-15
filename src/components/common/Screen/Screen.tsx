import React from 'react'

interface ScreenInterface extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: React.ReactNode,
}

export const Screen = ({id, children, style}: ScreenInterface )=> {
    return (
    <div id={id} style={{ width: '100%', height: '100vh' , ...style}}>
        {children}
    </div>
  )
}
