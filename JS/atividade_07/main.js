function lista_cidade() {
    const estado = document.getElementById('estado').value;
    const cidade_container = document.getElementById('cidade_lista'); 
    const cidade_select = document.getElementById('cidade'); 
    if (estado != '') {
        //cidade_container.style.display = 'block'; 

        const cidades_por_estado = {
            "SP": ["São Paulo", "Campinas", "Santos", "Ribeirão Preto"],
            "MG": ["Belo Horizonte", "Uberlandia", "Uberaba", "Araguari"],
            "RJ": ["Rio de Janeiro", "Petropolis", "Paraty"],
            "ES": ["Vitoria"]
        };       
        cidade_select.innerHTML = '<option value="">Escolha um Cidade</option>';
        
        const cidades = cidades_por_estado[estado];
        
        
        cidades.forEach(e => { 
            const option = document.createElement('option');
            option.value = e;
            option.textContent = e; 
            cidade_select.appendChild(option);
        });
    } else {
        cidade_container.style.display = 'none';
    }
}