const receitas = document.querySelectorAll('.card')

for(let receita of receitas){
    receita.addEventListener("click", ()=> {

        const urlID = receita.getAttribute("id")
        
        window.location.href = `/recipes/${urlID}`
        
    })
}
// Eu criei uma variavel receitas
// depois dentro de um laco for criei um array que vai puxar o id das receitas do data
//e quando clicado vai abrir uma janela de recipes com o indexOf das receitas dentro do array do data.js