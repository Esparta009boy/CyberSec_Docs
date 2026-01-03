const dadosGlobais = [
    {
        "id": "mitre",
        "titulo": "MITRE ATT&CK",
        "categoria": "Framework",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://attack.mitre.org/"
    },
    {
        "id": "nist_csf",
        "titulo": "NIST Cybersecurity Framework",
        "categoria": "Framework",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.nist.gov/cyberframework"
    },
    {
        "id": "misp",
        "titulo": "MISP - Threat Intelligence",
        "categoria": "Ferramenta/Plataforma",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.misp-project.org/"
    },
    {
        "id": "rfcs",
        "titulo": "IETF RFCs",
        "categoria": "Normas/Protocolos",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.rfc-editor.org/"
    },
    {
        "id": "iana",
        "titulo": "IANA Protocols",
        "categoria": "Normas/Protocolos",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.iana.org/protocols"
    },
    {
        "id": "lgpd",
        "titulo": "LGPD (Lei Geral de Proteção de Dados)",
        "categoria": "Legislação",
        "grupo": "Documentações e Regulamentações",
        "link_oficial": "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
    },
    {
        "id": "gdpr",
        "titulo": "GDPR (General Data Protection Regulation)",
        "categoria": "Legislação",
        "grupo": "Documentações e Regulamentações",
        "link_oficial": "https://gdpr.eu/"
    },
    {
        "id": "marco_civil",
        "titulo": "Marco Civil da Internet",
        "categoria": "Legislação",
        "grupo": "Documentações e Regulamentações",
        "link_oficial": "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm"
    },
    {
        "id": "owasp",
        "titulo": "OWASP",
        "categoria": "Pentest/AppSec",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://owasp.org/"
    },
    {
        "id": "ptes",
        "titulo": "PTES (Penetration Testing Standard)",
        "categoria": "Pentest",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "http://www.pentest-standard.org/"
    },
    {
        "id": "osstmm",
        "titulo": "OSSTMM (ISECOM)",
        "categoria": "Pentest/Metodologia",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.isecom.org/"
    },
    {
        "id": "iso27001",
        "titulo": "ISO/IEC 27001",
        "categoria": "Norma Internacional",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.iso.org/isoiec-27001-information-security.html"
    },
    {
        "id": "cis_controls",
        "titulo": "CIS Controls",
        "categoria": "Framework",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.cisecurity.org/controls"
    },
    {
        "id": "cobit",
        "titulo": "COBIT",
        "categoria": "Governança",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.isaca.org/resources/cobit"
    },
    {
        "id": "pci_dss",
        "titulo": "PCI-DSS",
        "categoria": "Padrão de Segurança",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.pcisecuritystandards.org/"
    },
    {
        "id": "soc2",
        "titulo": "SOC 2",
        "categoria": "Relatório/Conformidade",
        "grupo": "Frameworks e Normas Essenciais",
        "link_oficial": "https://www.aicpa.org/topic/audit-assurance/audit-and-assurance-greater-than-soc-2"
    },
    {
        "id": "fisma",
        "titulo": "FISMA",
        "categoria": "Legislação (EUA)",
        "grupo": "Documentações e Regulamentações",
        "link_oficial": "https://www.cisa.gov/topics/cyber-threats-and-advisories/federal-information-security-modernization-act"
    },
    {
        "id": "ccpa",
        "titulo": "CCPA (California Consumer Privacy Act)",
        "categoria": "Legislação (EUA)",
        "grupo": "Documentações e Regulamentações",
        "link_oficial": "https://oag.ca.gov/privacy/ccpa"
    },
    {
        "id": "hipaa",
        "titulo": "HIPAA",
        "categoria": "Legislação (Saúde)",
        "grupo": "Documentações e Regulamentações",
        "link_oficial": "https://www.hhs.gov/hipaa/index.html"
    },
    {
        "id": "portal_igarape",
        "titulo": "Portal Brasileiro da Cibersegurança",
        "categoria": "Portal/Pesquisa",
        "grupo": "Sites e Portais de Referência",
        "link_oficial": "https://igarape.org.br/temas/ciberseguranca/"
    },
    {
        "id": "keeper_blog",
        "titulo": "Keeper Security Blog",
        "categoria": "Blog/Notícias",
        "grupo": "Sites e Portais de Referência",
        "link_oficial": "https://www.keepersecurity.com/blog/"
    },
    {
        "id": "alura_guia",
        "titulo": "Alura – Guia de Cibersegurança",
        "categoria": "Guia/Educação",
        "grupo": "Sites e Portais de Referência",
        "link_oficial": "https://www.alura.com.br/artigos/seguranca-da-informacao"
    },
    {
        "id": "sans",
        "titulo": "SANS Institute",
        "categoria": "Educação/Pesquisa",
        "grupo": "Sites e Portais de Referência",
        "link_oficial": "https://www.sans.org/"
    },
    {
        "id": "cisa",
        "titulo": "CISA",
        "categoria": "Agência Governamental",
        "grupo": "Sites e Portais de Referência",
        "link_oficial": "https://www.cisa.gov/"
    },
    {
        "id": "cert_br",
        "titulo": "CERT.br",
        "categoria": "CSIRT Nacional",
        "grupo": "Sites e Portais de Referência",
        "link_oficial": "https://www.cert.br/"
    }
];

const explicacoesGlobais = {
    "mitre": {
        "titulo": "MITRE ATT&CK",
        "descricao": "Uma base de conhecimento acessível globalmente de táticas e técnicas adversárias baseadas em observações do mundo real. É usado como base para o desenvolvimento de modelos e metodologias de ameaças específicas."
    },
    "nist_csf": {
        "titulo": "NIST Cybersecurity Framework",
        "descricao": "Um conjunto de diretrizes para mitigar riscos de segurança cibernética organizacional, baseado em padrões, diretrizes e práticas existentes. Estruturado em cinco funções principais: Identificar, Proteger, Detectar, Responder e Recuperar."
    },
    "misp": {
        "titulo": "MISP - Malware Information Sharing Platform",
        "descricao": "Uma plataforma de inteligência de ameaças de código aberto para compartilhar, armazenar e correlacionar indicadores de compromisso (IoCs) de ataques direcionados, inteligência de ameaças e informações sobre fraudes financeiras."
    },
    "rfcs": {
        "titulo": "Request for Comments (RFC)",
        "descricao": "Documentos técnicos e organizacionais sobre a Internet, incluindo as especificações e protocolos de rede (TCP/IP, HTTP, DNS, etc.). É a fonte primária para entender como a internet funciona em baixo nível."
    },
    "iana": {
        "titulo": "Internet Assigned Numbers Authority",
        "descricao": "Responsável pela coordenação global da raiz do DNS, endereçamento IP e outros recursos de protocolo da Internet. Essencial para consulta de portas padrão e números de protocolo."
    },
    "lgpd": {
        "titulo": "Lei Geral de Proteção de Dados (Brasil)",
        "descricao": "Lei nº 13.709/2018. Dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade."
    },
    "gdpr": {
        "titulo": "General Data Protection Regulation (EU)",
        "descricao": "Regulamento do direito europeu sobre privacidade e proteção de dados pessoais, aplicável a todos os indivíduos na União Europeia e Espaço Económico Europeu."
    },
    "marco_civil": {
        "titulo": "Marco Civil da Internet",
        "descricao": "Lei nº 12.965/2014. Estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil, abordando temas como neutralidade da rede e responsabilidade civil."
    },
    "owasp": {
        "titulo": "Open Web Application Security Project",
        "descricao": "Uma fundação sem fins lucrativos que trabalha para melhorar a segurança de software. Conhecida pelo OWASP Top 10, que lista as vulnerabilidades de aplicações web mais críticas."
    },
    "ptes": {
        "titulo": "Penetration Testing Execution Standard",
        "descricao": "Um padrão criado para oferecer uma linguagem comum e um escopo para a realização de testes de intrusão (Pentest), cobrindo desde a pré-interação até o relatório."
    },
    "osstmm": {
        "titulo": "Open Source Security Testing Methodology Manual",
        "descricao": "Uma metodologia completa para testes de segurança operacional, focada em verificar a segurança através de fatos observáveis e mensuráveis."
    },
    "iso27001": {
        "titulo": "ISO/IEC 27001",
        "descricao": "Padrão internacional para sistemas de gestão de segurança da informação (SGSI). Fornece requisitos para estabelecer, implementar, manter e melhorar continuamente a segurança da informação."
    },
    "cis_controls": {
        "titulo": "CIS Critical Security Controls",
        "descricao": "Um conjunto priorizado de ações de defesa cibernética que formam um ponto de partida para reduzir o risco de ataques cibernéticos."
    },
    "cobit": {
        "titulo": "COBIT (Control Objectives for Information and Related Technologies)",
        "descricao": "Framework de governança e gestão de TI, com foco em controles e auditoria. Ajuda as organizações a atingirem seus objetivos de governança e gerenciamento de informações."
    },
    "pci_dss": {
        "titulo": "PCI-DSS (Payment Card Industry Data Security Standard)",
        "descricao": "Padrão de segurança para dados de cartões de pagamento. Define requisitos para proteger dados de titulares de cartão e reduzir fraudes."
    },
    "soc2": {
        "titulo": "SOC 2 (Service Organization Control 2)",
        "descricao": "Relatório de conformidade voltado para segurança, disponibilidade, integridade de processamento, confidencialidade e privacidade dos dados em organizações de serviço."
    },
    "fisma": {
        "titulo": "FISMA (Federal Information Security Management Act)",
        "descricao": "Normas de segurança para órgãos federais dos EUA. Exige que agências federais desenvolvam, documentem e implementem programas de segurança da informação."
    },
    "ccpa": {
        "titulo": "CCPA (California Consumer Privacy Act)",
        "descricao": "Lei de privacidade do consumidor da Califórnia. Garante aos residentes da Califórnia direitos sobre seus dados pessoais, semelhante ao GDPR e LGPD."
    },
    "hipaa": {
        "titulo": "HIPAA (Health Insurance Portability and Accountability Act)",
        "descricao": "Normas de segurança para dados de saúde nos EUA. Estabelece padrões para a proteção de dados sensíveis de pacientes."
    },
    "portal_igarape": {
        "titulo": "Portal Brasileiro da Cibersegurança (Instituto Igarapé)",
        "descricao": "Reúne análises, normas e pesquisas sobre segurança digital, focado em políticas públicas e desafios da cibersegurança no Brasil e no mundo."
    },
    "keeper_blog": {
        "titulo": "Keeper Security Blog",
        "descricao": "Lista dos principais blogs e sites globais de cibersegurança, oferecendo notícias, tendências e dicas sobre proteção de senhas e segurança digital."
    },
    "alura_guia": {
        "titulo": "Alura – Guia de Cibersegurança",
        "descricao": "Conteúdo introdutório e prático sobre proteção digital, cobrindo conceitos básicos, carreiras e primeiros passos na área de segurança."
    },
    "sans": {
        "titulo": "SANS Institute",
        "descricao": "Uma das maiores fontes de treinamento e certificação em segurança da informação do mundo. Oferece cursos, artigos (Reading Room) e pesquisas de ponta."
    },
    "cisa": {
        "titulo": "CISA (Cybersecurity and Infrastructure Security Agency)",
        "descricao": "Agência de defesa cibernética dos EUA. Publica alertas de segurança, diretrizes de vulnerabilidades exploradas (KEV) e recursos para proteção de infraestrutura crítica."
    },
    "cert_br": {
        "titulo": "CERT.br",
        "descricao": "Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil. Mantém estatísticas, emite alertas e produz recomendações de segurança para o país."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCards(dadosGlobais);

    // Configurar o input para buscar ao pressionar Enter
    const inputBusca = document.getElementById("busca-input");
    inputBusca.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            iniciarBusca();
        }
    });

    // Configurar fechar modal
    const modalFecharBtn = document.getElementById("modal-fechar");
    const modal = document.getElementById("modal-explicacao");
    
    modalFecharBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function renderizarCards(lista) {
    const container = document.getElementById("conteudo-principal");
    container.innerHTML = "";

    // Definir a ordem desejada das categorias
    const gruposOrdem = [
        "Sites e Portais de Referência",
        "Frameworks e Normas Essenciais",
        "Documentações e Regulamentações"
    ];

    gruposOrdem.forEach(grupoNome => {
        // Filtrar itens deste grupo
        const itensDoGrupo = lista.filter(item => item.grupo === grupoNome);

        if (itensDoGrupo.length > 0) {
            // Criar Título da Seção
            const tituloSecao = document.createElement("h2");
            tituloSecao.className = "secao-titulo";
            tituloSecao.innerText = grupoNome;
            container.appendChild(tituloSecao);

            // Criar Grid de Cards
            const gridDiv = document.createElement("div");
            gridDiv.className = "card-container";

            itensDoGrupo.forEach(item => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>${item.titulo}</h3>
                    <span class="categoria">${item.categoria}</span>
                    <div class="card-actions">
                        <button onclick="abrirModal('${item.id}')">Ver Detalhes</button>
                        <a href="${item.link_oficial}" target="_blank" class="btn-link">Link Oficial</a>
                    </div>
                `;
                gridDiv.appendChild(card);
            });

            container.appendChild(gridDiv);
        }
    });
}

function iniciarBusca() {
    const termo = document.getElementById("busca-input").value.toLowerCase();
    
    const filtrados = dadosGlobais.filter(item => 
        item.titulo.toLowerCase().includes(termo) || 
        item.categoria.toLowerCase().includes(termo)
    );

    renderizarCards(filtrados);
}

function abrirModal(id) {
    const modal = document.getElementById("modal-explicacao");
    const titulo = document.getElementById("modal-titulo");
    const descricao = document.getElementById("modal-descricao");
    
    const info = explicacoesGlobais[id];
    titulo.innerText = info ? info.titulo : "Detalhes";
    descricao.innerText = info ? info.descricao : "Descrição não disponível.";
    
    modal.style.display = "flex";
}