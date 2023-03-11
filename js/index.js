const root = document.querySelector('#root')

// cha inperpolação
function newElement(tag, content) {
    const title = `<${tag}>${content}</${tag}>`
    root.insertAdjacentHTML('beforeend', title)

}

newElement('h1', 'Aita')
newElement('h4', 'A, vá');

