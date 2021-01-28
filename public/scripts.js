const receitas = document.querySelectorAll('.card')

for(let receita of receitas){
    receita.addEventListener("click", ()=> {
    const recipeIndex = receita.getAttribute("id")
    window.location.href = `/recipes/${recipeIndex}`
        
    })
}

// Show and Hide
const recipeInfo = document.querySelectorAll(".topic-content")
const spans = document.querySelectorAll(".span")

for(let i = 0; i < spans.length; i++) {

    spans[i].addEventListener("click", function() {
        if (recipeInfo[i].classList.toggle('hide')) {
            recipeInfo[i].classList.add('hide')
            recipeInfo[i].classList.remove('show')

            spans[i].innerHTML = "show"
        } else {
            recipeInfo[i].classList.add('show')
            recipeInfo[i].classList.remove('hide')
            spans[i].innerHTML = 'hide'
        }
    })
}