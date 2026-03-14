import {Cloud, Database, Github, Layout, Linkedin, Mail, MessageCircle, Rocket, Server, ShoppingCart, Smartphone } from "lucide-react";
import Image from 'next/image';
import { COLORS } from "../constants/design_constants";
import { ContactLink, NavLink, Project, Service, Skill, Stat, Step, Testimonial } from "../types/portfolio_types";

const NAV_LINKS: NavLink[] = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const STATS: Stat[] = [

  { num: '3', s: '+', label: "Années d'expérience" },
  { num: '10', s: '+', label: 'Clients satisfaits' },
  { num: '100', s: '%', label: 'Satisfaction client' },
];


const SKILLS: Skill[] = [
  { 
    icon: <Layout size={24} />, 
    title: 'Frontend', 
    desc: 'Interfaces réactives, performantes et accessibles.', 
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] 
  },
  { 
    icon: <Server size={24} />, 
    title: 'Backend & API', 
    desc: 'APIs robustes, sécurisées et documentées.', 
    tags: ['Node.js', 'NestJS', 'REST', 'JWT / OAuth', ] 
  },
  { 
    icon: <Database size={24} />, 
    title: 'Base de données', 
    desc: 'Conception, optimisation des requêtes, migrations.', 
    tags: ['PostgreSQL', 'MySQL', 'Prisma / TypeORM', 'Supabase'] 
  },
  { 
    icon: <Smartphone size={24} />, 
    title: 'Mobile Flutter', 
    desc: 'Apps cross-platform iOS & Android fluides.', 
    tags: ['Flutter', 'Dart', 'Firebase', 'Push Notifs', 'App / Play Store'] 
  },
  { 
    icon: <Cloud size={24} />, 
    title: 'DevOps & Cloud', 
    desc: 'Déploiement continu, scaling automatique.', 
    tags: ['Docker', 'GitHub Actions',  'VPS / Cloud'] 
  },
];

const PROJECTS: Project[] = [
  { 
    icon: (
      <Image 
        src="/sGop.jpeg" 
        fill
        alt="Global OrderPoint"
        className="object-cover"
      />
    ), 
    cat: 'Site', 
    badge: 'SaaS', 
    title: 'Global OrderPoint',
    view: "http://globalorderpoint.com/",
    desc: "plateforme de gestion tout-en-un pour les entreprises d'expédition. Automatisez vos processus, suivez vos envois et optimisez vos opérations en temps réel", 
    stack: ['React.js', 'TypeScript', 'Redux', 'Knex MySQL', 'Node JS'], 
    bg: 'linear-gradient(135deg,#0D1F2D,#1A3A4F)' 
  },
  { 
    icon: (
      <Image 
        src="/aGop.jpeg" 
        fill
        alt="Global OrderPoint App"
        className="object-cover"
      />
    ), 
    cat: 'E-commerce / Fullstack', 
    badge: 'E-commerce', 
    title: 'Global OrderPoint App', 
    view: "http://dev.app.globalorderpoint.com/",
    desc: "plateforme de gestion tout-en-un pour les entreprises d'expédition. Automatisez vos processus, suivez vos envois et optimisez vos opérations en temps réel", 
    stack: ['React', 'Node.js', 'MySQL', 'KKiapay', 'TypeScript'], 
    bg: 'linear-gradient(135deg,#1A0D2D,#2D1A4F)' 
  },
  { 
    icon: (
      <Image 
        src="/mq.jpeg" 
        fill
        alt="Marvel Quiz"
        className="object-cover"
      />
    ), 
    cat: 'Jeux de Quiz', 
    badge: 'Jeux', 
    title: 'Marvel Quiz', 
    view: "https://ultimate-marvel-quiz-cb398.web.app/",
    desc: "Application de quiz sur l'univers Marvel", 
    stack: ['React', 'Firebase'], 
    bg: 'linear-gradient(135deg,#0D2D1A,#1A4F2D)' 
  },
];

const SERVICES: Service[] = [
  { n: '01', title: 'Développement Web Full-Stack', desc: 'Applications web modernes de A à Z. Votre idée devient produit en quelques semaines.', items: ['Sites vitrine & landing pages haute performance', 'Applications web complexes (SPA, SSR, SSG)', 'APIs REST & MySQL documentées', 'Intégrations tierces (CRM, paiements, analytics)'] },
  { n: '02', title: 'Applications Mobiles Flutter', desc: 'Une codebase, deux plateformes. Apps iOS & Android fluides et natives.', items: ['Apps cross-platform iOS & Android', 'UI/UX soignée et intuitive', 'Offline-first et sync cloud', 'Publication App Store & Google Play'] },
  { n: '03', title: 'Refactoring & Performance', desc: "Audit, refactorisation et optimisation pour passer à l'échelle sans douleur.", items: ['Audit technique & code review', 'Optimisation LCP, CLS, TTFB', 'Migration vers stack moderne', 'Tests automatisés et CI/CD'] },
];

const STEPS: Step[] = [
  { n: '01', title: 'Découverte & Cadrage', desc: 'Appel stratégique pour comprendre vos besoins, cible et contraintes. Scope, priorités et budget clarifiés ensemble.', dur: '1–2 jours' },
  { n: '02', title: 'Proposition & Devis', desc: 'Cahier des charges détaillé avec fonctionnalités, stack recommandée, planning et devis précis. Pas de mauvaise surprise.', dur: '2–3 jours' },
  { n: '03', title: 'Design & Architecture', desc: "Wireframes, maquettes et choix d'architecture validés avec vous avant de coder.", dur: '3–7 jours' },
  { n: '04', title: 'Développement itératif', desc: "Sprints de 1 semaine avec démos régulières. Vous voyez l'avancement en temps réel.", dur: "2–8 semaines" },
  { n: '05', title: 'Tests & Validation', desc: 'Tests fonctionnels, performance et phase de recette. Tout est parfait avant le lancement.', dur: '3–5 jours' },
  { n: '06', title: 'Déploiement & Support', desc: 'Mise en production avec CI/CD configuré. Documentation complète. Support 30 jours inclus.', dur: '1–2 jours + 30j support', last: true },
];

const TESTIMONIALS: Testimonial[] = [
  { i: 'KD', g: `linear-gradient(135deg,${COLORS.accent2},${COLORS.accent})`, stars: 5, text: "Semiou a livré notre MVP SaaS en 6 semaines chrono, avec une qualité de code impressionnante. L'architecture est solide et notre équipe n'a eu aucun mal à reprendre le projet. Je le recommande sans hésitation.", name: 'Kofi Danso', role: 'CEO, TechStartup Ghana' },
  { i: 'AM', g: 'linear-gradient(135deg,#F97316,#EF4444)', stars: 5, text: "Notre application Flutter est magnifique et ultra-fluide. Semiou a su capter notre vision rapidement et l'a transcrite en une UX au-delà de nos espérances. Les mises à jour sont rapides et sans bugs.", name: 'Amira Mansouri', role: 'Fondatrice, HealthApp Tunisie' },
  { i: 'PR', g: 'linear-gradient(135deg,#059669,#10B981)', stars: 5, text: "J'ai fait appel à Semiou pour refactoriser une app Node.js devenue ingérable. En 3 semaines, tout était remis sur pied, documenté et un CI/CD opérationnel. Notre vélocité a doublé depuis.", name: 'Paul Renault', role: 'CTO, AgenceDigitale Paris' },
];

const CONTACT_LINKS: ContactLink[] = [
  { 
    icon: <Mail size={20} />, 
    label: 'Email', 
    val: 'semkolawole604@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=semkolawole604@gmail.com&su=Nouveau%20projet' 
  },
  { 
    icon: <Github size={20} />, 
    label: 'GitHub', 
    val: 'github.com/semiou', 
    href: 'https://github.com/Sem005' 
  },
  { 
    icon: <Linkedin size={20} />, 
    label: 'LinkedIn', 
    val: 'linkedin.com/in/semiou-yessoufou', 
    href: 'https://www.linkedin.com/in/semiou-yessoufou-1315a7219/' 
  },
  { 
    icon: <MessageCircle size={20} />, 
    label: 'WhatsApp', 
    val: 'Contact via WhatsApp', 
    href: 'https://wa.me/22969457621' 
  },
];


export { PROJECTS, SERVICES, SKILLS, STATS, STEPS, TESTIMONIALS, CONTACT_LINKS, NAV_LINKS };