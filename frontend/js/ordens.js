const pedidos = [
    {
        "idPedido": 123,
        "tipoLeite": "Colostro",
        "quantidade": "339ml",
        "status": "Pendente",
        "maeReceptora": "Marta Almeida",
        "doadora": "Maria Santos",
        "data": "2024-03-13"
    },
    {
        "idPedido": 124,
        "tipoLeite": "Leite Materno",
        "quantidade": "104ml",
        "status": "Cancelado",
        "maeReceptora": "Isabel Mendes",
        "doadora": "Maria Santos",
        "data": "2024-02-09"
    },
    {
        "idPedido": 125,
        "tipoLeite": "Leite Materno",
        "quantidade": "496ml",
        "status": "Pendente",
        "maeReceptora": "Joana Oliveira",
        "doadora": "Juliana Rocha",
        "data": "2024-03-13"
    },
    {
        "idPedido": 126,
        "tipoLeite": "Leite Materno",
        "quantidade": "163ml",
        "status": "Pendente",
        "maeReceptora": "Joana Oliveira",
        "doadora": "Fernanda Lima",
        "data": "2024-03-11"
    },
    {
        "idPedido": 127,
        "tipoLeite": "Leite de Transi\u00e7\u00e3o",
        "quantidade": "316ml",
        "status": "Pendente",
        "maeReceptora": "Joana Oliveira",
        "doadora": null,
        "data": "2024-03-07"
    },
    {
        "idPedido": 128,
        "tipoLeite": "Colostro",
        "quantidade": "358ml",
        "status": "Cancelado",
        "maeReceptora": "Isabel Mendes",
        "doadora": "Carla Pereira",
        "data": "2024-02-22"
    },
    {
        "idPedido": 129,
        "tipoLeite": "Leite Materno",
        "quantidade": "122ml",
        "status": "Conclu\u00eddo",
        "maeReceptora": "Isabel Mendes",
        "doadora": "Carla Pereira",
        "data": "2024-03-18"
    },
    {
        "idPedido": 130,
        "tipoLeite": "Leite Materno",
        "quantidade": "364ml",
        "status": "Pendente",
        "maeReceptora": "Ana Silva",
        "doadora": "Maria Santos",
        "data": "2024-05-02"
    },
    // {
    //     "idPedido": 131,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "408ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Marta Almeida",
    //     "doadora": "Fernanda Lima",
    //     "data": "2024-04-21"
    // },
    // {
    //     "idPedido": 132,
    //     "tipoLeite": "Colostro",
    //     "quantidade": "106ml",
    //     "status": "Cancelado",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Carla Pereira",
    //     "data": "2024-02-14"
    // },
    // {
    //     "idPedido": 133,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "351ml",
    //     "status": "Cancelado",
    //     "maeReceptora": "Joana Oliveira",
    //     "doadora": null,
    //     "data": "2024-04-20"
    // },
    // {
    //     "idPedido": 134,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "211ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": null,
    //     "data": "2024-03-16"
    // },
    // {
    //     "idPedido": 135,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "425ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Joana Oliveira",
    //     "doadora": "Sofia Costa",
    //     "data": "2024-04-06"
    // },
    // {
    //     "idPedido": 136,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "294ml",
    //     "status": "Cancelado",
    //     "maeReceptora": "Lu\u00edsa Fernandes",
    //     "doadora": "Juliana Rocha",
    //     "data": "2024-02-03"
    // },
    // {
    //     "idPedido": 137,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "316ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": "Juliana Rocha",
    //     "data": "2024-03-11"
    // },
    // {
    //     "idPedido": 138,
    //     "tipoLeite": "Colostro",
    //     "quantidade": "390ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Sofia Costa",
    //     "data": "2024-05-24"
    // },
    // {
    //     "idPedido": 139,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "318ml",
    //     "status": "Cancelado",
    //     "maeReceptora": "Marta Almeida",
    //     "doadora": "Juliana Rocha",
    //     "data": "2024-02-17"
    // },
    // {
    //     "idPedido": 140,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "325ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": null,
    //     "data": "2024-03-21"
    // },
    // {
    //     "idPedido": 141,
    //     "tipoLeite": "Colostro",
    //     "quantidade": "496ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Marta Almeida",
    //     "doadora": null,
    //     "data": "2024-02-18"
    // },
    // {
    //     "idPedido": 142,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "249ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Lu\u00edsa Fernandes",
    //     "doadora": "Carla Pereira",
    //     "data": "2024-03-19"
    // },
    // {
    //     "idPedido": 143,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "288ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Fernanda Lima",
    //     "data": "2024-02-04"
    // },
    // {
    //     "idPedido": 145,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "411ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Fernanda Lima",
    //     "data": "2024-03-12"
    // },
    // {
    //     "idPedido": 146,
    //     "tipoLeite": "Colostro",
    //     "quantidade": "294ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Carla Pereira",
    //     "data": "2024-02-02"
    // },
    // {
    //     "idPedido": 147,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "239ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": "Fernanda Lima",
    //     "data": "2024-03-02"
    // },
    // {
    //     "idPedido": 148,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "152ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Juliana Rocha",
    //     "data": "2024-04-02"
    // },
    // {
    //     "idPedido": 149,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "363ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": null,
    //     "data": "2024-03-14"
    // },
    // {
    //     "idPedido": 150,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "367ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Marta Almeida",
    //     "doadora": "Sofia Costa",
    //     "data": "2024-05-05"
    // },
    // {
    //     "idPedido": 151,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "201ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": "Fernanda Lima",
    //     "data": "2024-05-14"
    // },
    // {
    //     "idPedido": 152,
    //     "tipoLeite": "Leite de Transi\u00e7\u00e3o",
    //     "quantidade": "247ml",
    //     "status": "Conclu\u00eddo",
    //     "maeReceptora": "Lu\u00edsa Fernandes",
    //     "doadora": "Maria Santos",
    //     "data": "2024-04-06"
    // },
    // {
    //     "idPedido": 153,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "445ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Luísa Fernandes",
    //     "doadora": null,
    //     "data": "2024-04-22"
    // },
    // {
    //     "idPedido": 154,
    //     "tipoLeite": "Colostro",
    //     "quantidade": "180ml",
    //     "status": "Concluído",
    //     "maeReceptora": "Marta Almeida",
    //     "doadora": "Carla Pereira",
    //     "data": "2024-05-12"
    // },
    // {
    //     "idPedido": 155,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "320ml",
    //     "status": "Cancelado",
    //     "maeReceptora": "Joana Oliveira",
    //     "doadora": "Juliana Rocha",
    //     "data": "2024-02-05"
    // },
    // {
    //     "idPedido": 156,
    //     "tipoLeite": "Leite de Transição",
    //     "quantidade": "285ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Isabel Mendes",
    //     "doadora": "Sofia Costa",
    //     "data": "2024-04-17"
    // },
    // {
    //     "idPedido": 157,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "450ml",
    //     "status": "Concluído",
    //     "maeReceptora": "Ana Silva",
    //     "doadora": "Maria Santos",
    //     "data": "2024-05-08"
    // },
    // {
    //     "idPedido": 158,
    //     "tipoLeite": "Colostro",
    //     "quantidade": "95ml",
    //     "status": "Cancelado",
    //     "maeReceptora": "Luísa Fernandes",
    //     "doadora": "Carla Pereira",
    //     "data": "2024-02-28"
    // },
    // {
    //     "idPedido": 159,
    //     "tipoLeite": "Leite Materno",
    //     "quantidade": "380ml",
    //     "status": "Pendente",
    //     "maeReceptora": "Joana Oliveira",
    //     "doadora": null,
    //     "data": "2024-04-04"
    // }
];

document.addEventListener('DOMContentLoaded', () => {
    const tabelaPedidos = document.getElementById('tabela-pedidos-recentes').getElementsByTagName('tbody')[0];

    // Iterar sobre o array de pedidos
    pedidos.forEach(pedido => {
        const newRow = tabelaPedidos.insertRow();
        newRow.insertCell().textContent = pedido.idPedido;
        newRow.insertCell().textContent = pedido.tipoLeite;
        newRow.insertCell().textContent = pedido.quantidade;

        // Cria a célula de status com a classe correta
        const statusCell = newRow.insertCell();
        statusCell.textContent = pedido.status;
        statusCell.classList.add(pedido.status.toLowerCase() === 'pendente' ? 'warning' : pedido.status.toLowerCase() === 'concluído' ? 'success' : 'danger');

        newRow.insertCell().textContent = pedido.maeReceptora;
        newRow.insertCell().textContent = pedido.doadora || '-'; 
        newRow.insertCell().textContent = pedido.data;

        // Cria a célula de detalhes com um link
        const detalhesCell = newRow.insertCell();
        const detalhesLink = document.createElement('a');
        detalhesLink.href = `/pedido/${pedido.idPedido}`; 
        detalhesLink.textContent = 'Ver Detalhes';
        detalhesCell.appendChild(detalhesLink);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // ... (seu código JavaScript existente) ...

    const tabelaPedidos = document.getElementById('tabela-pedidos-recentes').getElementsByTagName('tbody')[0];
    const btnMostrarMais = document.getElementById('btn-mostrar-mais');

    const pedidosPorPagina = 5; // Número de pedidos a exibir inicialmente
    let paginaAtual = 1;
    let pedidosExibidos = 0;

    function exibirPedidos(pagina) {
        const inicio = (pagina - 1) * pedidosPorPagina;
        const fim = inicio + pedidosPorPagina;

        for (let i = inicio; i < fim && i < pedidos.length; i++) {
            const pedido = pedidos[i];
            // ... (seu código para adicionar a linha do pedido à tabela) ...
            pedidosExibidos++;
        }

        // Atualiza o botão "Mostrar Mais"
        if (pedidosExibidos >= pedidos.length) {
            btnMostrarMais.textContent = 'Mostrar Menos';
            btnMostrarMais.dataset.acao = 'menos';
        } else {
            btnMostrarMais.textContent = 'Mostrar Mais';
            btnMostrarMais.dataset.acao = 'mais';
        }
    }

    exibirPedidos(paginaAtual);

    btnMostrarMais.addEventListener('click', () => {
        if (btnMostrarMais.dataset.acao === 'mais') {
            paginaAtual++;
            exibirPedidos(paginaAtual);
        } else {
            while (pedidosExibidos > pedidosPorPagina) {
                tabelaPedidos.deleteRow(tabelaPedidos.rows.length - 1);
                pedidosExibidos--;
            }
            btnMostrarMais.textContent = 'Mostrar Mais';
            btnMostrarMais.dataset.acao = 'mais';
        }
    });
});

document.addEventListener('DOMContentLoaded', async () => {
    const userType = 'doadora'; // Substitua com a lógica para obter o tipo de usuário real
    if (userType === 'doadora') {
        document.getElementById('doacoes-link').style.display = 'flex';
    } else if (userType === 'receptora') {
        document.getElementById('pedidos-link').style.display = 'flex';
    }

    const tabelaPedidosBody = document.getElementById('tabela-pedidos-recentes').getElementsByTagName('tbody')[0];
    const btnMostrarMais = document.getElementById('btn-mostrar-mais');

    const pedidosPorPagina = 5; // Número de pedidos a exibir inicialmente
    let paginaAtual = 1;
    let pedidosExibidos = 0;

    async function buscarPedidos(pagina) {
        try {
            const response = await fetch(`/api/pedidos/recentes?pagina=${pagina}&limite=${pedidosPorPagina}`);
            if (!response.ok) {
                throw new Error(`Erro na resposta da API: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar pedidos recentes:', error);
            return [];
        }
    }
    
    // ... (your map initialization code)

    async function carregarMaisPedidos() {
        paginaAtual++;
        const novosPedidos = await buscarPedidos(paginaAtual);
        novosPedidos.forEach(pedido => {
            adicionarLinhaPedido(pedido);
            pedidosExibidos++;
        });

        // Atualiza o botão "Mostrar Mais"
        if (pedidosExibidos >= pedidos.length) {
            btnMostrarMais.textContent = 'Mostrar Menos';
            btnMostrarMais.dataset.acao = 'menos';
        } else {
            btnMostrarMais.textContent = 'Mostrar Mais';
            btnMostrarMais.dataset.acao = 'mais';
        }
    }
 
   // Adiciona evento de clique ao botão
    btnMostrarMais.addEventListener('click', () => {
        if (btnMostrarMais.dataset.acao === 'mais') {
            carregarMaisPedidos();
        } else {
            // Lógica para mostrar menos (remover linhas da tabela)
        }
    });


    // Função para adicionar linhas à tabela (reutilizável)
    function adicionarLinhaPedido(pedido) {
        const newRow = tabelaPedidosBody.insertRow();
        newRow.insertCell().textContent = pedido.idPedido;
        newRow.insertCell().textContent = pedido.tipoLeite;
        newRow.insertCell().textContent = pedido.quantidade;

        const statusCell = newRow.insertCell();
        statusCell.textContent = pedido.status;
        statusCell.classList.add(
            pedido.status.toLowerCase() === 'pendente' ? 'warning' :
            pedido.status.toLowerCase() === 'concluído' ? 'success' : 'danger'
        );

        newRow.insertCell().textContent = pedido.maeReceptora;
        newRow.insertCell().textContent = pedido.doadora || '-';
        newRow.insertCell().textContent = pedido.data;

        const detalhesCell = newRow.insertCell();
        const detalhesLink = document.createElement('a');
        detalhesLink.href = `/pedido/${pedido.idPedido}`;
        detalhesLink.textContent = 'Ver Detalhes';
        detalhesCell.appendChild(detalhesLink);
    }

    // Carregar a primeira página de pedidos ao carregar a página
    const pedidosIniciais = await buscarPedidos(paginaAtual);
    pedidosIniciais.forEach(pedido => {
        adicionarLinhaPedido(pedido);
        pedidosExibidos++;
    });
});


async function buscarNovosUsuarios() { /* ... (mesmo código da resposta anterior) ... */ }
function exibirNovosUsuarios(usuarios) { /* ... (mesmo código da resposta anterior) ... */ }