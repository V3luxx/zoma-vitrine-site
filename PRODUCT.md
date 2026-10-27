# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary user: the French solo independent who takes appointments.** One person, no team, no employees: prothésiste ongulaire, esthéticien·ne, coiffeur·se indépendant·e, tatoueur·se, coach sportif, naturopathe, sophrologue, thérapeute ou praticien·ne bien-être, consultant·e / freelance, photographe, formateur·ice, professeur particulier, and any other activity booked by appointment. Often auto-entrepreneur, often in franchise de TVA (so TTC prices matter to them). No segment is prioritised: the showcase site must speak to all of them equally ("une personne, un outil"), with the métier pages carrying the vertical specifics. Confirmed by the owner on 2026-10-13.

**Situation and job.** They currently juggle a paper notebook or a generic online calendar, Instagram DMs / SMS / e-mail for client exchanges, a payment app or bank transfers for deposits, and a spreadsheet for invoicing and the livre des recettes. They lose time confirming appointments, suffer no-shows, and want to be paid upfront without chasing transfers. They work in a cabinet or salon, at the client's home, remotely by video, one-to-one or in groups. They use the phone between appointments and the computer in the evening.

**Visitor of this site.** The same person, evaluating whether to start a 30-day free trial. They arrive from search (SEO pages per métier), from Instagram/TikTok (@zoma.app), or by word of mouth. They are not technical and do not want training or long set-up.

## Product Purpose

Zoma is a French all-in-one booking and management app for solo independents: agenda, public booking page open 24/7, online deposit at booking, client messaging, client file with history and notes, e-mail and SMS reminders, waiting list, home-visit handling (address, zone, travel fees and time), video appointments, group sessions, shop/packages, invoicing and livre des recettes, statistics. The app lives at app.zoma-app.fr; this repository is the showcase site at zoma-app.fr.

**Purpose of the showcase site:** explain Zoma clearly and honestly to a solo independent, and convert them to a free 30-day trial without credit card (sign-up on app.zoma-app.fr). Secondary goal: let hesitant visitors ask a question or request a personalised demo via the contact form.

**Success:** trial sign-ups started from the site, and qualified contact requests. Nothing else is measured on the site today.

## Positioning

What Zoma claims, and a neighbouring product could not truthfully copy as a bundle:

- **One fixed TTC price, no commission.** 22,90 € TTC/month (Essentiel) or 39,90 € TTC/month (Pro); 229 € / 399 € per year (two months free). No commission on appointments, deposits or new clients. Prices are stated TTC because many competitors quote HT and the target is often in franchise de TVA.
- **The deposit lands on the pro's own Stripe account.** Percentage, fixed amount or full payment; slot blocked only once payment passes; refund according to the pro's own cancellation policy. Only Stripe's bank fees apply, billed by Stripe.
- **The client relationship stays with the pro.** Booking page in the pro's own name, no public directory, no other professionals alongside, messaging attached to each client file, full data export.
- **Built for the person who works alone, wherever they work.** Salon, home visit (address, zone, travel fees and travel time counted), video with no account to open, group sessions with remaining places and waiting list. Clients modify or cancel themselves, chain services, book for someone else.
- **No-shows cost less.** Deposit, e-mail and SMS reminders from Essentiel, one-click confirmation, automatic blocking after repeated absences, waiting list refills cancelled slots.
- **French, and "carré sur les papiers".** Team in France, support in French, database hosted in Paris, data in the EU, compliant invoices and livre des recettes, self-service import from Planity or Booksy (CSV/Excel clients, .ics appointments).

**Deliberate honesty about what Zoma does not do** (published on the "Pourquoi Zoma ?" page and must stay true): it does not bring new clients (no directory, no paid promotion); it does not manage a team (no per-collaborator agenda); it does not run a till or payment terminal (on-site payments are recorded, not processed).

## Operating Context

- **Two plans, one trial.** Essentiel 22,90 € TTC/month; Pro 39,90 € TTC/month; annual 229 € / 399 € (two months free). 30-day trial, no credit card, cancel anytime, plan change immediate and prorated. SMS reminders are excluded from the trial.
- **Launch offer (time-bound, as of 2026-10-08):** −30 % for 3 months on subscription during the launch period: Essentiel 16,03 € TTC (13,36 € HT), Pro 27,93 € TTC (23,28 € HT), then normal price. E-mail notice 30 days before the return to normal price; discount lost on cancellation. This replaced earlier "offre fondateur" variants; any future change must be reflected everywhere at once (hero banner, pricing cards, FAQ, JSON-LD, footer, "Pourquoi Zoma ?" page).
- **Migration offerte (tied to the launch offer, confirmed 2026-10-15).** During the launch period, on any plan, a pro coming from Planity, Booksy or another tool imports their clients, appointments and reviews themselves (self-service, a few minutes), and the Zoma team helps for free on request (e-mail or video). The site must say both halves: self-service import, free help if needed. It is not a done-for-you migration by default.
- **Plan boundaries that copy must respect.** Essentiel: booking page, agenda, deposit, custom hours, home visits, e-mail reminders, 50 SMS/month, client file, Planity/Booksy import, messaging, waiting list, Google/Apple/Outlook calendar sync, public-page customisation, invoicing and livre des recettes, recurring appointments, review requests, loyalty programme, per-service discounts, photo gallery, weekly recap, auto-block after absences, full export. Pro adds: video (2 000 minutes/month, counted per participant), group sessions, 150 SMS/month, shop and packages, inactive-client follow-up, statistics, priority support.
- **Legal and compliance surface.** Legal pages live on the app domain (mentions légales, CGU/CGV, confidentialité, DPA) and every footer links to them. A legal audit on 2026-10-08 adjusted wording; the contact form carries an RGPD notice (Web3Forms, 3-year retention). Some technical providers (auth, e-mail, video) are outside the EU with RGPD safeguards; the site says so in the FAQ.
- **Channels.** Contact by e-mail (contact@zoma-app.fr, answer within 24 h Monday to Friday) and Instagram/TikTok @zoma.app. The contact form posts to Web3Forms. Log-in and sign-up go to app.zoma-app.fr.
- **SEO structure.** Home (single page with hash-routed sections: fonctionnalités, tarifs, contact), `/comparatif/` ("Pourquoi Zoma ?", compares ways of organising, never named competitors), `/metiers/` index and 12 métier pages sharing `assets/metier.css`. Structured data: on the home a single `@graph` (Organization `#organization`, WebSite `#website`, WebPage, SoftwareApplication `#software` with featureList, audience and TTC Offers) plus FAQPage; every other page carries a WebPage (or CollectionPage) node pointing to `#website` and `#software`, métier pages add a BusinessAudience for their métier. Every visible FAQ question is mirrored in the page's FAQPage JSON-LD and vice versa. Each métier page has a "Comment ça marche" section written for that métier plus two search-intent questions ("Quel logiciel de prise de rendez-vous choisir quand on est…", "Existe-t-il une application de prise de rendez-vous gratuite pour…"). `/llms.txt` summarises Zoma's facts, prices, limits and pages for AI assistants and must change whenever prices or plan contents change. Sitemap and robots (AI crawlers explicitly allowed) maintained by hand.

## Capabilities and Constraints

- **Everything described on the site is in production** in the app as of 2026-10-13 (video, group sessions, shop, Stripe deposits, Planity/Booksy import, inactive-client follow-up, statistics). Confirmed by the owner. Future copy may describe these as present-tense facts; nothing else may be announced as available without confirmation.
- **Stack:** static HTML/CSS/vanilla JS, no build step, no framework, no package manager. Fonts from Fontshare (Satoshi). Hosted at zoma-app.fr; files are deployed as-is. Keep it buildless unless the owner decides otherwise.
- **Language:** French only (fr_FR). Inclusive forms with a median point are used for métiers ("client·es", "Esthéticien·ne"). Copy uses tutoiement ("tu", "ton", "tes"; imperatives like "Essaie", "Découvre"); vouvoiement is not used (owner decision, 2026-10-23). FAQ questions stay in the visitor's first person ("Puis-je…", "mes rendez-vous").
- **Pricing figures are product truth,** not design content: TTC first, HT in small, launch-offer figures exactly as above. Never round or restyle them into something different.
- **No team features, no acquisition promise, no till.** Copy must never imply otherwise.
- **Terminology:** "indépendant" ("tous les indépendants"), "auto-entrepreneur"; never "solopreneur"; "prestation"; "acompte"; "fichier clients"; "fiche client"; "livre des recettes"; "séance collective"; "à domicile"; "en visio"; plans are "Essentiel" and "Pro"; "page de réservation"; "liste d'attente"; "no-show" and "lapin" both appear in métier copy.
- **Undecided:** whether the site should carry a dedicated pricing or features URL instead of hash sections; analytics or conversion tracking (none present today).

## Brand Commitments

Binding for all future work on the site (confirmed by the owner on 2026-10-13):

- **Name:** Zoma, written "Zoma" (the nav sets "Zo" in ink and "ma" in violet as one word).
- **Logo:** the grid mark in `zoma-favicon.svg`, also used as favicon-32.png, favicon-180.png and in the Organization JSON-LD.
- **Colour:** the violet #6b52c8 (deep variant #5338a8) is the brand colour, declared as theme-color and used across all pages.
- **Typeface:** Satoshi (via Fontshare) for display and body.
- **Voice:** plain, concrete, honest French; short sentences; speaks to one person who works alone; names the daily pain (DMs, carnet, tableur, lapins) and the exact relief; says openly what the product does not do ("en toute transparence"); never hype. Signature lines in use: "Fais ton métier. Zoma fait le reste.", "Fait avec soin en France", "Une vraie personne te répond".

## Evidence on Hand

- **Real app screenshot:** `assets/app-agenda.png` (1920×1080), the week view of a prothésiste ongulaire's agenda with salon, home, remote and group appointments; used in the hero with a lightbox.
- **Share image:** `og-image.png` (1200×630).
- **More app screenshots are available from the owner** (public booking page, client file, messaging, invoice, etc.) and may be requested for future surfaces. They must be real captures, not mock-ups presented as the app.
- **Full product truth in copy:** the pricing grid, plan contents, FAQ answers and the "Pourquoi Zoma ?" comparison are maintained facts, dated "au 8 octobre 2026" where shown.
- **Absent, must not be fabricated:** no customer testimonials, no named customers, no usage figures (subscribers, trials, bookings, no-show rates), no press, no partner or integration logos beyond the factual mentions of Stripe, Planity, Booksy, Google, Apple, Outlook. Confirmed by the owner on 2026-10-13: none exist for publication yet.

## Product Principles

1. **One person, one tool.** Every claim, example and métier page is written for someone who does everything alone; nothing addresses teams, managers or platforms.
2. **Say the real price and the real limit.** TTC, no commission, launch offer with its end condition, and the three things Zoma does not do. Honesty is the differentiator against platforms that hide commissions and HT prices.
3. **Relief over features.** Lead with the daily pain the pro recognises (DMs at midnight, chasing transfers, Sunday spreadsheet) and the concrete relief; feature names come second.
4. **The client relationship belongs to the pro.** Booking page in their name, their data, their deposit on their account: anything that would put Zoma between the pro and their client is off-brand.
5. **Nothing invented.** Only real screenshots, real figures and real facts; absence of proof is stated or left silent, never filled with placeholders.

## Accessibility & Inclusion

- Inclusive French with median points for métier labels and client references is a deliberate editorial choice to keep.
- Visitors read mostly on a phone between appointments: mobile-first legibility and tap targets matter more than desktop flourish.
- Existing conventions to preserve: visible focus styles, `prefers-reduced-motion` honoured, descriptive `alt` text on the app screenshot, semantic FAQ with `details/summary`.
