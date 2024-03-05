import React from 'react'
/*
function Greet() {
    return <h1>Hello Zymo</h1>
}
*/

const Greet = (props) => {
    const {name, language, children} = props
return (
    <div>
    <h1>Hello {name}!, You are about to start {language}.</h1>
    {children}
    </div>
)
}

export default Greet;