

fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(function (myJson){
        console.log(myJson)

        for (var i= 0; i < myJson.length; i++) {
            const grille = document.getElementById("grille")



            let card = document.createElement("div")
            card.id = "card" + i
            card.classList.add('max-w-sm', 'rounded','overflow-hidden', 'shadow-lg', 'gap-4', 'p-5', 'bg-neutral-300', 'carte', 'parent')
            grille.appendChild(card) // On crée les cartes qui vont permettre de contenir les infos sur les films

            let divimage = document.createElement("img")
            divimage.classList.add('baniere', 'child1')
            divimage.text = `${myJson[i].image}`
            card.appendChild(divimage).src = divimage.text

            let divname = document.createElement("div")
            divname.text = `Title : ${myJson[i].title}`
            divname.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'font-bold', 'title'  )
            card.appendChild(divname).innerHTML = divname.text

            let divrelease_date = document.createElement("div")
            divrelease_date.text = `Date de sortie : ${myJson[i].release_date}`
            divrelease_date.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'font-bold'  )
            card.appendChild(divrelease_date).innerHTML = divrelease_date.text

            let divdirector = document.createElement("div")
            divdirector.text = `Director : ${myJson[i].director}`
            divdirector.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'font-bold'  )
            card.appendChild(divdirector).innerHTML = divdirector.text

            let divdescription = document.createElement("div")
            divdescription.text = `${myJson[i].description}`
            divdescription.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'description', 'child1', 'child2')
            card.appendChild(divdescription).innerHTML = divdescription.text
        }

    })