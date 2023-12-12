let login = '', senha, qtdHA = 0, totalCompraHa = 0, valor = 0, totalGeral = 0
let cesta, qtdThor = 0, totalCompraThor = 0, qtdHulk = 0, totalCompraHulk = 0, qtdHF = 0, totalCompraHF = 0, qtdCA = 0, totalCompraCA = 0, qtdCM = 0, totalCompraCM = 0

function abreTelaLogin(){
    login = prompt("Login: ")
    senha = prompt("senha: ")
    document.getElementById("login").innerHTML = `Bem-vindo, ${login}`
}

function compraHA(){
    qtdHA = parseInt (Document.getElementById("qtd-1").value)
    totalCompraHa = qtdHA * parseFloat(document.getElementById("ha"))
}

function calculaCesta(){
    if(login != ''){
        alert(`${qtdHA} * Boneco Homem-Aranha R$ ${totalCompraHa.toFixed(2)}
        ${qtdThor} * Boneco Thor R$ ${totalCompraThor.toFixed(2)}
        ${qtdHulk} * Boneco Hulk R$ ${totalCompraHulk.toFixed(2)}
        ${qtdHF} * Boneco Homem de Ferro R$ ${totalCompraHF.toFixed(2)}
        ${qtdCA} * Boneco Capitão América R$ ${totalCompraCA.toFixed(2)}
        ${qtdCM} * Boneca Capitã Marvel R$ ${totalCompraCM.toFixed(2)}
        ________________________________
        Total Compra: R$ ${(totalCompraHa + totalCompraThor + totalCompraHulk + totalCompraHF + totalCompraCA
         + totalCompraCM).toFixed(2)}`)
    } else {
        alert("Você não está logado")
    }

}

