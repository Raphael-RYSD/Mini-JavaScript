const css = `<style>
    * {
        margin: 0;
        padding: 0;
        border: none;
    
    }
    
    body {
        background-color: #222f3e;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    #root {
        box-sizing: border-box;
        background-color: #5f27cd;
        box-shadow: 0px 0px 6px #00000025;

        border-radius: 8px;
        padding-top: 45px;

        width: clamp(30px, 90vw, 768px);
        height: 70vh;

        font-family: var(--font-d);
        text-align: center;
    }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)