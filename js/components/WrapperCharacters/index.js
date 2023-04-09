const pathKawaiURL = 'img/kawai1.png'

const iconGirl = Character`
    width: 20%;
    ${pathKawaiURL}
`

const WrapperCharacter = (css, clildren) => (
    `<div style="${css}">${clildren}</div>`
)

const wrapperCharacter = WrapperCharacter `
    display: flex;
    justify-content: space-evenly;
    ${iconGirl + iconGirl + iconGirl}
`

