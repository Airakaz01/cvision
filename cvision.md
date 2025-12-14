# CVision : L'Assistant Carrière Propulsé par l'IA

## Projet de fin de module : Planification et Innovation

**Réalisé par l'équipe projet :**  
Zakaria EL HOUARI • Youness BOUMLIK • Abdellah BOULIDAM

**Encadré par :**  
Pr. Hind HAFSI

**Décembre 2025**

---

## Sommaire : Cycle de Vie du Projet

1. Phase 1 : Démarrage & Analyse
2. Phase 2 : Planification
3. Phase 3 : Conception & Innovation
4. Phase 4 : Exécution & Contrôle
5. Phase 5 : Clôture

---

## Phase 1 : Démarrage & Analyse

### 1. Le Problème et la Vision

#### Le Constat (Pain Points)
- Marché de l'emploi saturé et ultra-compétitif
- Utilisation massive des ATS (Applicant Tracking Systems) qui rejettent les CVs non conformes
- Étudiants démunis face aux outils techniques

#### La Solution CVision
- Plateforme SaaS d'optimisation de CV par IA
- Analyse de compatibilité ATS temps réel

#### Objectif SMART
*"Lancer le MVP d'ici **3 mois**, acquérir **500 utilisateurs** actifs (étudiants) et atteindre un taux de conversion Premium de **2%**."*

---

### 2. La Charte de Projet (Project Charter)

| Élément | Description |
|---------|-------------|
| **Opportunité** | Digitalisation du recrutement et besoin d'accompagnement des jeunes diplômés |
| **Périmètre (Scope)** | **Inclus :** Web App, Upload PDF, Analyse NLP, Scoring, Recommandations<br>**Exclus :** Application Mobile (Phase 2), Module "Chasse de tête" |
| **Livrables Clés** | 1. Maquettes UX/UI (Figma)<br>2. Prototype fonctionnel (MVP)<br>3. Documentation technique et Business Plan |
| **Organisation** | **MOA :** Porteurs du projet (Stratégie & Besoin)<br>**MOE :** Équipe Technique (Réalisation & Dév) |

---

### 3. Parties Prenantes & Créativité

#### Matrice Pouvoir / Intérêt
- **Gérer de près :** Équipe fondatrice, Administration ENSA (Partenaire clé)
- **Satisfaire :** Partenaires Cloud (AWS/Azure), Investisseurs futurs
- **Informer :** Étudiants (Bêta-testeurs et futurs clients)

#### Atelier Créativité (6 Chapeaux)
- **Noir (Risques) :** Concurrence (Canva, LinkedIn), Hallucinations IA
- **Vert (Idées) :** Gamification du CV, Simulation d'entretien vocale
- **Jaune (Bénéfices) :** Scalabilité rapide, Marché Africain en essor

---

### 4. Analyse SWOT

| Forces (Interne) | Faiblesses (Interne) |
|------------------|----------------------|
| • Expertise technique IA<br>• Coûts de structure faibles | • Budget marketing limité<br>• Marque nouvelle |

| Opportunités (Externe) | Menaces (Externe) |
|------------------------|-------------------|
| • Chômage des jeunes diplômés<br>• Digitalisation en Afrique | • Mises à jour des ATS<br>• Géants (LinkedIn, Canva) |

---

## Phase 2 : Planification

### 5. Structure de Découpage (WBS)

```
Projet CVision
├── 1. Gestion & Juridique
│   ├── Business Plan
│   └── Création SARL
├── 2. Produit & Tech
│   ├── Algorithmes IA
│   ├── Plateforme Web
│   └── Base de Données
└── 3. Marketing & Lancement
    ├── Branding/Logo
    └── Campagne RS
```

---

### 6. Matrice des Responsabilités (RACI)

| Tâche / Lot de travail | Zakaria (Chef Projet/Tech) | Youness (IA Lead) | Abdellah (Produit/Mktg) |
|-------------------------|----------------------------|-------------------|-------------------------|
| Définition Architecture | **R** | C | I |
| Dév. Modèles NLP (IA) | A | **R** | C |
| Design UI/UX (Figma) | I | C | **R** |
| Frontend (React) | C | I | **R** |
| Stratégie Marketing | A | I | **R** |
| Gestion du Budget | **R** | I | I |
| Tests | C | **R** | C |

**Légende :** **R** : Réalise | **A** : Approuve | **C** : Consulté | **I** : Informé

---

### 7. Budget Prévisionnel Détaillé

| Poste de dépense | Type | Coût (MAD) | Détails |
|------------------|------|------------|---------|
| Infrastructure Cloud | OPEX | 5,000 | AWS (Instance GPU pour IA) + Vercel |
| Nom de domaine | CAPEX | 300 | cvision.ma (pour 2 ans) |
| Outils & Licences | CAPEX | 2,700 | Figma Pro, GitHub Pro, API OpenAI |
| Marketing Digital | OPEX | 10,000 | LinkedIn Ads, Campagne Facebook |
| Valorisation RH | Interne | 15,000 | Estimation temps/homme (3 étudiants) |
| Réserve Risques | Provision | 2,000 | 6% du budget cash |
| **TOTAL CASH** | | **20,000** | (Hors valorisation RH) |

---

### 8. Planning Gantt

**Calendrier logique de réalisation (3 mois)**

| Tâche | Mois 1 (Conception) | Mois 2 (Dév.) | Mois 3 (Test/Launch) |
|-------|---------------------|---------------|----------------------|
| Cadrage & Specs | ████████░░░░ | | |
| Dév. Backend/IA | ░░░░████████████ | ████░░░░░░░░ | |
| Frontend & UI | | ░░░░████████ | ████░░░░ |
| Tests & Recette | | | ░░░░████████ |
| Déploiement | | | ░░░░░░░░████ |

**Jalons :**
- **Jalon 1 (Fin Mois 1) :** Maquettes Validées
- **Jalon 2 (Fin Mois 2) :** MVP Beta

---

### 9. Lean Canvas (Business Model)

| Problème | Solution | Proposition de Valeur | Avantage | Clients |
|----------|----------|----------------------|----------|---------|
| • Rejet ATS<br>• Pas de feedback | • Analyseur IA<br>• Score ATS | *"Passez le filtre des robots."* | • Techno NLP<br>• Focus Maroc | • Étudiants<br>• Jeunes diplômés |

| Coûts | Revenus |
|-------|---------|
| Cloud, Dév., Mktg | Freemium, Premium |

---

## Phase 3 : Conception & Innovation

### 10. Approche Design Thinking

**Processus itératif :**
1. **Empathie :** 50+ interviews étudiants
2. **Définir :** *"Optimiser un CV en <5 min"*
3. **Idéation :** Brainstorming
4. **Prototype :** Maquettes Figma
5. **Tester :** Validation par 20 Bêta-testeurs

*Maquette : Landing Page disponible*

---

### 11. Conception : Dashboard Analyse

**Interface d'analyse de CV**

*Maquette V2 (Prototype - Itération)*

⚙ **En cours de développement (Backend 80%)**

---

### 12. Classification de l'Innovation

#### Types d'Innovation
- **Innovation Incrémentale :** Amélioration continue du processus de recrutement (plus rapide, plus précis que Word)
- **Innovation Adjacente :** Application de l'IA générative (technologie existante) à un nouveau marché (Étudiants marocains)

#### Vision Future (Roadmap)
- **Phase 1 :** Web App (MVP) au Maroc
- **Phase 2 :** App Mobile + Modules "Lettre de motivation"
- **Phase 3 :** Expansion Afrique Francophone

---

## Phase 4 : Exécution & Contrôle

### 13. Exécution Agile (Scrum & Kanban)

**Méthodologie :**
- Sprints de 2 semaines
- Daily Meeting
- Revue de Sprint

#### Tableau Kanban

| À Faire | En Cours | Terminé |
|---------|----------|---------|
| • Intégration Stripe<br>• Tests E2E<br>• Rédaction CGU | • **Optim. IA** (Youness)<br>• **Dashboard** (Abdellah)<br>• **Pipeline CI/CD** (Zakaria) | • Config AWS<br>• Charte Graphique<br>• Achat Domaine |

---

### 14. Outils Lean Management

#### 1. Méthode 5S (Organisation)
**Appliqué au code & doc :**
- **Trier :** Supprimer le code mort/inutile
- **Ranger :** Arborescence Git propre
- **Standardiser :** Normes PEP8 (Python)
- **Maintenir :** Revue de code hebdo

#### 2. Les 5 Pourquoi (Problem Solving)
*Ex: Retard sur le module MVP*
1. Pq? L'API IA répond lentement
2. Pq? Le modèle est trop lourd
3. Pq? Il est rechargé à chaque appel
4. Pq? Pas de système de cache
5. **Action :** Implémenter Redis Cache

#### 3. Kaizen (Amélioration)
- Rétrospectives à chaque fin de Sprint
- "Qu'est-ce qu'on peut faire mieux demain ?"
- Intégration immédiate du feedback utilisateur

---

### 15. Gestion des Risques

**Formule : Criticité = Probabilité × Impact**

| Risque | Prob. (1-4) | Imp. (1-4) | Criticité | Plan d'Action |
|--------|-------------|------------|-----------|---------------|
| **Tech :** Hallucination IA | 3 | 4 | **12 (Critique)** | Vérification par règles métiers + Disclaimer légal |
| **Financier :** Dépassement Cloud | 2 | 3 | **6 (Moyen)** | Alertes budget AWS + Optimisation du code |
| **Marché :** Adoption faible | 2 | 4 | **8 (Élevé)** | Offre Freemium attractive + Partenariats BDE |

---

## Phase 5 : Clôture

### 16. Clôture du Projet

#### 1. Validation des Livrables (VABF)
- ☐ Code source documenté et livré sur Git
- ☐ Manuel utilisateur / FAQ en ligne
- ☐ PV de recette interne validé

#### 2. Retour d'Expérience (REX)
- **Succès :** Rapidité d'exécution grâce à Scrum
- **Difficulté :** Coût API IA plus élevé que prévu (Besoin d'optimisation)
- **Suite :** Maintenance corrective transférée à l'équipe RUN

---

## Conclusion

**Synthèse**  
CVision allie **innovation technologique** et **gestion de projet rigoureuse** (WBS, RACI, Lean) pour résoudre le problème du chômage des jeunes diplômés.

**Prochaines étapes :**
1. Finalisation du MVP (Backend achevé à 80%)
2. Lancement Bêta auprès des étudiants de l'ENSA
3. Analyse des KPIs et itération

---

## MERCI DE VOTRE ATTENTION

**Questions ?**

*Projet CVision - 2025*

---

**Note :** Ce markdown est optimisé pour être utilisé avec des outils de présentation comme Marp, Reveal.js, ou des éditeurs qui supportent le markdown pour créer des slides.