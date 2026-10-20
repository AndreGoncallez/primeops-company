# Política de Retenção e Eliminação de Dados

**Organização:** PrimeOps  
**Versão:** 1.0  
**Status:** proposta para validação do controlador, DPO/encarregado e jurídico  
**Periodicidade de revisão:** anual e após mudança de finalidade ou contrato

## 1. Regra geral

A PrimeOps não deve conservar dados pessoais por tempo indefinido. Cada categoria deve ter finalidade, proprietário, prazo de retenção, sistema de origem, cópias, regra de eliminação e exceção documentada. O prazo final depende da finalidade, contrato, obrigação legal, defesa de direitos e orientação do DPO/jurídico.

A tabela abaixo é um ponto de partida operacional, não uma determinação jurídica automática.

| Categoria | Finalidade | Prazo inicial sugerido | Destino ao final |
|---|---|---:|---|
| Solicitação comercial não convertida | Responder e qualificar contato | 12 meses após último contato | Eliminar ou anonimizar |
| Cliente e contrato | Execução, suporte, faturamento e defesa de direitos | Vigência + prazo legal/contratual aplicável | Eliminar, devolver ou restringir |
| Logs de segurança | Detecção, investigação e auditoria | 12 meses, salvo necessidade documentada | Eliminar ou agregar |
| Registros de consentimento e preferências | Demonstrar escolha e atender revogação | Vigência da finalidade + prazo de defesa | Restringir e eliminar quando possível |
| Solicitação de titular | Atender, comprovar resposta e governança | Prazo necessário para auditoria/defesa | Restringir e eliminar |
| Backup | Continuidade e restauração | Ciclo definido pelo RPO/RTO e serviço | Expiração segura conforme ciclo |
| Dados de teste | Desenvolvimento e validação | Somente durante o teste | Eliminar imediatamente após uso |

## 2. Regras de eliminação

A eliminação deve cobrir sistema primário, exportações, anexos, tickets, planilhas, dispositivos e cópias acessíveis. Backups que não permitam eliminação granular devem ter ciclo definido, acesso restrito e expiração automática. A eliminação deve gerar evidência mínima sem reproduzir o conteúdo eliminado.

Quando a eliminação não for possível por obrigação legal ou defesa de direitos, os dados devem ser segregados, ter acesso limitado e permanecer somente pelo período necessário.

## 3. Solicitações dos titulares

O canal público para solicitações deve ser divulgado no aviso de privacidade. A equipe deve:

1. registrar a data e a natureza do pedido;
2. confirmar a identidade de forma proporcional;
3. identificar controlador, operador e sistemas envolvidos;
4. verificar exceções e conflito com obrigações legais;
5. responder ou encaminhar ao controlador responsável;
6. registrar decisão, prazo, evidência e data de encerramento.

Não se deve pedir ao titular mais dados do que o necessário para localizar e proteger a solicitação.

## 4. Revisão de retenção

O proprietário do sistema e o DPO devem revisar prazos ao menos anualmente. Mudança de finalidade, novo fornecedor, incidente, ordem legal, contrato ou alteração de risco exige revisão extraordinária.

## Referências

[1]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm "Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018"
[2]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-para-definicoes-dos-agentes-de-tratamento-de-dados-pessoais-e-do-encarregado "ANPD — Guia orientativo para agentes de tratamento e encarregado"
