# Política de Resposta a Incidentes

**Organização:** PrimeOps  
**Versão:** 1.0  
**Status:** proposta operacional para validação pela direção, segurança e jurídico/DPO  
**Periodicidade de revisão:** anual e após incidente significativo

## 1. Objetivo

Estabelecer um processo repetível para identificar, conter, investigar, comunicar, recuperar e aprender com incidentes de segurança, privacidade e disponibilidade. O procedimento complementa a Política de Segurança da Informação e deve ser aplicado com proporcionalidade ao impacto.

## 2. O que é incidente

É incidente qualquer evento confirmado ou suspeito que possa comprometer confidencialidade, integridade, disponibilidade, autenticidade, privacidade ou conformidade. Exemplos incluem credencial exposta, phishing bem-sucedido, malware, acesso indevido, vazamento, envio incorreto de dados, alteração não autorizada, indisponibilidade, falha de backup e vulnerabilidade explorada.

## 3. Papéis

- **Coordenador do incidente:** assume o comando operacional, define prioridades, registra decisões e convoca as funções necessárias.
- **Segurança/tecnologia:** preserva evidências, analisa causa, contém a ameaça e executa recuperação.
- **DPO/encarregado:** avalia impacto sobre dados pessoais, titulares, controlador, operador e eventual comunicação à ANPD ou a outras partes.
- **Jurídico/comunicação:** orienta obrigações legais, contratos, seguros e mensagens externas.
- **Proprietário do serviço:** informa dependências, impacto de negócio e critérios de retorno.

Uma pessoa pode acumular papéis em uma equipe pequena, desde que conflitos e decisões sejam registrados.

## 4. Classificação inicial

- **P1 — crítico:** risco de dano relevante, dados restritos expostos, comprometimento administrativo, indisponibilidade ampla ou ameaça ativa.
- **P2 — alto:** impacto significativo limitado a serviço, conta, cliente ou conjunto de dados, sem evidência de propagação ampla.
- **P3 — moderado:** evento contido, tentativa sem impacto confirmado ou falha com impacto operacional limitado.
- **P4 — baixo:** alerta, melhoria ou evento sem impacto material, mas útil para prevenção.

A classificação pode mudar conforme novas evidências. Não se deve esperar certeza absoluta para iniciar contenção.

## 5. Ciclo de resposta

### 5.1 Preparação

Manter contatos de emergência, inventário de ativos, acessos administrativos de contingência, backups testados, logging, fornecedores críticos e modelos de comunicação. Treinar pessoas para reportar sem medo de punição por erro honesto.

### 5.2 Detecção e registro

O receptor deve registrar horário, origem, descrição objetiva, sistema afetado, usuário envolvido, evidências disponíveis e ações já realizadas. O registro deve evitar copiar dados pessoais desnecessários.

### 5.3 Triagem e análise

O coordenador confirma ou descarta o evento, classifica severidade, identifica ativos e dados envolvidos, avalia alcance, determina quem precisa ser informado e cria uma linha do tempo. As evidências devem ser preservadas com integridade, acesso restrito e cadeia de custódia proporcional.

### 5.4 Contenção

Medidas possíveis incluem revogar sessões e tokens, resetar credenciais, isolar host, bloquear indicador, suspender integração, desabilitar regra, limitar tráfego ou retirar versão vulnerável. Toda contenção deve considerar o risco de destruir evidências ou ampliar indisponibilidade.

### 5.5 Erradicação e recuperação

Remover causa, corrigir configuração, aplicar patch, rotacionar segredos, reconstruir ambiente quando necessário e restaurar a partir de backup verificado. O retorno deve ser gradual, monitorado e autorizado pelo proprietário do serviço.

### 5.6 Comunicação

Comunicações internas devem ser factuais, necessárias e dirigidas a quem pode agir. Comunicações a cliente, fornecedor, seguradora, titulares ou autoridade devem passar por segurança, DPO e jurídico conforme o caso. Nunca declarar “nenhum dado foi afetado” antes de concluir a análise.

A avaliação de incidente envolvendo dados pessoais deve considerar os deveres do controlador e operador, o contrato aplicável e as orientações vigentes da ANPD. Não se deve inventar prazo ou obrigação sem validação do DPO/jurídico.

### 5.7 Pós-incidente

Em até prazo proporcional à severidade, produzir relatório com causa provável, linha do tempo, impacto, controles que funcionaram, falhas, decisões, comunicações, ações corretivas, responsável e prazo. O registro de risco e as políticas devem ser atualizados quando necessário.

## 6. Evidências e confidencialidade

Preservar logs, hashes, alertas, e-mails, configurações, imagens de disco e tickets somente quando necessários. Dados pessoais e segredos devem ser mascarados em relatórios e removidos de canais públicos. O acesso ao material do incidente deve ser limitado por necessidade de saber.

## 7. Exercícios e métricas

Realizar pelo menos um exercício anual de mesa para cenário de credencial exposta, indisponibilidade ou vazamento. Acompanhar tempo de detecção, tempo de contenção, tempo de recuperação, incidentes recorrentes, ações vencidas e cobertura de exercícios.

## 8. Referências

[1]: https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20 "NIST Cybersecurity Framework 2.0"
[2]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm "Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018"
[3]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-para-definicoes-dos-agentes-de-tratamento-de-dados-pessoais-e-do-encarregado "ANPD — Guia orientativo para agentes de tratamento e encarregado"
