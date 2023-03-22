// PEGA A DIV ROOT DA TELA
const root = document.querySelector('#root')

//DECLARA A CONTANTE PARA PEGA O CONTEÚDO
const textTitle = 'Dificuldade'

const path = '/img/Ativo3.png'

/* 
    Tagged Tamplade String
    -> É UMA FUNÇÃO QUE AGENTE PASSA NA FRENTE DELA UMA Tamplade String

        NESSA TEMPLADE STRING, A gente pode usar String e Interpolando quando a gente quiser variaveis ou métodos JavaScript ou Uma String do JavaScript

*/
const title = Title`
    color: #c8d6e5;  
    font-size: 3em;
    letter-spacing: 2px;
    opacity: 0.8;
    ${textTitle}
`

const emojeoKawai = Character`
    tranform: scale(0.4);
    ${path}
`

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', path)
