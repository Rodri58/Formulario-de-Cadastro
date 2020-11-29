class Cliente {
    constructor() {
        this.clientes = localStorage.getItem('tbClientes') === null
        ? []
        : JSON.parse(localStorage.getItem('tbCliente'))
    }

    salva(cliente){
        //o registro esta sendo editado?
        if(document.getElementById('CPFPassaporte').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.CPFPassaporte)
        }
        this.clientes.push(cliente) //adiciona um novo elemento no array
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente =>mcliente.CPFPassaporte == codigo)
        this.clientes.splice(index,1) //index é o elemento do array
        //salvamos a alteração
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    edita(cliente){
        document.getElementById('CPFPassaporte').setAttribute('disabled','disabled')
        document.getElementById('CPFPassaporte').value = cliente.CPFPassaporte
        document.getElementById('NomeCompleto').value = cliente.NomeCompleto
        document.getElementById('DatadeNascimento').value = cliente.DatadeNascimento
        document.getElementById('Telefone').value = cliente.Telefone
    }

    lista(){
        const listagem = this.clientes.map((cliente)=> (
            `<tr>
            <td>${cliente.CPFPassaporte}</td>
            <td>${cliente.NomeCompleto}</td>
            <td>${cliente.DatadeNascimento}</td>
            <td>${cliente.Telefone}</td>
            <td>
                 <button id='apaga' onclick='cliente.apaga(${cliente.CPFPassaporte})'>
                 🗑️Apaga</button>
                 <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                 ✏️Editar</button>
            </td>
            </tr>
            `
        ))
        return(`<table border='1' class='steelBlueCols'>
        <caption>Relação dos Clientes</caption>
        <thead>
          <th>CPF/Passaporte</th> <th>Nome Completo</th> <th>Data de Nascimento</th> <th>Telefone</th>
          </thead>
          <tbody>${listagem}</tbody>
          </table>
          `)

    }

    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function () {
    const registro = {
        brasileiro: document.getElementById('brasileiro').value,
        estrangeiro: document.getElementById('estrangeiro').value,
        CPFPassaporte: document.getElementById('CPFPassaporte').value,
        NomeCompleto: document.getElementById('NomeCompleto').value,
        Masculino: document.getElementById('Masculino').value,
        Feminino: document.getElementById('Feminino').value,
        DatadeNascimento: document.getElementById('Data de Nascimento').value,
        Telefone: document.getElementById('Telefone').value,
        Celular: document.getElementById('Celular').value,
        Email: document.getElementById('Email').value,
        ConfirmaçãodeEmail: document.getElementById('Confirmação de E-mail').value,
        CEP: document.getElementById(' CEP').value,
        Endereço: document.getElementById('Endereço').value,
        Numero: document.getElementById('Numero').value,
        Complemento: document.getElementById('Complemento').value,
        Bairro: document.getElementById('Bairro').value,
        Pais: document.getElementById('Pais').value,
        Estado: document.getElementById('Estado').value,
        Cidade: document.getElementById('Cidade').value,
        Senha: document.getElementById('Senha').value,
        ConfirmarSenha: document.getElementById('Confirmar Senha').value
    }
    cliente.salva(registro)
}
//tratamos a listagem
window.onload = function(){
    cliente.atualiza()
}


