const search_buscar = document.querySelector("#search_buscar")
const racas = document.querySelector(".racas")

function busca(str) {
    // const str = 'bull'
    str = str.toLowerCase()
    Array.from(racas.children).map(div => {
        const name = div.innerText.toLowerCase()
        if (!name.includes(str))
            div.style.display = 'none'
        else
            div.removeAttribute('style')
    })
}


search_buscar.addEventListener('keyup', () => {
    busca(search_buscar.value)
})