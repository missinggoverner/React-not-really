const createElement = (type, props, ...children) => {
    return {
        type, 
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object" ? child : createTextElement(child)
            )
        }
    }
}

const  createTextElement = (text) => {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text, 
            children:[]
        }
    }
}



// let container = createElement("div", {className: "check", id: "id"}, "Hello")
// console.log(JSON.stringify(container))