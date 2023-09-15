$(document).ready(function() {
    $('#botao-toggle').click(function() {
        $('form').slideToggle(); // Mostra  o formulário com animaçãozinha
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); // Oculta o formulário com animaçãozinha
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        console.log('submit');
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        
        if (enderecoDaNovaImagem) {
            const novoItem = $('<li style="display:none"></li>');
            $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);

            $(`
                <div class="overlay-imagem-link">
                    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                        Ver imagem em tamanho real
                    </a>
                </div>
            `).appendTo(novoItem);

            novoItem.appendTo('ul').fadeIn(500); 
            $('#endereco-imagem-nova').val('');
        }
    });
});
