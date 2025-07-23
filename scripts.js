//Cotação de moedas do dia
const USD = 5.57
const EUR = 6.49
const GBP = 7.47

// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g  
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
      case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
      case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
      case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula o total
    let total = amount * price

    // formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "")

    // exibe o resultado total
    result.textContent =  `${total} Reais`
    
    // aplica a classe que exibe o footer com resultado
    footer.classList.add("show-result")

  } catch (error) {
    // remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")

    console.log(error)

    alert("Não foi possível realizar a conversão. Tente novamente mais tarde.")
  }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // converte para numero para usar o tolocalestring para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}