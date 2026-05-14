const whatsappNumber = "5519981112786";
const businessName = "ATEB Solucoes";
const primaryRoute = "/consultoria-totvs-protheus-rm-fluig-sankhya";
const phones = ["(19) 98111-2786", "(19) 99922-1978"];
const emails = [
  "laise.longatto@atebsolucoes.com.br",
  "leide.longatto@atebsolucoes.com.br",
];
const address = "Rua da Boa Morte, 194, Sala 112, Centro - Limeira - Sao Paulo";
const businessHours = "Segunda a Sexta, das 08h as 18h";
const navigation = [
  {
    label: "Inicio",
    href: primaryRoute,
  },
  {
    label: "Serviços",
    href: `${primaryRoute}#servicos`,
  },
  {
    label: "Cases",
    href: `${primaryRoute}#cases`,
  },
  {
    label: "FAQ",
    href: `${primaryRoute}#faq`,
  },
  {
    label: "Contato",
    href: `${primaryRoute}#contato`,
  },
];
const legalNavigation = [
  {
    label: "Politica de Privacidade",
    href: "/politica-de-privacidade",
  },
  {
    label: "Termos de Uso",
    href: "/termos-de-uso",
  },
];

export const buildWhatsAppUrl = (
  message =
    "Ola, vim pela landing page da ATEB Solucoes e gostaria de solicitar um diagnostico estrategico."
) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const buildPhoneHref = (phone) => {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.startsWith("55") ? digits : `55${digits}`;

  return `tel:+${normalized}`;
};

export const buildMailHref = (email) => `mailto:${email}`;

export const siteConfig = {
  companyName: businessName,
  businessName,
  siteName: businessName,
  primaryRoute,
  whatsappNumber,
  whatsappDisplay: phones[0],
  secondaryPhoneDisplay: phones[1],
  phones,
  whatsappUrl: buildWhatsAppUrl(),
  floatingWhatsAppUrl: buildWhatsAppUrl(
    "Ola, vim pela landing page da ATEB Solucoes e gostaria de conversar sobre a operacao da minha empresa."
  ),
  emails,
  address,
  addressHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  hours: businessHours,
  businessHours,
  cnpj: "",
  defaultTitle:
    "Consultoria TOTVS, Protheus, RM, Fluig e Sankhya | ATEB Solucoes",
  defaultDescription:
    "Consultoria especializada em ERP TOTVS Protheus, TOTVS RM, Fluig e Sankhya para empresas que precisam automatizar processos, integrar sistemas e melhorar a performance operacional.",
  keywords: [
    "consultoria TOTVS",
    "consultoria Protheus",
    "consultoria TOTVS Protheus",
    "consultoria RM",
    "consultoria TOTVS RM",
    "consultoria Fluig",
    "consultoria Sankhya",
    "consultoria ERP Protheus",
    "consultoria ERP TOTVS",
    "consultor Protheus",
    "consultor TOTVS",
    "parceiro TOTVS",
    "integracao TOTVS",
    "automacao de processos",
  ],
  navLinks: navigation,
  navigation,
  legalNavigation,
};
