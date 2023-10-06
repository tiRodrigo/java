//Peguei o código e analisei os novos atributos usados e pesquisei sobre e comentei as linhas do código
//[] são arrays ultilizados para armazenar vários valores em uma única variável.
let blooms = [];
//addEventListener()permite que você configure funções a serem chamadas quando um evento específico acontece.
        document.getElementById('cadastroblom').addEventListener('submit', function(e) {
            //seu button(submite) tenha o efeito de clique
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            // não entendi
            const id = blooms.length + 1;
            // adiciona valores na variavel blooms 
            blooms.push({ id, nome });
            exibirBloom();
            document.getElementById('nome').value = '';
        });

        // Função para exibir na tabela
        function exibirBloom() {
            // puxa o id "bloomInfo" da tag tbody e exibe na pagina html 
            // tbody é o espaço onde são colocadas as linhas de dados, em uma tabela HTML. 
            const tableBody = document.getElementById('bloomInfo');
            tableBody.innerHTML = '';
//O método forEach é usado para percorrer arrays. Esse método passa uma função de callback para cada elemento do array com os parâmetros: Valor atual e o valor do elemento atual do array.
//callback é a função passada a outra função como argumento, puxando para a função externa para completar uma ação
            blooms.forEach(bloom => {
//row = linha(tr) | .creatElement cria o elemento html especificado.                
                const row = document.createElement('tr');
//row.innerHTML vai exibir o que se pede dentro da função criada 
//td define cada uma das células de uma tabela  
//cria um button para exibir junto com os dados inserido na tabela                
                row.innerHTML = `             
                    <td>${bloom.id}</td>
                    <td>${bloom.nome}</td>
                    <td>
                        <button onclick="editarBloom(${bloom.id})">Editar</button>
                        <button onclick="excluirBloom(${bloom.id})">Excluir</button>
                    </td>
                `;
//appendChild = insere um novo nó na estrutura de um documento, tem a função de criar e adiciona
                tableBody.appendChild(row);
            });
        }

        // Função para editar( o button criado) 
        function editarBloom(id) {
//.Find ultilizado para encontrar 1 item específico no array            
            const nome = prompt('Editar Nome:', blooms.find(bloom => bloom.id === id).nome);
            if (nome !== null) {
                //=== compara p valor e o tipo das variaveis e verifica se são exatamente iguais.
                //findIndex executa a função callback uma vez para cada elemento presente no array até encontrar um onde o callback retorna um valor verdadeiro
                const index = blooms.findIndex(bloom => bloom.id === id);
                blooms[index].nome = nome;
                exibirBloom();
            }
        }

        // Função para excluir Bloom(o button criado)
        function excluirBloom(id) {
            //confirm() tem como onjetivo permitir que o usuário decida se deseja ou não executar uma ação.
            const confirmacao = confirm('Tem certeza que deseja excluir este Bloom?');
            if (confirmacao) {
                //Filter()é um recurso que permite a manipulação de elementos em uma array.
                blooms = blooms.filter(bloom => bloom.id !== id);
                exibirBloom();
            }
        }

        // Inicializar a tabela com dados existentes, se houver
        exibirBloom();