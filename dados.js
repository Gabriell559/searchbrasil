let dados1 = [
{
    titulo : "Rayssa Leal",
    descrição: "Rayssa Leal, a 'Fadinha', é um fenômeno do skate mundial. Com apenas alguns anos, conquistou o coração de milhões com seu talento e carisma. A medalha de prata nos Jogos Olímpicos de Tóquio foi apenas o começo de uma carreira promissora, que a coloca como uma das maiores skatistas de sua geração.",
    link : "https://pt.wikipedia.org/wiki/Rayssa_Leal",
    tags: "skate fada sl8"
},
{
    titulo : "Rebeca Andrade",
    descrição: "Rebeca Andrade é uma ginasta artística brasileira que conquistou o coração dos brasileiros com sua habilidade, determinação e carisma. Bicampeã olímpica, ela é a maior medalhista da história do Brasil nos Jogos Olímpicos, com um currículo repleto de conquista",
    link : "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
    tags: "ginástica ginastica ouro"
},
{
    titulo : "Beatriz Souza",
    descrição: "A judoca brasileira Beatriz Souza, campeã olímpica, tem deixado sua marca no esporte mundial. Com sua determinação e talento, ela conquistou o coração dos brasileiros e inspira novas gerações de atletas",
    link : "https://pt.wikipedia.org/wiki/Beatriz_Souza",
    tags: "ouro negra exército"
},
{
    titulo: "Neymar Jr.",
    descrição: "Considerado um dos melhores jogadores de futebol do mundo, Neymar Jr. conquistou fãs em todo o globo com sua habilidade e estilo de jogo único. Sua participação em diversas Copas do Mundo e sua transferência para grandes clubes europeus consolidaram seu status como um dos maiores atletas brasileiros de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Neymar",
    tags: "futebol" 
},
{
    titulo: "Martine Grael",
    descrição: "Martine Grael é uma velejadora brasileira, campeã olímpica. Junto com Kahena Kunze, ela conquistou o ouro nos Jogos Olímpicos do Rio de Janeiro em 2016.",
    link: "https://pt.wikipedia.org/wiki/Martine_Grael",
    tags: "vela, olimpíadas"
},
{
    titulo: "Aline Silva",
    descrição: "Aline Silva é uma judoca brasileira de destaque internacional. Com suas técnicas precisas e força, ela conquistou diversas medalhas em competições importantes.",
    link: "https://pt.wikipedia.org/wiki/Aline_Silva_(judoca)",
    tags: "judô"
},
{
    titulo: "Bruninho",
    descrição: "Bruno Rezende, conhecido como Bruninho, é um levantador de vôlei brasileiro. Ele foi fundamental para a conquista de diversos títulos pela Seleção Brasileira.",
    link: "https://pt.wikipedia.org/wiki/Bruno_Rezende",
    tags: "vôlei, levantador"
},
{
    titulo: "Isaquias Queiroz",
    descrição: "Isaquias Queiroz é um canoísta brasileiro, tricampeão olímpico. Ele é considerado um dos maiores canoístas da história e um dos principais nomes do esporte no Brasil.",
    link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
    tags: "canoagem, ouro olímpico"
},
{
    titulo: "Gabriel Medina",
    descrição: "Gabriel Medina é um surfista brasileiro, bicampeão mundial de surf. Ele é conhecido por seu estilo agressivo e inovador nas ondas.",
    link: "https://pt.wikipedia.org/wiki/Gabriel_Medina",
    tags: "surf bicampeão inovador"
},
{
    titulo: "Marta",
    descrição: "Marta Vieira da Silva, mais conhecida como Marta, é uma futebolista brasileira amplamente considerada uma das maiores jogadoras de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Marta",
    tags: "futebol craque artilheira"
},
{
    titulo: "Thiago Braz",
    descrição: "Thiago Braz é um atleta brasileiro do salto com vara, campeão olímpico nos Jogos Rio 2016 com um recorde olímpico de 6,03 metros.",
    link: "https://pt.wikipedia.org/wiki/Thiago_Braz",
    tags: "salto com vara campeão recordista"
},
{
    titulo: "Rebeca Andrade",
    descrição: "Rebeca Andrade é uma ginasta artística brasileira, conhecida por suas performances espetaculares e por conquistar a medalha de ouro nas Olimpíadas de Tóquio 2020.",
    link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
    tags: "ginástica campeã olímpica"
},
{
    titulo: "Ayrton Senna",
    descrição: "Ayrton Senna foi um piloto de Fórmula 1 brasileiro, considerado um dos maiores pilotos de todos os tempos. Ele venceu três campeonatos mundiais de Fórmula 1.",
    link: "https://pt.wikipedia.org/wiki/Ayrton_Senna",
    tags: "Fórmula 1 tricampeão lenda"
},
{
    titulo: "Vítor Belfort",
    descrição: "Vítor Belfort é um lutador de MMA brasileiro, ex-campeão do UFC e conhecido por sua velocidade e poder de nocaute.",
    link: "https://pt.wikipedia.org/wiki/Vítor_Belfort",
    tags: "MMA UFC campeão"
},
{
    titulo: "Gustavo Kuerten",
    descrição: "Gustavo Kuerten, também conhecido como Guga, é um ex-tenista brasileiro e tricampeão de Roland Garros. Ele é considerado um dos melhores tenistas brasileiros de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
    tags: "tênis tricampeão Roland Garros"
},
{
    titulo: "Oscar Schmidt",
    descrição: "Oscar Schmidt é um ex-jogador de basquete brasileiro, conhecido como 'Mão Santa'. Ele é um dos maiores cestinhas da história do basquete.",
    link: "https://pt.wikipedia.org/wiki/Oscar_Schmidt",
    tags: "basquete cestinha lenda"
},
{
    titulo: "Adriana Behar",
    descrição: "Adriana Behar é uma ex-jogadora de vôlei de praia brasileira, duas vezes medalhista olímpica e uma das maiores atletas da modalidade.",
    link: "https://pt.wikipedia.org/wiki/Adriana_Behar",
    tags: "vôlei de praia medalhista olímpica"
},
{
    titulo: "Pelé",
    descrição: "Edson Arantes do Nascimento, mais conhecido como Pelé, foi um futebolista brasileiro considerado o maior jogador de futebol de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Pelé",
    tags: "futebol rei do futebol lenda"
},
{
    titulo: "Cafu",
    descrição: "Cafu, ex-lateral-direito brasileiro, é o único jogador a participar de três finais consecutivas de Copa do Mundo, vencendo em 1994 e 2002.",
    link: "https://pt.wikipedia.org/wiki/Cafu",
    tags: "futebol Copa do Mundo campeão"
},
{
    titulo: "Zico",
    descrição: "Arthur Antunes Coimbra, conhecido como Zico, é um ex-futebolista e treinador brasileiro, considerado um dos maiores jogadores de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Zico",
    tags: "futebol craque ídolo"
},
{
    titulo: "Hortência",
    descrição: "Hortência Marcari é uma ex-jogadora de basquete brasileira, reconhecida como uma das maiores jogadoras do basquete feminino mundial.",
    link: "https://pt.wikipedia.org/wiki/Hortência_Marcari",
    tags: "basquete campeã ícone"
},
{
    titulo: "Felipe Massa",
    descrição: "Felipe Massa é um ex-piloto de Fórmula 1 brasileiro, que competiu pela Ferrari e Williams, vencendo 11 Grandes Prêmios ao longo de sua carreira.",
    link: "https://pt.wikipedia.org/wiki/Felipe_Massa",
    tags: "Fórmula 1 piloto campeão"
},
{
    titulo: "Daniel Dias",
    descrição: "Daniel Dias é um nadador paralímpico brasileiro, vencedor de várias medalhas em Jogos Paralímpicos e recordista mundial em várias provas.",
    link: "https://pt.wikipedia.org/wiki/Daniel_Dias",
    tags: "natação paralímpico recordista"
},
{
    titulo: "Ana Moser",
    descrição: "Ana Moser é uma ex-jogadora de vôlei brasileira e medalhista olímpica, reconhecida por suas atuações no esporte nos anos 90.",
    link: "https://pt.wikipedia.org/wiki/Ana_Moser",
    tags: "vôlei campeã medalhista"
},
{
    titulo: "Fernanda Keller",
    descrição: "Fernanda Keller é uma triatleta brasileira, conhecida por suas performances no Ironman, incluindo seis pódios no mundial da categoria.",
    link: "https://pt.wikipedia.org/wiki/Fernanda_Keller",
    tags: "triatlo Ironman campeã"
},
{
    titulo: "Maguila",
    descrição: "Adilson Rodrigues, mais conhecido como Maguila, é um ex-boxeador brasileiro, campeão sul-americano e latino-americano dos pesos pesados.",
    link: "https://pt.wikipedia.org/wiki/Adilson_Rodrigues",
    tags: "boxe campeão peso pesado"
},
{
    titulo: "Maurren Maggi",
    descrição: "Maurren Maggi é uma ex-atleta brasileira do salto em distância, campeã olímpica em Pequim 2008, e recordista sul-americana.",
    link: "https://pt.wikipedia.org/wiki/Maurren_Maggi",
    tags: "atletismo salto distância"
},
{
    titulo: "Joanna Maranhão",
    descrição: "Joanna Maranhão é uma nadadora brasileira, especializada em provas de medley, e múltipla recordista sul-americana.",
    link: "https://pt.wikipedia.org/wiki/Joanna_Maranhão",
    tags: "natação medley recordista"
},
{
    titulo: "Daiane dos Santos",
    descrição: "Daiane dos Santos é uma ex-ginasta artística brasileira, conhecida por ser a primeira brasileira a conquistar uma medalha de ouro em um Campeonato Mundial.",
    link: "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
    tags: "ginástica artística campeã mundial"
},
{
    titulo: "Marcelinho Carioca",
    descrição: "Marcelinho Carioca é um ex-futebolista brasileiro, famoso por suas habilidades em cobranças de falta e por ser um dos maiores ídolos do Corinthians.",
    link: "https://pt.wikipedia.org/wiki/Marcelinho_Carioca",
    tags: "futebol ídolo Corinthians"
},
{
    titulo: "Rogério Ceni",
    descrição: "Rogério Ceni é um ex-goleiro e treinador de futebol brasileiro, conhecido por ser o goleiro com mais gols marcados na história do futebol.",
    link: "https://pt.wikipedia.org/wiki/Rogério_Ceni",
    tags: "futebol goleiro artilheiro"
},
{
    titulo: "Maicon",
    descrição: "Maicon é um ex-lateral-direito brasileiro, conhecido por suas atuações pela Seleção Brasileira e por clubes como Inter de Milão e Manchester City.",
    link: "https://pt.wikipedia.org/wiki/Maicon",
    tags: "futebol lateral campeão"
},
{
    titulo: "Robert Scheidt",
    descrição: "Robert Scheidt é um velejador brasileiro, bicampeão olímpico e um dos maiores nomes da vela mundial.",
    link: "https://pt.wikipedia.org/wiki/Robert_Scheidt",
    tags: "vela bicampeão olímpico"
},
{
    titulo: "Murilo Endres",
    descrição: "Murilo Endres é um jogador de vôlei brasileiro, conhecido por suas atuações pela Seleção Brasileira e por ser um dos melhores ponteiros do mundo.",
    link: "https://pt.wikipedia.org/wiki/Murilo_Endres",
    tags: "vôlei campeão seleção"
},
{
    titulo: "Leila Barros",
    descrição: "Leila Barros é uma ex-jogadora de vôlei brasileira, medalhista olímpica e uma das maiores jogadoras de vôlei do Brasil.",
    link: "https://pt.wikipedia.org/wiki/Leila_Barros",
    tags: "vôlei medalhista campeã"
},
{
    titulo: "Formiga",
    descrição: "Miraildes Maciel Mota, conhecida como Formiga, é uma futebolista brasileira e a jogadora que mais atuou em Copas do Mundo.",
    link: "https://pt.wikipedia.org/wiki/Formiga",
    tags: "futebol recordista craque"
},
{
    titulo: "Daiane dos Santos",
    descrição: "Daiane dos Santos é uma ex-ginasta artística brasileira, conhecida por seus saltos impressionantes e campeã mundial no solo.",
    link: "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
    tags: "ginástica campeã mundial"
},
{
    titulo: "Lucarelli",
    descrição: "Ricardo Lucarelli é um jogador de voleibol brasileiro, medalhista de ouro nos Jogos Olímpicos do Rio de Janeiro em 2016.",
    link: "https://pt.wikipedia.org/wiki/Ricardo_Lucarelli",
    tags: "vôlei campeão olímpico"
},
{
    titulo: "Diego Hypólito",
    descrição: "Diego Hypólito é um ginasta artístico brasileiro, duas vezes campeão mundial no solo e medalhista olímpico.",
    link: "https://pt.wikipedia.org/wiki/Diego_Hypólito",
    tags: "ginástica campeão mundial"
},
{
    titulo: "Janeth Arcain",
    descrição: "Janeth Arcain é uma ex-jogadora de basquete brasileira, campeã mundial e medalhista olímpica, considerada uma das melhores de todos os tempos.",
    link: "https://pt.wikipedia.org/wiki/Janeth_Arcain",
    tags: "basquete campeã medalhista"
},
{
    titulo: "Rodrigo Minotauro",
    descrição: "Rodrigo Nogueira, conhecido como Minotauro, é um ex-lutador de MMA brasileiro e ex-campeão do UFC e Pride.",
    link: "https://pt.wikipedia.org/wiki/Antônio_Rodrigo_Nogueira",
    tags: "MMA UFC campeão"
},
{
    titulo: "Tande",
    descrição: "Alexandre Ramos Samuel, conhecido como Tande, é um ex-jogador de voleibol e comentarista esportivo brasileiro, medalhista olímpico e mundial.",
    link: "https://pt.wikipedia.org/wiki/Tande",
    tags: "vôlei campeão medalhista"
},
{
    titulo: "Shelda Bede",
    descrição: "Shelda Bede é uma ex-jogadora de vôlei de praia brasileira, duas vezes medalhista olímpica e campeã mundial.",
    link: "https://pt.wikipedia.org/wiki/Shelda_Bede",
    tags: "vôlei de praia campeã medalhista"
},
{
    titulo: "Adriana Samuel",
    descrição: "Adriana Samuel é uma ex-jogadora de vôlei de praia brasileira, duas vezes medalhista olímpica e campeã mundial.",
    link: "https://pt.wikipedia.org/wiki/Adriana_Samuel",
    tags: "vôlei de praia medalhista campeã"
},
{
    titulo: "Pedro Barros",
    descrição: "Pedro Barros é um skatista brasileiro, especialista na modalidade Park, e medalhista olímpico em Tóquio 2020.",
    link: "https://pt.wikipedia.org/wiki/Pedro_Barros",
    tags: "skate park medalhista olímpico"
},
{
    titulo: "Vanderlei Cordeiro de Lima",
    descrição: "Vanderlei Cordeiro de Lima é um maratonista brasileiro, famoso por sua resiliência nos Jogos Olímpicos de Atenas em 2004.",
    link: "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
    tags: "maratona resiliência herói"
},
{
    titulo: "Robson Conceição",
    descrição: "Robson Conceição é um boxeador brasileiro, medalhista de ouro nos Jogos Olímpicos do Rio de Janeiro em 2016.",
    link: "https://pt.wikipedia.org/wiki/Robson_Conceição",
    tags: "boxe campeão olímpico"
},
{
    titulo: "Neymar",
    descrição: "Neymar Jr. é um futebolista brasileiro conhecido por seu estilo de jogo habilidoso e por ser uma das estrelas do futebol mundial.",
    link: "https://pt.wikipedia.org/wiki/Neymar",
    tags: "futebol craque estrela"
},
{
    titulo: "Hulk",
    descrição: "Givanildo Vieira de Souza, conhecido como Hulk, é um futebolista brasileiro famoso por sua força física e chutes potentes.",
    link: "https://pt.wikipedia.org/wiki/Hulk_(futebolista)",
    tags: "futebol força potência"
},
{
    titulo: "Anderson Varejão",
    descrição: "Anderson Varejão é um ex-jogador de basquete brasileiro que teve uma longa carreira na NBA, especialmente no Cleveland Cavaliers.",
    link: "https://pt.wikipedia.org/wiki/Anderson_Varejão",
    tags: "basquete NBA Cavaliers"
},
{
    titulo: "Ana Paula Connelly",
    descrição: "Ana Paula Connelly é uma ex-jogadora de vôlei de praia brasileira, campeã mundial e medalhista olímpica.",
    link: "https://pt.wikipedia.org/wiki/Ana_Paula_Connelly",
    tags: "vôlei de praia campeã medalhista"
},
{
    titulo: "Arthur Zanetti",
    descrição: "Arthur Zanetti é um ginasta artístico brasileiro, campeão olímpico nas argolas nos Jogos de Londres 2012.",
    link: "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
    tags: "ginástica campeão olímpico argolas"
},
{
    titulo: "Leandro Barbosa",
    descrição: "Leandro Barbosa, também conhecido como 'Leandrinho', é um ex-jogador de basquete brasileiro que teve uma carreira de sucesso na NBA.",
    link: "https://pt.wikipedia.org/wiki/Leandro_Barbosa",
    tags: "basquete NBA sucesso"
},
{
    titulo: "Larissa França",
    descrição: "Larissa França é uma ex-jogadora de vôlei de praia brasileira, conhecida por suas inúmeras conquistas em torneios internacionais.",
    link: "https://pt.wikipedia.org/wiki/Larissa_França",
    tags: "vôlei de praia campeã internacional"
},
{
    titulo: "Serginho",
    descrição: "Sérgio Dutra dos Santos, conhecido como Serginho, é um ex-jogador de voleibol brasileiro, considerado um dos maiores líberos da história.",
    link: "https://pt.wikipedia.org/wiki/Sérgio_Dutra_dos_Santos",
    tags: "vôlei líbero campeão"
},
{
    titulo: "Murilo Endres",
    descrição: "Murilo Endres é um ex-jogador de voleibol brasileiro, conhecido por suas habilidades ofensivas e defensivas, e medalhista olímpico.",
    link: "https://pt.wikipedia.org/wiki/Murilo_Endres",
    tags: "vôlei campeão medalhista"
},
{
    titulo: "Lucas Moura",
    descrição: "Lucas Moura é um futebolista brasileiro que atualmente joga no Tottenham Hotspur, conhecido por sua velocidade e habilidade em driblar.",
    link: "https://pt.wikipedia.org/wiki/Lucas_Moura",
    tags: "futebol rapidez dribles"
},
{
    titulo: "Hélia Souza",
    descrição: "Hélia Souza, mais conhecida como Fofão, é uma ex-jogadora de voleibol brasileira, campeã olímpica e mundial.",
    link: "https://pt.wikipedia.org/wiki/Fofão",
    tags: "vôlei campeã olímpica mundial"
},
{
    titulo: "Jaque Carvalho",
    descrição: "Jaqueline Carvalho é uma jogadora de voleibol brasileira, conhecida por suas habilidades em ataque e defesa, e medalhista olímpica.",
    link: "https://pt.wikipedia.org/wiki/Jaqueline_Carvalho",
    tags: "vôlei campeão medalhista"
},
{
    titulo: "Daniel Alves",
    descrição: "Daniel Alves é um futebolista brasileiro, um dos jogadores mais titulados da história, conhecido por sua versatilidade e habilidades defensivas.",
    link: "https://pt.wikipedia.org/wiki/Daniel_Alves",
    tags: "futebol versatilidade títulos"
},
{
    titulo: "Fabiana Claudino",
    descrição: "Fabiana Claudino é uma jogadora de voleibol brasileira, capitã da seleção e medalhista olímpica.",
    link: "https://pt.wikipedia.org/wiki/Fabiana_Claudino",
    tags: "vôlei capitã medalhista"
},
{
    titulo: "Jorge Henrique",
    descrição: "Jorge Henrique é um ex-futebolista brasileiro, conhecido por sua dedicação e habilidades como meia e atacante.",
    link: "https://pt.wikipedia.org/wiki/Jorge_Henrique",
    tags: "futebol meia atacante"
},
{
    titulo: "Rafaela Silva",
    descrição: "Rafaela Silva é uma judoca brasileira, medalhista de ouro nas Olimpíadas do Rio de Janeiro 2016.",
    link: "https://pt.wikipedia.org/wiki/Rafaela_Silva",
    tags: "judô campeã olímpica"
},
{
    titulo: "Emanuel Rego",
    descrição: "Emanuel Rego é um ex-jogador de vôlei de praia brasileiro, considerado um dos maiores da história do esporte.",
    link: "https://pt.wikipedia.org/wiki/Emanuel_Rego",
    tags: "vôlei de praia campeão lenda"
},
{
    titulo: "Paula Pequeno",
    descrição: "Paula Pequeno é uma ex-jogadora de voleibol brasileira, medalhista olímpica e mundial.",
    link: "https://pt.wikipedia.org/wiki/Paula_Pequeno",
    tags: "vôlei campeã medalhista"
},
{
    titulo: "Thaisa Menezes",
    descrição: "Thaisa Menezes é uma jogadora de voleibol brasileira, duas vezes medalhista de ouro olímpica e conhecida por suas habilidades como central.",
    link: "https://pt.wikipedia.org/wiki/Thaisa_Menezes",
    tags: "vôlei campeã olímpica central"
},
{
    titulo: "André Sá",
    descrição: "André Sá é um ex-tenista brasileiro que teve uma carreira de sucesso em duplas e representou o Brasil em várias competições internacionais.",
    link: "https://pt.wikipedia.org/wiki/André_Sá",
    tags: "tênis duplas sucesso"
},
{
    titulo: "César Cielo",
    descrição: "César Cielo é um nadador brasileiro, campeão olímpico e mundial, e recordista mundial nas provas de 50m e 100m livre.",
    link: "https://pt.wikipedia.org/wiki/César_Cielo",
    tags: "natação campeão recordista"
},
{
    titulo: "Ítalo Ferreira",
    descrição: "Ítalo Ferreira é um surfista brasileiro, campeão mundial de 2019 e medalhista de ouro nas Olimpíadas de Tóquio 2020.",
    link: "https://pt.wikipedia.org/wiki/Ítalo_Ferreira",
    tags: "surf campeão olímpico"
},
{
    titulo: "Agnaldo Timóteo",
    descrição: "Agnaldo Timóteo foi um cantor e político brasileiro, conhecido por sua poderosa voz e contribuições à música brasileira.",
    link: "https://pt.wikipedia.org/wiki/Agnaldo_Timóteo",
    tags: "música cantor político"
},
{
    titulo: "Thiago Pereira",
    descrição: "Thiago Pereira é um ex-nadador brasileiro, medalhista olímpico e recordista em competições continentais.",
    link: "https://pt.wikipedia.org/wiki/Thiago_Pereira",
    tags: "natação medalhista recordista"
},
{
    titulo: "Wallace de Souza",
    descrição: "Wallace de Souza é um jogador de voleibol brasileiro, medalhista olímpico e mundial, conhecido por suas habilidades como oposto.",
    link: "https://pt.wikipedia.org/wiki/Wallace_de_Souza",
    tags: "vôlei campeão oposto"
},
{
    titulo: "Romário",
    descrição: "Romário de Souza Faria, conhecido como Romário, é um ex-futebolista brasileiro e político, reconhecido como um dos maiores atacantes da história.",
    link: "https://pt.wikipedia.org/wiki/Romário",
    tags: "futebol atacante lenda"
},
{
    titulo: "Serginho Chulapa",
    descrição: "Sérgio Bernardino, conhecido como Serginho Chulapa, é um ex-futebolista brasileiro e artilheiro histórico do São Paulo FC.",
    link: "https://pt.wikipedia.org/wiki/Serginho_Chulapa",
    tags: "futebol artilheiro histórico"
},
{
    titulo: "Douglas Souza",
    descrição: "Douglas Souza é um jogador de voleibol brasileiro, conhecido por seu carisma e habilidades em quadra, e medalhista olímpico.",
    link: "https://pt.wikipedia.org/wiki/Douglas_Souza",
    tags: "vôlei campeão carisma"
},
];

 