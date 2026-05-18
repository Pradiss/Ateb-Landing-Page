const whatsappNumber = "5519981112786";
const businessName = "ATEB Soluções";
const primaryRoute = "/";
const thankYouRoute = "/obrigado";
const phones = ["(19) 98111-2786", "(19) 99922-1978"];
const emails = [
  "laise.longatto@atebsolucoes.com.br",
  "leide.longatto@atebsolucoes.com.br",
];
const address = "Rua da Boa Morte, 194, Sala 112, Centro - Limeira - São Paulo";
const businessHours = "Segunda a Sexta, das 08h às 18h";
const navigation = [
  {
    label: "Início",
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
    label: "Política de Privacidade",
    href: "/politica-de-privacidade",
  },
  {
    label: "Termos de Uso",
    href: "/termos-de-uso",
  },
];

export const buildWhatsAppUrl = (
  message =
    "Olá, vim pela landing page da ATEB Soluções e gostaria de solicitar um diagnóstico estratégico."
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
  thankYouRoute,
  whatsappNumber,
  whatsappDisplay: phones[0],
  secondaryPhoneDisplay: phones[1],
  phones,
  whatsappUrl: buildWhatsAppUrl(),
  floatingWhatsAppUrl: buildWhatsAppUrl(
    "Olá, vim pela landing page da ATEB Soluções e gostaria de conversar sobre a operação da minha empresa."
  ),
  thankYouWhatsAppUrl: buildWhatsAppUrl(
    "Olá, acabei de enviar meu contato pelo site da ATEB Soluções e gostaria de agilizar o atendimento."
  ),
  emails,
  address,
  addressHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  hours: businessHours,
  businessHours,
  cnpj: "",
  defaultTitle:
    "Consultoria TOTVS, Protheus, RM, Fluig e Sankhya | ATEB Soluções",
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
    "integração TOTVS",
    "automação de processos",
  ],
  navLinks: navigation,
  navigation,
  legalNavigation,
};
