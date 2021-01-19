const receitas = document.querySelectorAll('.card')

for(let receita of receitas){
    receita.addEventListener("click", ()=> {
    const recipeIndex = receita.getAttribute("id")
    window.location.href = `/recipes/${recipeIndex}`
        
    })
}

/* const recipeCard = document.querySelectorAll('.card')

for(let i = 0; i < recipeCard.length; i++) {
    recipeCard[i].addEventListener("click", () => {
        window.location.href = `/recipes/${i}`
    })
} */