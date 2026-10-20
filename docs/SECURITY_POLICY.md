# Política de Segurança da Informação

**Organização:** PrimeOps  
**Versão:** 1.0  
**Status:** proposta operacional para validação pela direção, responsável de segurança e jurídico/DPO  
**Proprietário:** direção da PrimeOps  
**Periodicidade de revisão:** pelo menos anual e após mudança relevante, incidente ou alteração regulatória

## 1. Objetivo e compromisso

Esta política estabelece os princípios mínimos para proteger informações e serviços da PrimeOps contra acesso não autorizado, perda, alteração, indisponibilidade e divulgação indevida. O programa é estruturado com referência à ISO/IEC 27001:2022, ao NIST Cybersecurity Framework 2.0 e aos CIS Critical Security Controls v8.1. Essas referências orientam a implementação; não significam certificação, atestado de conformidade ou auditoria independente.

A PrimeOps deve tratar segurança como um processo contínuo de gestão de riscos. O objetivo é preservar confidencialidade, integridade e disponibilidade de informações, equilibrando controles técnicos, administrativos e físicos com a realidade do negócio.

## 2. Escopo

A política se aplica a:

- funcionários, prestadores, parceiros e terceiros com acesso a informações ou sistemas da PrimeOps;
- código-fonte, repositórios, pipelines, domínios, contas de nuvem, endpoints, estações, dispositivos de rede e ferramentas SaaS;
- dados de clientes, leads, fornecedores, funcionários e titulares;
- ambientes de desenvolvimento, teste, homologação e produção;
- serviços próprios e serviços de terceiros usados para formulário, hospedagem, armazenamento, comunicação, suporte, monitoramento e automação.

Sistemas de clientes não pertencem automaticamente ao escopo operacional da PrimeOps. Quando houver acesso autorizado a um ambiente de cliente, o contrato, o escopo técnico e as instruções do controlador devem ser registrados antes da execução.

## 3. Princípios

A PrimeOps adotará os seguintes princípios:

1. **Risco antes de ferramenta:** decisões de segurança devem considerar ameaça, impacto, probabilidade e contexto.
2. **Menor privilégio:** cada identidade recebe somente o acesso necessário, pelo tempo necessário.
3. **Defesa em profundidade:** nenhuma salvaguarda isolada deve ser tratada como proteção suficiente.
4. **Segurança por padrão:** configurações iniciais devem ser restritivas e mudanças devem ser rastreáveis.
5. **Privacidade desde o desenho:** coleta, retenção, compartilhamento e exposição de dados devem ser minimizados.
6. **Evidência e prestação de contas:** decisões, exceções, testes e incidentes devem gerar registros protegidos.
7. **Melhoria contínua:** controles devem ser revisados com base em métricas, incidentes, auditorias e mudanças de risco.

## 4. Governança e responsabilidades

A direção aprova a política, define apetite de risco, garante recursos e aceita riscos residuais formalmente.

O responsável de segurança mantém o registro de riscos, coordena controles, acompanha vulnerabilidades, conduz exercícios e reporta indicadores. Em uma equipe pequena, essa função pode ser acumulada por uma pessoa, mas deve existir uma substituição definida.

O DPO ou encarregado coordena temas de proteção de dados pessoais, direitos dos titulares, avisos de privacidade, registros de tratamento e interface com a autoridade quando aplicável. A função deve ser formalmente designada antes de a PrimeOps apresentar publicamente uma alegação de conformidade.

Desenvolvedores e operadores devem seguir padrões seguros, proteger credenciais, registrar mudanças, reportar suspeitas e não copiar dados reais para ambientes não autorizados.

Terceiros devem atender requisitos contratuais de segurança, confidencialidade, subcontratação, incidentes, retenção, eliminação e cooperação.

## 5. Gestão de riscos

A PrimeOps manterá um registro de riscos com, no mínimo:

- ativo, processo ou serviço afetado;
- ameaça e vulnerabilidade;
- impacto em confidencialidade, integridade, disponibilidade e privacidade;
- probabilidade e nível de risco inerente;
- controles existentes;
- responsável, prazo e risco residual;
- decisão de tratar, transferir, evitar ou aceitar;
- aprovação para riscos acima do apetite definido.

A avaliação deve ocorrer antes de novos serviços relevantes e ser revisada quando houver mudança de arquitetura, fornecedor, tipo de dado, integração, jurisdição ou ameaça.

## 6. Inventário e classificação da informação

Ativos e serviços devem ter proprietário, finalidade, criticidade, ambiente, dependências e ciclo de vida registrados. Informações devem ser classificadas, no mínimo, como:

- **Pública:** pode ser divulgada sem dano relevante, como conteúdo institucional aprovado.
- **Interna:** uso operacional da PrimeOps, sem divulgação pública autorizada.
- **Confidencial:** acesso restrito por função, como contratos, propostas, código não publicado e dados de fornecedores.
- **Restrita:** alto impacto se exposta, como credenciais, chaves, dados pessoais sensíveis, incidentes e informações de clientes.

Dados restritos não devem ser colocados em tickets públicos, issues abertas, campos de demonstração, screenshots ou ferramentas de IA sem aprovação e salvaguardas adequadas.

## 7. Controle de acesso e identidade

- Contas individuais são obrigatórias; contas compartilhadas são exceção documentada.
- MFA deve ser ativado para repositórios, nuvem, e-mail, domínio, DNS, CI/CD, fornecedores críticos e contas administrativas.
- Privilégios administrativos devem ser separados de contas de uso diário quando a plataforma permitir.
- Acesso deve ser concedido por função, aprovado pelo proprietário do sistema e revisto pelo menos trimestralmente.
- Acesso de terceiros deve ter prazo e ser removido no encerramento do serviço.
- Tokens, chaves e senhas devem ficar em gerenciador de segredos; nunca em HTML, JavaScript público, repositório, log ou mensagem.
- Segredos devem ser rotacionados após exposição suspeita, troca de responsável ou mudança de fornecedor.

## 8. Desenvolvimento seguro e mudanças

O código deve ser revisado antes da publicação, com validação automatizada compatível com o projeto. Mudanças de segurança, privacidade, autenticação, pagamentos, formulários e integrações exigem revisão adicional.

O ciclo mínimo inclui:

1. definição de requisito e risco;
2. revisão de dependências e origem de assets;
3. implementação com validação de entrada e saída;
4. revisão por outra pessoa quando possível;
5. testes de funcionalidade, segurança e acessibilidade;
6. registro de commit, revisão e rollback;
7. monitoramento pós-publicação.

Entrada do usuário nunca deve ser inserida em HTML, SQL, comandos, logs ou templates sem validação e codificação apropriadas. O site público deve manter CSP, headers de segurança e `form-action` restritivos.

## 9. Vulnerabilidades e configuração

A PrimeOps deve manter inventário de dependências e corrigir vulnerabilidades conforme risco. Como referência operacional:

- crítica: contenção imediata e correção prioritária;
- alta: plano de correção com prazo curto e aceite formal se não for possível corrigir;
- média: correção no ciclo planejado;
- baixa: acompanhar e corrigir conforme custo e risco.

Configurações padrão inseguras, serviços desnecessários, portas expostas e permissões amplas devem ser removidos. Backups, logs e monitoramento também devem ser protegidos contra alteração e acesso indevido.

## 10. Criptografia e proteção de segredos

Dados devem usar TLS em trânsito quando transmitidos por rede não confiável. Dados armazenados que contenham informação confidencial ou restrita devem usar criptografia apropriada ao serviço, com gestão de chaves, rotação e controle de acesso documentados.

A menção a um algoritmo, como AES-256, nunca deve ser usada isoladamente como prova de conformidade ou segurança integral. Claims públicos devem descrever o escopo real do controle.

## 11. Registro, monitoramento e evidências

Sistemas críticos devem gerar logs suficientes para investigação, sem registrar senhas, tokens, conteúdo excessivo ou dados pessoais desnecessários. Logs devem ter acesso restrito, retenção definida, proteção contra alteração e sincronização temporal quando aplicável.

Indicadores mínimos do programa incluem ativos inventariados, acessos revistos, vulnerabilidades vencidas, cobertura de MFA, backups testados, incidentes, tempo de detecção, tempo de resposta e ações corretivas concluídas.

## 12. Continuidade e recuperação

Serviços críticos devem ter objetivos de recuperação definidos por negócio, incluindo RTO e RPO quando aplicável. Backups devem ser protegidos, testados periodicamente e segregados do ambiente primário. Um backup não é considerado válido apenas por existir; a restauração deve ser comprovada.

Planos de continuidade devem identificar dependências, contatos, decisões de degradação, comunicação e retorno controlado.

## 13. Terceiros e cadeia de fornecimento

Antes de usar fornecedor que trate dados ou sustente serviço crítico, a PrimeOps deve avaliar finalidade, segurança, localização, subcontratados, incidentes, retenção, eliminação, disponibilidade, portabilidade e encerramento.

Contratos devem definir responsabilidades, níveis de serviço, confidencialidade, acesso, auditoria ou evidências equivalentes, notificação de incidentes e devolução ou eliminação de dados.

## 14. Incidentes

Suspeitas de phishing, vazamento, malware, credencial exposta, acesso indevido, indisponibilidade ou tratamento irregular devem ser reportadas imediatamente ao responsável de segurança. O procedimento detalhado está em `docs/INCIDENT_RESPONSE_POLICY.md`.

Ninguém deve apagar evidências, negociar com atacante ou publicar detalhes do incidente sem autorização do responsável pelo plano.

## 15. Exceções

Exceções devem registrar motivo, risco, compensações, proprietário, prazo de expiração e aprovação. Exceção permanente sem revisão não é aceitável.

## 16. Revisão e evidências mínimas

Esta política deve ser revisada anualmente. A organização deve manter, quando aplicável:

- registro de ativos e riscos;
- matriz de acessos e revisões;
- inventário de fornecedores;
- registros de mudanças e revisões de código;
- resultados de testes de backup e restauração;
- registros de incidentes e ações corretivas;
- treinamentos e compromissos de confidencialidade;
- evidências de revisão da política e aceite de riscos.

## Referências

[1]: https://www.iso.org/standard/27001 "ISO/IEC 27001:2022 — Information security management systems — Requirements"
[2]: https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20 "NIST Cybersecurity Framework 2.0"
[3]: https://www.cisecurity.org/controls "CIS Critical Security Controls"
[4]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm "Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018"
