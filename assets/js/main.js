const translations = {
  en: {
    nav_solutions:"Solutions", nav_pricing:"Products & Pricing", nav_method:"Method", nav_intel:"Intelligence", nav_about:"About", nav_contact:"Contact",
    hero_eyebrow:"OPERATIONAL INTELLIGENCE", hero_title:"Understand your environment.<br>Improve your operations.<br>Reduce exposure.",
    hero_sub:"PrimeOps combines operational intelligence, observability and exposure management to help organizations understand what is happening before they decide what to change.",
    hero_cta1:"View Products & Pricing →", hero_cta2:"Our Method →",
    m1:"Operational health indicators", m2:"Agent response target", m3:"Encryption controls by scope", m4:"Coverage subject to terms",
    diag_infra:"Infrastructure", diag_telemetry:"Observability", diag_exposure:"Exposure", diag_intelligence:"INTELLIGENCE", diag_decision:"DECISION & AUTOMATION",
    
    v1_h:"Technology creates visibility. Intelligence creates understanding.",
    v1_p:"Modern environments generate enormous amounts of operational data. The challenge is not simply collecting it — it is understanding what matters, what is exposed and what requires action.",
    v_sub1:"What is happening?", v_p1:"Establish baseline metrics across infrastructure, endpoints, traffic flows, and software nodes.",
    v_sub2:"What is at risk?", v_p2:"Identify process bottlenecks, security vulnerabilities, and operational compliance gaps.",
    v_sub3:"What should change?", v_p3:"Execute controlled architectural interventions and automated workflows based on evidence.",
    wf1_h:"Observability", wf1_p:"Understand systems, performance and events.",
    wf2_h:"Exposure Management", wf2_p:"Identify weaknesses, risks and attack surfaces.",
    wf3_h:"Operational Intelligence", wf3_p:"Transform telemetry into actionable insight.",
    wf4_h:"Autonomous Workflows", wf4_p:"Turn knowledge into repeatable automated operations.",

    ag_title:"Autonomous Conversational Agents in Action",
    ag_sub:"Replacing legacy bots with context-aware virtual agents that schedule meetings, trigger confirmation calls, and update CRMs seamlessly.",
    chat_header:"PrimeOps Virtual Agent (Calendar & Booking)", chat_status:"Active Session",
    chat_m1:"Hello, I'd like to schedule an executive discovery session for next Tuesday morning.",
    chat_m2:"I checked the team schedule. Tuesday at 10:00 AM EST is open. Shall I confirm this slot and issue a calendar invite with a voice reminder?",
    chat_m3:"Yes, please. Send it to john@acme.com.",
    chat_m4:"Confirmed! Invite sent to john@acme.com, CRM record updated, and automated voice confirmation scheduled 2 hours prior.",

    ind_title:"Target Environments & Industries", ind_sub:"Tailored operational setups designed for high-requirement sectors.",
    ind1_h:"Healthcare & Clinics", ind1_p:"Autonomous booking agents, patient confirmation calls, and cloud backup with privacy controls defined by service scope.",
    ind2_h:"Legal & Financial Offices", ind2_p:"Encrypted cloud drive, Active Directory server management, and 24/7 lead qualification agents.",
    ind3_h:"Logistics & Services", ind3_p:"Active NOC server monitoring, automated WhatsApp/SMS status triggers, and managed helpdesk.",
    ind4_h:"Smart Spaces & IoT", ind4_p:"Industrial telemetry sensoring, access control systems, and residential automation setup.",

    sol_title:"Solutions", sol_sub:"Four areas of work, applied together against the same operational map.",
    s1_h:"Operational Visibility", s1_p:"Monitoring, telemetry, hardware setup and network reorganization for SMBs and enterprise environments.",
    s2_h:"Managed IT & Windows Admin", s2_p:"Windows Server administration, active directory, automated data backups and infrastructure maintenance.",
    s3_h:"AI Conversational Agents & Scheduling", s3_p:"Autonomous customer service virtual agents, calendar booking orchestration, and CRM workflow triggers.",
    s4_h:"Smart Spaces & IoT", s4_p:"Residential and industrial automation, access control systems and telemetry sensoring.",

    wwd_title:"From operational data to operational intelligence.", wwd_sub:"Real-time observability suite across enterprise nodes.",
    
    meth_title:"A method before a solution.", meth_sub:"PrimeOps approaches technology through understanding, evidence and controlled execution.",
    m1_tag:"PHASE 01 // DIAGNOSIS", m1_h:"Map & Observe", m1_p:"In-depth mapping of operational workflows, systems, data pipelines, and infrastructure to establish baseline operational metrics.",
    m2_tag:"PHASE 02 // CONTEXT", m2_h:"Analyze & Correlate", m2_p:"Cross-referencing operational data to identify process bottlenecks, efficiency gaps, and security vulnerabilities without disruption.",
    m3_tag:"PHASE 03 // ARCHITECTURE", m3_h:"Decide & Design", m3_p:"Engineering tailored architectural interventions, process redesigns, and AI automation rules aligned with organizational goals.",
    m4_tag:"PHASE 04 // EXECUTION", m4_h:"Automate & Protect", m4_p:"Controlled deployment of automated workflows, active governance, and continuous exposure defense subject to applicable coverage and contract terms.",
    meth_quote:"Think before acting. Understand before changing. Document to evolve.",

    p_title:"Products & Pricing", p_sub:"Service scope and support terms defined per plan. Choose standalone SaaS or per-device IT support.",
    p1_h:"Cloud Drive & Backup", p1_amt:"$69 <span>/ mo</span>", p1_desc:"High-speed secure storage, cloud drive hosting and automated redundancy backup (up to 1TB / 20 users).", p1_s:"No setup fee",
    p1_f1:"Encrypted Cloud Storage", p1_f2:"Daily Redundant Backups", p1_f3:"Self-managed Drive Portal", btn_stripe:"Request Cloud Drive setup",
    
    p2_h:"AI Virtual Agents", p2_amt:"$99 <span>/ mo</span>", p2_desc:"Autonomous conversational agents, appointment scheduling, and optional voice confirmation calls & WhatsApp alerts.",
    p2_s:"$499 One-time Setup Fee", pricing_note:"*Values in BRL are estimates and may vary according to exchange rate, taxes, IOF, bank fees and payment method. Final scope and pricing will be confirmed before contracting.", p2_f1:"Autonomous Conversational Agent", p2_f2:"Automated Calendar Integration", p2_f3:"Optional Voice & SMS Triggers", btn_scope:"Configure Agent Scope",
    
    p3_h:"Managed IT & Helpdesk", p3_desc:"Full remote IT support, Windows Admin, server maintenance & NOC active monitoring.", p3_s:"Min. 10 Workstations",
    p3_amt:"$45 <span>/ workstation / mo</span>", p3_f1:"10, 20 or 40+ Workstations", p3_f2:"Windows Server Admin & AD", p3_f3:"IT support subject to applicable coverage and contract terms", btn_quote:"Get Per-Device Quote",
    
    p4_h:"On-Site & Smart IoT", p4_desc:"Hardware setup, network reorganization, or residential & industrial IoT automation projects.", p4_amt:"Custom Scope", p4_s:"Includes Site Survey",
    p4_f1:"On-Site Network & Hardware", p4_f2:"Industrial & Home Automation", p4_f3:"Wise Invoice (USD / EUR / BRL)", btn_wise:"Request Custom Invoice",

    ab_title:"Architecting Secure & Scalable Infrastructure", ab_p1:"PrimeOps is an enterprise-grade technology and security company specializing in robust infrastructure, automated monitoring, advanced AI virtual agents, and global digital operations.",
    ab_p2:"Our mission is to eliminate operational blind spots through continuous observability, allowing organizations to scale with institutional trust and complete system clarity.",
    ab_l1:"Professional liability coverage subject to applicable terms", ab_l2:"Encryption controls defined by service scope", ab_l3:"Controls designed to support LGPD & GDPR privacy requirements",
    ab_card_h:"PrimeOps Operations", ab_card_p:"Delivering stability across cloud nodes, helpdesk support, and autonomous AI agents for clients worldwide.",
    
    f_privacy:"Privacy Policy & LGPD", f_cookies:"Cookies", f_terms:"Terms", f_dpo:"DPO Contact", cookie_text:"We use local storage only to remember your preferences. Non-essential technologies are activated only after your choice.", cookie_accept:"Accept", cookie_reject:"Reject", cookie_configure:"Configure", privacy_notice_link:"Privacy notice", cookie_preferences_link:"Learn more about cookies and preferences", footer_legal:"© 2026 PrimeOps LLC. All rights reserved. Professional liability coverage subject to applicable terms.", form_help:"Please do not include passwords, credentials, health information or other sensitive data.", placeholder_name:"John Doe", placeholder_company:"Acme Corp", placeholder_country:"United States", placeholder_email:"john@company.com", placeholder_message:"Describe requirements…", form_success:"Request submitted", form_success_p:"Our team will review your request and reach out shortly.",
    modal_h:"Request Proposal / Scope", modal_p:"Select required parameters for a tailored proposal.",
    lbl_name:"FULL NAME", lbl_company:"COMPANY", lbl_country:"COUNTRY", lbl_email:"WORK EMAIL", lbl_service:"SERVICE OF INTEREST", lbl_msg:"PROJECT PARAMETERS",
    service_placeholder:"Select a service", service_cloud:"Cloud Drive & Backup", service_ai:"AI Virtual Agents", service_it:"Managed IT & Helpdesk", service_iot:"On-Site & Smart IoT", service_other:"Other / Not sure yet",
    lbl_lgpd:"I have read the privacy notice and authorize PrimeOps to use these details to respond to my request.", form_sending:"Sending request…", form_error:"We could not send your request. Please try again.", btn_send:"Submit Request"
  },
  pt: {
    nav_solutions:"Soluções", nav_pricing:"Produtos & Preços", nav_method:"Método", nav_intel:"Inteligência", nav_about:"Sobre", nav_contact:"Contato",
    hero_eyebrow:"INTELIGÊNCIA OPERACIONAL", hero_title:"Entenda seu ambiente.<br>Melhore suas operações.<br>Reduza a exposição.",
    hero_sub:"A PrimeOps combina inteligência operacional, observabilidade e gestão de exposição para ajudar organizações a entender o que está acontecendo antes de decidir o que mudar.",
    hero_cta1:"Ver Produtos & Preços →", hero_cta2:"Nosso Método →",
    m1:"Indicadores de saúde operacional", m2:"Meta de resposta do agente", m3:"Controles de criptografia por escopo", m4:"Cobertura sujeita aos termos",
    diag_infra:"Infraestrutura", diag_telemetry:"Observabilidade", diag_exposure:"Exposição", diag_intelligence:"INTELIGÊNCIA", diag_decision:"DECISÃO & AUTOMAÇÃO",
    
    v1_h:"A tecnologia cria visibilidade. A inteligência cria entendimento.",
    v1_p:"Ambientes modernos geram volumes massivos de dados operacionais. O desafio não é apenas coletá-los — é entender o que realmente importa, o que está exposto e o que exige ação.",
    v_sub1:"O que está acontecendo?", v_p1:"Estabeleça métricas essenciais em infraestrutura, endpoints, fluxos de tráfego e sistemas.",
    v_sub2:"O que está em risco?", v_p2:"Identifique gargalos de processos, vulnerabilidades de segurança e lacunas de conformidade.",
    v_sub3:"O que deve mudar?", v_p3:"Execute intervenções arquitetônicas e automações controladas com base em evidências.",
    wf1_h:"Observabilidade", wf1_p:"Entenda sistemas, desempenho e eventos.",
    wf2_h:"Gestão de Exposição", wf2_p:"Identifique pontos fracos, riscos e superfícies de ataque.",
    wf3_h:"Inteligência Operacional", wf3_p:"Transforme telemetria em insights acionáveis.",
    wf4_h:"Fluxos Autônomos", wf4_p:"Transforme conhecimento em operações repetíveis e automatizadas.",

    ag_title:"Agentes Conversacionais Autônomos em Ação",
    ag_sub:"Substituindo bots antigos por agentes virtuais contextuais que agendam reuniões, acionam chamadas de confirmação e atualizam CRMs sem fricção.",
    chat_header:"Agente Virtual PrimeOps (Agenda e Reservas)", chat_status:"Sessão Ativa",
    chat_m1:"Olá, gostaria de agendar uma sessão de demonstração para a próxima terça de manhã.",
    chat_m2:"Verifiquei a agenda da equipe. Terça-feira às 10:00 EST está livre. Confirmo este horário e envio um convite com lembrete de voz?",
    chat_m3:"Sim, por favor. Envie para john@acme.com.",
    chat_m4:"Confirmado! Convite enviado para john@acme.com, registro no CRM atualizado e confirmação de voz agendada para 2 horas antes.",

    ind_title:"Setores e Ambientes Atendidos", ind_sub:"Configurações operacionais sob medida para setores de alta exigência.",
    ind1_h:"Saúde & Clínicas", ind1_p:"Agentes autônomos de agendamento, confirmação de pacientes e backup com controles de privacidade definidos pelo escopo do serviço.",
    ind2_h:"Escritórios Jurídicos & Financeiros", ind2_p:"Drive em nuvem criptografado, gestão Active Directory e qualificação de leads 24/7.",
    ind3_h:"Logística & Serviços", ind3_p:"Monitoramento ativo de servidores NOC, gatilhos automáticos de WhatsApp/SMS e Helpdesk gerenciado.",
    ind4_h:"Espaços Inteligentes & IoT", ind4_p:"Sensoriamento industrial, controle de acesso e automação predial/residencial.",

    sol_title:"Soluções", sol_sub:"Quatro áreas de atuação aplicadas em conjunto no mesmo mapa operacional.",
    s1_h:"Visibilidade Operacional", s1_p:"Monitoramento, telemetria, configuração de hardware e reorganização de rede para PMEs e grandes empresas.",
    s2_h:"TI Gerenciada & Windows Admin", s2_p:"Administração Windows Server, Active Directory, backups automáticos e manutenção de infraestrutura.",
    s3_h:"Agentes de IA & Agendamento", s3_p:"Agentes virtuais autônomos de atendimento, orquestração de agenda e gatilhos para CRM.",
    s4_h:"Espaços Inteligentes & IoT", s4_p:"Automação residencial e industrial, controle de acesso e sensoriamento de telemetria.",

    wwd_title:"Do dado à inteligência operacional.", wwd_sub:"Suíte de observabilidade em tempo real em nós corporativos.",
    
    meth_title:"Um método antes de uma solução.", meth_sub:"A PrimeOps aborda a tecnologia por meio do entendimento, evidência e execução controlada.",
    m1_tag:"FASE 01 // DIAGNÓSTICO", m1_h:"Mapear & Observar", m1_p:"Mapeamento profundo de fluxos operacionais, sistemas, pipelines de dados e infraestrutura para estabelecer métricas de desempenho.",
    m2_tag:"FASE 02 // CONTEXTO", m2_h:"Analisar & Correlacionar", m2_p:"Cruzamento de dados operacionais para identificar gargalos de processos, lacunas de eficiência e vulnerabilidades sem interrupção.",
    m3_tag:"FASE 03 // ARQUITETURA", m3_h:"Decidir & Projetar", m3_p:"Engenharia de intervenções arquitetônicas, redesenho de processos e regras de automação de IA alinhadas aos objetivos estratégicos.",
    m4_tag:"FASE 04 // EXECUÇÃO", m4_h:"Automatizar & Proteger", m4_p:"Execução controlada de fluxos automatizados, governança ativa e defesa contínua de exposição sujeita à cobertura e aos termos contratuais aplicáveis.",
    meth_quote:"Pense antes de agir. Entenda antes de mudar. Documente para evoluir.",

    p_title:"Produtos & Preços", p_sub:"Escopo de serviço e termos de suporte definidos por plano. Escolha entre SaaS independente ou suporte por dispositivo.",
    p1_h:"Drive em Nuvem & Backup", p1_amt:"R$ 346 <span>/ mês*</span>", p1_desc:"Armazenamento seguro corporativo e rotinas automáticas de backup (até 1TB / 20 usuários).", p1_s:"Sem taxa de setup",
    p1_f1:"Armazenamento Nuvem Criptografado", p1_f2:"Backups Diários Redundantes", p1_f3:"Portal de Gerenciamento", btn_stripe:"Solicitar configuração do Cloud Drive",
    
    p2_h:"Agentes Virtuais de IA", p2_amt:"R$ 497 <span>/ mês*</span>", p2_desc:"Agentes conversacionais autônomos, agendamento de consultas e chamadas opcionais de confirmação por voz e WhatsApp.",
    p2_s:"Setup único: R$ 2.505* (referência: US$ 499)", p2_f1:"Agente Conversacional Autônomo", p2_f2:"Integração de Agenda Automatizada", p2_f3:"Gatilhos de Voz e SMS Opcionais", btn_scope:"Configurar Escopo do Agente",
    
    p3_h:"TI Gerenciada & Helpdesk", p3_desc:"Suporte remoto completo, Windows Admin, manutenção e monitoramento NOC.", p3_s:"Mínimo de 10 estações (≈ R$ 2.260/mês*)",
    p3_amt:"R$ 226 <span>/ estação / mês*</span>", p3_f1:"10, 20 ou 40+ Estações", p3_f2:"Windows Server Admin & AD", p3_f3:"Suporte sujeito à cobertura e aos termos contratuais aplicáveis", btn_quote:"Cotar por Dispositivo",
    
    p4_h:"Projetos & Automação Smart", p4_desc:"Reorganização de redes corporativas e automação industrial/predial.", p4_amt:"Escopo Sob Medida", p4_s:"Inclui Estudo de Viabilidade",
    p4_f1:"Redes e Hardware On-Site", p4_f2:"Automação Predial e Industrial", p4_f3:"Fatura Wise (USD / EUR / BRL)", btn_wise:"Solicitar Fatura Wise",

    ab_title:"Arquitetando Infraestruturas Seguras e Escaláveis", ab_p1:"A PrimeOps é uma empresa de tecnologia e segurança corporativa especializada em infraestrutura robusta, monitoramento automatizado, agentes virtuais de IA e operações digitais globais.",
    ab_p2:"Nossa missão é eliminar pontos cegos operacionais por meio de observabilidade contínua, permitindo que organizações se expandam com confiança institucional e clareza de sistema.",
    ab_l1:"Cobertura de responsabilidade sujeita aos termos aplicáveis", ab_l2:"Controles de criptografia definidos pelo escopo do serviço", ab_l3:"Controles projetados para apoiar requisitos LGPD e GDPR",
    ab_card_h:"Operações PrimeOps", ab_card_p:"Oferecendo estabilidade em nós de nuvem, suporte helpdesk e agentes autônomos de IA para clientes em todo o mundo.",
    
    f_privacy:"Política de Privacidade & LGPD", f_cookies:"Cookies", f_terms:"Termos", f_dpo:"Contato DPO", cookie_text:"Usamos armazenamento local apenas para lembrar suas preferências. Tecnologias não essenciais só serão ativadas após sua escolha.", cookie_accept:"Aceitar", cookie_reject:"Recusar", cookie_configure:"Configurar", privacy_notice_link:"Aviso de privacidade", cookie_preferences_link:"Saiba mais sobre cookies e preferências", footer_legal:"© 2026 PrimeOps LLC. Todos os direitos reservados. Cobertura de responsabilidade sujeita aos termos aplicáveis.", form_help:"Não inclua senhas, credenciais, dados de saúde ou outras informações sensíveis.", placeholder_name:"Nome completo", placeholder_company:"Nome da empresa", placeholder_country:"Brasil", placeholder_email:"nome@empresa.com", placeholder_message:"Descreva os requisitos…", form_success:"Solicitação enviada", form_success_p:"Nossa equipe analisará sua solicitação e entrará em contato.", pricing_note:"*Valores em reais são estimativas e podem variar conforme câmbio, impostos, IOF quando aplicável, spread cambial, tarifas bancárias e meio de pagamento. O escopo e o preço final serão confirmados antes da contratação.",
    modal_h:"Solicitar Proposta / Escopo", modal_p:"Selecione os parâmetros do projeto para receber uma proposta.",
    lbl_name:"NOME COMPLETO", lbl_company:"EMPRESA", lbl_country:"PAÍS", lbl_email:"E-MAIL CORPORATIVO", lbl_service:"SERVIÇO DE INTERESSE", lbl_msg:"PARÂMETROS DO PROJETO",
    service_placeholder:"Selecione um serviço", service_cloud:"Drive em Nuvem e Backup", service_ai:"Agentes Virtuais de IA", service_it:"TI Gerenciada e Helpdesk", service_iot:"Projetos Presenciais e Smart IoT", service_other:"Outro / Ainda não sei",
    lbl_lgpd:"Li o aviso de privacidade e autorizo a PrimeOps a usar estes dados para responder à minha solicitação.", form_sending:"Enviando solicitação…", form_error:"Não foi possível enviar sua solicitação. Tente novamente.", btn_send:"Enviar Solicitação"
  }
};

function sanitizeTranslation(value) {
  const template = document.createElement('template');
  template.innerHTML = value;
  template.content.querySelectorAll('*').forEach(node => {
    if (!['BR', 'SPAN'].includes(node.tagName)) node.replaceWith(document.createTextNode(node.textContent || ''));
    [...node.attributes].forEach(attribute => node.removeAttribute(attribute.name));
  });
  return template.innerHTML;
}

function setLang(lang){
  const selected = translations[lang] ? lang : 'en';
  document.getElementById('html-root').lang = selected;
  document.documentElement.dataset.lang = selected;
  const formLanguage = document.getElementById('form-language');
  if (formLanguage) formLanguage.value = selected;
  document.getElementById('btn-en').classList.toggle('active', selected==='en');
  document.getElementById('btn-pt').classList.toggle('active', selected==='pt');
  document.getElementById('btn-en').setAttribute('aria-pressed', String(selected==='en'));
  document.getElementById('btn-pt').setAttribute('aria-pressed', String(selected==='pt'));

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[selected] && translations[selected][key]) el.innerHTML = sanitizeTranslation(translations[selected][key]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[selected] && translations[selected][key]) el.placeholder = translations[selected][key];
  });
  document.querySelectorAll('[data-legal-key]').forEach(link => {
    const key = link.getAttribute('data-legal-key');
    const routes = { privacy: { en: 'privacy-en.html', pt: 'privacy.html' }, cookies: { en: 'cookies-en.html', pt: 'cookies.html' }, terms: { en: 'terms-en.html', pt: 'terms.html' } };
    if (routes[key]) link.href = routes[key][selected];
  });
  localStorage.setItem('primeops-language', selected);
}

let lastModalTrigger = null;

function openModal(serviceName = '', trigger = null) {
  const modal = document.getElementById('contact-modal');
  document.getElementById('modal-form-content').style.display = 'block';
  document.getElementById('modal-success').style.display = 'none';
  document.getElementById('modal-error').style.display = 'none';
  document.getElementById('form-status').textContent = '';
  document.getElementById('modal-title').textContent = translations[document.documentElement.lang]?.modal_h || 'Request Proposal / Scope';
  if (serviceName) document.getElementById('modal-msg').value = `Parameter Interest: ${serviceName}\nDetails: `;
  modal.setAttribute('aria-hidden', 'false');
  lastModalTrigger = trigger;
  document.getElementById('input-name').focus();
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  modal.setAttribute('aria-hidden', 'true');
  if (lastModalTrigger) lastModalTrigger.focus();
}

function setCookiePreference(value) {
  localStorage.setItem('primeops-cookie-preference', value);
  document.getElementById('cookie-banner').style.display = 'none';
}

function acceptCookies() { setCookiePreference('accepted'); }
function rejectCookies() { setCookiePreference('rejected'); }
function toggleCookiePreferences() {
  document.getElementById('cookie-preferences').classList.toggle('active');
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submit = form.querySelector('[type="submit"]');
  const status = document.getElementById('form-status');
  const consent = document.getElementById('lgpd_agree');
  const consentTimestamp = document.getElementById('consent-timestamp');
  if (consent?.checked && consentTimestamp) consentTimestamp.value = new Date().toISOString();
  submit.disabled = true;
  status.className = 'form-status';
  status.textContent = translations[document.documentElement.lang]?.form_sending || 'Sending request…';
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: {'Accept':'application/json'} });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    document.getElementById('modal-form-content').style.display = 'none';
    document.getElementById('modal-success').style.display = 'block';
  } catch (error) {
    status.className = 'form-status error';
    status.textContent = translations[document.documentElement.lang]?.form_error || 'We could not send your request. Please try again.';
  } finally {
    submit.disabled = false;
  }
}

function toggleMobileNav() {
  const button = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-nav');
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('active', !expanded);
}

function restorePreferences() {
  const savedLanguage = localStorage.getItem('primeops-language');
  setLang(savedLanguage === 'pt' ? 'pt' : 'en');
  if (localStorage.getItem('primeops-cookie-preference')) document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-open-modal]').forEach(button => {
    button.addEventListener('click', () => openModal(button.dataset.openModal || '', button));
  });
  document.getElementById('btn-en').addEventListener('click', () => setLang('en'));
  document.getElementById('btn-pt').addEventListener('click', () => setLang('pt'));
  document.getElementById('nav-toggle').addEventListener('click', toggleMobileNav);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('cookie-accept').addEventListener('click', acceptCookies);
  document.getElementById('cookie-reject').addEventListener('click', rejectCookies);
  document.getElementById('cookie-configure').addEventListener('click', toggleCookiePreferences);
  document.getElementById('contact-modal').addEventListener('click', event => { if (event.target.id === 'contact-modal') closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); document.getElementById('mobile-nav').classList.remove('active'); } });
  document.querySelectorAll('#mobile-nav a').forEach(link => link.addEventListener('click', toggleMobileNav));
  document.getElementById('modal-form').addEventListener('submit', handleFormSubmit);
  restorePreferences();
});
