const cep = document.getElementById('cep')

//Função que limpa o valor dos inputs
function limpar() {
  if(cep.value.length === 8) cep.value = ""
  document.getElementById('logradouro').value = ""
  document.getElementById('bairro').value = ""
  document.getElementById('localidade').value = ""
  document.getElementById('uf').value = ""
}

function buscarCep() {
  if(cep.value.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, { method: "GET" })
        .then(data => data.json()
            .then((end) => {
                if (end.erro) throw "Cep inválido"
                console.log(end)
                document.getElementById('logradouro').value = end.logradouro
                document.getElementById('bairro').value = end.bairro
                document.getElementById('localidade').value = end.localidade
                document.getElementById('uf').value = end.uf
            }))
        .catch(err => alert(err))
  } else if(cep.value.length > 8) {
    alert("Não é permitido inserir mais de 9 caracteres...")
    limpar() 
  } else if(cep.value.length < 8) {
    limpar() 
  } else {
    return null
  }
}
