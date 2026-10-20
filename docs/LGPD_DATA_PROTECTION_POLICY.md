# Política de Proteção de Dados Pessoais e LGPD

**Organização:** PrimeOps  
**Versão:** 1.0  
**Status:** proposta para validação do controlador, DPO/encarregado e jurídico  
**Periodicidade de revisão:** anual, após mudança relevante de tratamento ou alteração regulatória

## 1. Finalidade

Esta política define regras para o tratamento responsável de dados pessoais pela PrimeOps. Ela foi estruturada com base nos princípios da Lei Geral de Proteção de Dados Pessoais — LGPD — e em orientações públicas da ANPD. Não substitui análise jurídica, registro de operações, contrato, aviso de privacidade ou decisão formal sobre base legal.

A LGPD exige que o tratamento observe, entre outros, finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação e responsabilização. [1]

## 2. Escopo e papéis

A política abrange dados tratados em site, formulários, CRM, e-mail, suporte, projetos, ambientes de clientes, fornecedores, colaboradores e ferramentas de terceiros.

A PrimeOps deve identificar, para cada operação, quem é controlador, operador ou terceiro independente. O controlador decide sobre finalidades e meios essenciais; o operador trata dados conforme instruções documentadas. A ANPD recomenda que papéis e atribuições sejam definidos conforme a operação concreta, e não apenas pelo nome do contrato. [2]

A identidade e o contato do encarregado/DPO devem ser mantidos atualizados e divulgados publicamente quando a PrimeOps atuar como controlador e a obrigação for aplicável. O contato publicado no site deve ser operacional, monitorado e capaz de encaminhar solicitações.

## 3. Princípios de tratamento

Toda operação deve demonstrar:

- **Finalidade:** propósito legítimo, específico, explícito e informado.
- **Adequação:** compatibilidade entre uso, contexto e informação fornecida.
- **Necessidade:** mínimo de dados pertinentes e não excessivos.
- **Transparência:** aviso claro sobre agentes, uso, compartilhamento e duração.
- **Segurança e prevenção:** medidas técnicas e administrativas proporcionais ao risco.
- **Responsabilização:** evidências de que as regras foram adotadas e funcionam.
- **Não discriminação:** nenhuma decisão ilícita ou abusiva baseada em dados pessoais.

## 4. Formulário público do site

O formulário do site deve coletar somente nome ou empresa, e-mail corporativo e descrição breve da necessidade. A descrição deve avisar para não incluir senhas, tokens, dados de saúde, dados de clientes, incidentes detalhados ou outros dados sensíveis.

Antes do envio, o titular deve receber aviso de privacidade acessível, com finalidade, categorias, canal de contato, terceiros, transferências, retenção e direitos. O checkbox deve ser usado somente quando a base legal exigir ou quando o jurídico/DPO definir que consentimento é adequado. Não se deve chamar uma concordância genérica de “consentimento LGPD/GDPR” sem explicar o que será feito.

O registro da solicitação deve guardar, no mínimo e quando aplicável, data/hora, versão do aviso, finalidade, origem, resposta dada e base legal definida. A escolha do titular deve ser revogável quando o tratamento estiver baseado em consentimento.

## 5. Bases legais

Cada atividade deve ter base legal documentada antes do início. Para solicitações comerciais, o DPO/jurídico deve avaliar se a operação se enquadra em procedimentos preliminares relacionados a contrato, legítimo interesse, consentimento ou outra hipótese aplicável. A base legal não deve ser escolhida apenas por conveniência técnica.

Dados sensíveis, dados de crianças e adolescentes, dados de saúde, biometria e dados de clientes exigem análise específica e não devem ser solicitados em formulário público genérico.

## 6. Direitos dos titulares

A PrimeOps deve manter canal para receber, autenticar de forma proporcional e responder a solicitações de titulares. O processo deve contemplar confirmação de existência, acesso, correção, anonimização, bloqueio, eliminação, portabilidade quando aplicável, informação sobre compartilhamentos, revisão de decisões automatizadas quando aplicável, oposição e revogação de consentimento.

A resposta deve evitar divulgar dados a pessoa não autorizada. Quando a solicitação envolver dados de cliente-controlador, o pedido deve ser encaminhado ao controlador responsável conforme contrato e instruções.

## 7. Registro de operações e avaliação de impacto

Para cada operação relevante, manter registro com:

- finalidade e base legal;
- categorias de titulares e dados;
- origem e fluxo;
- sistemas e fornecedores;
- compartilhamentos e transferências internacionais;
- retenção e eliminação;
- controles de segurança;
- riscos e medidas de mitigação;
- proprietário e data de revisão.

Quando o tratamento puder gerar alto risco, o DPO e a segurança devem avaliar a necessidade de relatório de impacto à proteção de dados pessoais, consulta ao controlador, medidas adicionais ou interrupção da operação.

## 8. Terceiros e transferências

Antes de enviar dados a Formspree, hospedagem, CRM, e-mail, suporte, analytics ou outro terceiro, registrar finalidade, categorias, localização, subcontratados, retenção, segurança, incidentes, eliminação e mecanismo jurídico para transferência internacional quando aplicável.

O site não deve enviar dados pessoais a ferramentas de telemetria ou marketing antes de uma escolha válida quando a tecnologia não for estritamente necessária. Fontes, scripts e CDN externos devem ser inventariados e justificados.

## 9. Segurança e privacidade desde o desenho

Aplicar minimização, pseudonimização ou anonimização quando viável, criptografia apropriada, controle de acesso, MFA para contas administrativas, logs protegidos, segregação de ambientes, validação server-side, rate limiting e retenção limitada.

Nenhum produto ou página deve afirmar “conformidade estrita”, “alinhamento HIPAA/LGPD” ou garantia equivalente sem evidência, escopo, contrato e validação jurídica. Controles técnicos não substituem governança.

## 10. Incidentes

Qualquer suspeita de exposição, perda, acesso indevido ou tratamento irregular deve seguir `docs/INCIDENT_RESPONSE_POLICY.md`. A avaliação deve identificar titulares, dados, volume, causa, impacto, medidas de contenção e eventual comunicação.

## 11. Retenção e eliminação

A retenção deve ser definida por finalidade, contrato, obrigação legal e necessidade de defesa de direitos. Ao final do prazo, os dados devem ser eliminados, anonimizados ou devolvidos conforme o caso. Backups e cópias devem ter prazo compatível e não podem ser esquecidos no plano de eliminação.

A tabela operacional está em `docs/DATA_RETENTION_POLICY.md`.

## 12. Revisão e prestação de contas

O DPO/encarregado e a segurança devem revisar esta política ao menos uma vez por ano. Evidências mínimas incluem registros de tratamento, versões de avisos, solicitações de titulares, contratos de operadores, avaliações de fornecedores, incidentes, treinamentos e testes de controles.

## Referências

[1]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm "Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018"
[2]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-para-definicoes-dos-agentes-de-tratamento-de-dados-pessoais-e-do-encarregado "ANPD — Guia orientativo para agentes de tratamento e encarregado"
[3]: https://www.iso.org/standard/27001 "ISO/IEC 27001:2022 — Information security management systems — Requirements"
