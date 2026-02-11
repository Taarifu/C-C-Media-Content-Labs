export interface ConstitutionArticle {
  number: string;
  title: string;
  summary: string;
  keyPoints: string[];
  impact: string;
  impactLabel: string;
  slug: string;
  fullContent?: string;
}

export const constitutionArticles: ConstitutionArticle[] = [
  {
    number: "Article 27",
    title: "Equality and Freedom from Discrimination",
    summary:
      "Every person is equal before the law and has the right to equal protection and benefit of the law. Discrimination on any ground is prohibited.",
    keyPoints: [
      "Equal treatment regardless of race, sex, religion, or social origin",
      "Protection from both direct and indirect discrimination",
      "Special provisions for marginalized groups",
      "Affirmative action measures permitted",
    ],
    impact: "43%",
    impactLabel: "of Kenyans directly protected by equality provisions",
    slug: "article-27-equality",
    fullContent: `Article 27 is one of the most fundamental provisions in Kenya's 2010 Constitution, establishing the principle that all persons are equal before the law and entitled to equal protection and benefit of the law.

The article goes beyond simply declaring equality—it actively prohibits discrimination on numerous grounds including race, sex, pregnancy, marital status, health status, ethnic or social origin, color, age, disability, religion, conscience, belief, culture, dress, language, or birth.

What makes this article particularly powerful is its recognition of both direct and indirect discrimination. This means that even practices that appear neutral but have discriminatory effects can be challenged under this provision.

The Constitution also acknowledges historical inequalities by permitting affirmative action measures. These are not considered discriminatory if they're designed to protect or advance persons or groups disadvantaged by past discrimination.

This article serves as the foundation for numerous other rights and has been invoked in landmark cases involving LGBTQ+ rights, gender equality, disability rights, and access to education and healthcare.`,
  },
  {
    number: "Article 10",
    title: "National Values and Principles of Governance",
    summary:
      "Establishes the core values that bind Kenyans together and guide the exercise of State power and policy decisions.",
    keyPoints: [
      "Rule of law and democracy as fundamental principles",
      "Human dignity, equity, and social justice required",
      "Transparency and accountability in governance",
      "Sustainable development and protection of the environment",
    ],
    impact: "100%",
    impactLabel: "of government decisions must align with these values",
    slug: "article-10-national-values",
    fullContent: `Article 10 establishes the national values and principles of governance that form the bedrock of Kenya's constitutional democracy. These aren't just aspirational statements—they're binding principles that must guide the exercise of all State power.

The values include patriotism, national unity, sharing and devolution of power, the rule of law, democracy and participation of the people, human dignity, equity, social justice, inclusiveness, equality, human rights, non-discrimination and protection of the marginalized, good governance, integrity, transparency and accountability, and sustainable development.

Courts have held that these values aren't mere declarations but enforceable standards. Any State action that violates these principles can be challenged in court. This has made Article 10 a powerful tool for citizens demanding accountability from their government.

The article requires that these values be promoted in all aspects of Kenyan society, not just in government. This extends to private institutions, civil society, and individual conduct, creating a constitutional culture that permeates beyond State action.`,
  },
  {
    number: "Article 43",
    title: "Economic and Social Rights",
    summary:
      "Guarantees every person's right to adequate food, water, healthcare, housing, education, and social security.",
    keyPoints: [
      "Right to highest attainable standard of health",
      "Access to adequate housing and reasonable sanitation",
      "Freedom from hunger and right to adequate food",
      "Clean and safe water in adequate quantities",
      "Social security for those unable to support themselves",
      "Education and healthcare services",
    ],
    impact: "38%",
    impactLabel: "of Kenya's budget must go to basic social services",
    slug: "article-43-economic-social-rights",
    fullContent: `Article 43 is revolutionary in African constitutionalism, explicitly recognizing economic and social rights as justiciable rights rather than mere policy goals. This means Kenyans can go to court to demand these rights be fulfilled.

The article covers a comprehensive range of socio-economic rights: healthcare, housing, adequate food, water, social security, and education. Each of these is framed as an individual entitlement, not a privilege dependent on government goodwill.

However, the Constitution also recognizes that these rights require progressive realization—the State must take reasonable legislative and policy measures within available resources to achieve their realization. This has led to important debates about what constitutes "reasonable" and "available resources."

Courts have been increasingly willing to enforce these rights, ordering government to provide healthcare services, ensure access to water, and allocate resources for social protection. Article 43 has become a tool for holding government accountable for basic needs.`,
  },
  {
    number: "Article 35",
    title: "Access to Information",
    summary:
      "Every citizen has the right to access information held by the State or another person required for the exercise of any right.",
    keyPoints: [
      "Right to access State-held information",
      "Access to information held by others when needed for rights",
      "State must publish important information",
      "Limitations only where necessary and proportionate",
    ],
    impact: "89%",
    impactLabel: "increase in information requests since 2016",
    slug: "article-35-access-information",
    fullContent: `Article 35 transformed government secrecy into an exception rather than the rule. It establishes that citizens have a right to access information held by the State, and even information held by private parties when that information is necessary for exercising or protecting a right.

This provision has been operationalized through the Access to Information Act, which establishes procedures for requesting information and creates an independent commission to enforce these rights.

Journalists, civil society organizations, and ordinary citizens have used this article to demand disclosure of government contracts, budget allocations, policy documents, and decision-making processes. It's been crucial in fighting corruption and increasing transparency.

However, challenges remain. Many government offices lack the capacity or willingness to process information requests promptly. Some hide behind national security or confidentiality claims. Courts have had to balance the right to information against legitimate privacy and security concerns.`,
  },
  {
    number: "Article 47",
    title: "Fair Administrative Action",
    summary:
      "Everyone has the right to fair administrative procedures and to written reasons for administrative decisions.",
    keyPoints: [
      "Expeditious, efficient, lawful, reasonable and procedurally fair administrative action",
      "Right to be given written reasons for administrative decisions",
      "Right to judicial review of administrative action",
      "Protection against arbitrary state action",
    ],
    impact: "67%",
    impactLabel: "of administrative cases cite this article",
    slug: "article-47-fair-administrative-action",
    fullContent: `Article 47 is the citizen's shield against arbitrary government action. It establishes that administrative decisions—from local council rulings to national agency determinations—must meet basic standards of fairness and reasonableness.

The article requires that administrative action be expeditious, efficient, lawful, reasonable, and procedurally fair. This means government officials can't just make decisions based on whim or bias—they must follow proper procedures and give reasons.

The right to written reasons is particularly powerful. It forces transparency and creates accountability. When officials must explain their decisions in writing, they're more likely to ensure those decisions can withstand scrutiny.

This article has been used to challenge everything from license denials to employment terminations to procurement decisions. It's become a cornerstone of administrative law in Kenya, establishing that even discretionary powers must be exercised fairly.`,
  },
  {
    number: "Article 174",
    title: "Objects of Devolution",
    summary:
      "Defines the purposes of devolving government, including bringing services closer to the people and promoting democratic governance.",
    keyPoints: [
      "Promote democratic and accountable governance",
      "Foster national unity by recognizing diversity",
      "Give powers of self-governance to the people",
      "Recognize the right of communities to manage their own affairs",
      "Protect and promote marginalized groups and communities",
    ],
    impact: "47",
    impactLabel: "counties now have autonomous governance",
    slug: "article-174-objects-devolution",
    fullContent: `Article 174 outlines the ambitious vision behind Kenya's devolution system, one of the most comprehensive in Africa. It's not just about administrative decentralization—it's about fundamentally changing the relationship between government and citizens.

The article identifies multiple objectives: bringing power closer to the people, promoting democracy and accountability, fostering national unity while recognizing diversity, enabling communities to manage their own affairs, protecting marginalized groups, and ensuring equitable sharing of national resources.

Devolution has transformed Kenya's political landscape. County governments now control significant budgets and deliver critical services. Citizens can directly engage with their governors and county assemblies rather than relying on distant Nairobi bureaucrats.

However, implementation has been uneven. Some counties have thrived, delivering impressive healthcare, education, and infrastructure improvements. Others struggle with corruption, capacity gaps, and political dysfunction. The promise of devolution remains partially fulfilled.`,
  },
  {
    number: "Article 33",
    title: "Freedom of Expression",
    summary:
      "Protects freedom of expression, including media freedom and academic freedom, subject to reasonable limitations.",
    keyPoints: [
      "Freedom to seek, receive or impart information or ideas",
      "Freedom of artistic creativity and scientific research",
      "Academic freedom and freedom of scientific research",
      "Media freedom including establishment of independent media",
      "State must not interfere with media editorial independence",
    ],
    impact: "92%",
    impactLabel: "of Kenyans support free media (latest survey)",
    slug: "article-33-freedom-expression",
    fullContent: `Article 33 is Kenya's safeguard for free speech and a free press. It recognizes that democracy depends on the free flow of information and the ability to criticize those in power without fear.

The article protects not just political speech but artistic creativity, academic freedom, and scientific research. This broad protection reflects an understanding that freedom of expression serves multiple purposes—democratic participation, truth-seeking, and self-fulfillment.

Media freedom receives special attention, with specific provisions protecting editorial independence. The State cannot control what media outlets publish, and journalists have constitutional protection to investigate and report on matters of public interest.

However, the article also recognizes reasonable limitations. Speech that incites violence, hate speech, propaganda for war, or child pornography can be restricted. Courts must balance these competing interests, ensuring that restrictions are necessary and proportionate.`,
  },
  {
    number: "Article 232",
    title: "Values and Principles of Public Service",
    summary:
      "Establishes standards for public service including professionalism, transparency, accountability, and merit-based appointments.",
    keyPoints: [
      "High standards of professional ethics",
      "Efficient, effective and economic use of resources",
      "Responsive, prompt, effective, impartial and equitable service",
      "Involvement of the people in policy making",
      "Accountability for administrative acts",
      "Transparency and timely, accurate public information",
      "Fair competition and merit in appointments",
    ],
    impact: "25%",
    impactLabel: "improvement in public service delivery since 2010",
    slug: "article-232-public-service-values",
    fullContent: `Article 232 attempts to transform Kenya's public service from a patronage system into a professional, merit-based institution. It sets out values and principles that should guide how public servants conduct themselves and how public institutions operate.

The article requires high standards of professional ethics, efficient use of resources, and responsive service delivery. It demands transparency, accountability, and fair competition in appointments. These aren't suggestions—they're constitutional requirements.

Perhaps most importantly, it establishes that public service positions should be filled on the basis of merit, not political connections or tribal affiliation. This represents a direct challenge to the patronage politics that have historically plagued Kenya's public sector.

Implementation has been uneven. While some institutions have embraced these values and transformed their operations, others continue operating on the old paradigms. The constitutional commission tasked with enforcement has its work cut out.`,
  },
];
