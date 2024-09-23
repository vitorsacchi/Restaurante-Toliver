document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const pedido = document.getElementById('pedido').value.trim();

    if (nome && telefone && pedido) {
        alert('Obrigado, ' + nome + '! Seu pedido foi enviado.');

       document.getElementById('pedido-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
);


document.getElementById('pedido-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const pedido = document.getElementById('pedido').value.trim();

    if (nome && telefone && pedido) {
        
        console.log({ nome, telefone, pedido });
        alert('Obrigado, ' + nome + '! Seu pedido foi enviado.');
        document.getElementById('pedido-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('contato-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('contato-nome').value.trim();
    const email = document.getElementById('contato-email').value.trim();
    const telefone = document.getElementById('contato-telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && email && telefone && mensagem) {
        console.log({ nome, email, telefone, mensagem });
        alert('Obrigado, ' + nome + '! Sua mensagem foi enviada.');
        document.getElementById('contato-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
