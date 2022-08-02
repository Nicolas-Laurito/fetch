fetch(`https://criptoya.com/api/dolar`)
.then(response => response.json()) 
.then(({oficial, solidario})  =>{

    const divContenedor=document.getElementById(`divContenedor`)
    const ingPesos = document.getElementById(`ingPesos`)
    const btnCalc=document.getElementById(`btnCalc`)

    btnCalc.addEventListener(`click`, ()=>{

        let compraOficial= parseFloat(ingPesos.value/oficial).toFixed(2)
        let compraSol= parseFloat(ingPesos.value/solidario).toFixed(2)

        divContenedor.innerHTML+=`
            <p>Usted puede comprar u$s ${compraOficial} a valor Oficial </p>   
            <p>Usted puede comprar u$s ${compraSol} a valor Solidario</p>   
            `
    })
   
})

