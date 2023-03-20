// PEGA A DIV ROOT DA TELA
const root = document.querySelector('#root')

//DECLARA A CONTANTE PARA PEGA O CONTEÚDO
const textTitle = 'Dificuldade'


/* 
    Tagged Tamplade String
    -> É UMA FUNÇÃO QUE AGENTE PASSA NA FRENTE DELA UMA Tamplade String

        NESSA TEMPLADE STRING, A gente pode usar String e Interpolando quando a gente quiser variaveis ou métodos JavaScript ou Uma String do JavaScript

*/
const title = Title`
    text-align: center; 
    color: #f6f6f6; 
    padding: 20px;
    font-size: 3em;
    background: royalblue;
    ${textTitle}
`


root.insertAdjacentHTML("beforeend", title)

