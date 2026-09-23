# Faixa promocional no topo

## Alteração
- Adicionar uma faixa destacada antes do título principal.
- Exibir “Promotional offer ends today” em inglês e “La oferta promocional termina hoy” em espanhol.
- Mostrar ao lado a data atual no formato natural de cada idioma.
- Manter a faixa compacta, legível no celular e alinhada ao visual atual.

## Detalhes técnicos
- A data será gerada no navegador com `Intl.DateTimeFormat`, evitando atualização manual diária.
- O conteúdo inicial será estável para não causar diferença visual durante o carregamento.
- Validar as versões `/en` e `/es` no desktop e no celular.
