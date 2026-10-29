# Dashboard Doces & Travessuras

Dashboard estático em HTML, CSS e JavaScript para analisar os resultados de Doces e Travessuras.

## Como abrir
1. Extraia o ZIP.
2. Abra `index.html` no navegador (Chrome, Edge, Firefox ou Opera).
3. Os dados de outubro de 2026 já estão embutidos em `app.js`, então não é necessário iniciar servidor.

## Funcionalidades
- Indicadores de total de jogadas, doces, travessuras e resultado dominante.
- Rankings de participantes por quantidade de doces e travessuras.
- Gráfico geral de jogadas por participante, ordenado da maior quantidade para a menor.
- Gráfico de evolução acumulada por dia (storytelling).
- Gráfico de taxa de sucesso de doces por participante (doces por tentativas).
- Maior streak consecutiva de doces e de travessuras, respeitando a ordem original.
## Observações
- O dashboard mantém os códigos de usuário (F, G, H, I, J, K, L, M, N) como chaves de associação.
- Os gráficos usam Chart.js via CDN; é necessária conexão com a internet para carregar a biblioteca de gráficos.
