# Bienvenue sur KittyCoques!

  

Création d’un site e-commerce CMS avec **Flywheel**: génère un compte wordpress, la base de données sur MySql, nom de domaine temporaire.

Vente de coques de téléphones avec différentes catégories 5 catégories de produits

  

-Famille

-Paysages

-Animaux

-Jeux vidéos

-Divers

  

*Création fichier*

  

J’ai commencé par créer mon fichier dans mon bureau pour ensuite le créer et le cloner dans Github.

  

*CMS*

  

J’ai utilisé un CMS : Content Management System qui est un system de gestion de contenus. C’est-à-dire un regroupement de sites que l’on peut créer, gérer et éditer.

  

*Outils*

  

J’ai installer : *Flywheel*: outil de développement WordPress en local

  

#Étape 1 : installer Local by Flywheel#

#Étape 2 : configurer Local by Flywheel#

#Étape 3 : créez votre premier site WordPress#

#Étape 4 : Configuration de wordpress(exemple: choix de langue du bord, Options de lecture, etc...) Il génère un compte wordpress, la base de données sur MySql, nom de domaine temporaire.

  

*Wordpress*: concevoir, gérer les sites et ses contenus et informations.

Pour ce faire j’ai ouvert Local, je suis allée dans l’onglet Admin ce qui m’a ouvert Wordpress et j’ai installer les extensions pour pouvoir concevoir mon site e-commerce CMS.

  

*Extensions*

  

Je suis allée dans local puis Open Site et dans extension.

J’ai installé WooCommerce et suivi les instructions : adresse, style de produit choisi et suivre instructions pour l’installation des différentes extensions comme Facebook, Mailchimps, Creative.Email, Google Ads, Manage WP Worker pour WooCommerce.

  

# Thème Installation de thème 
**Store front** et configuration (charte graphique, menu, etc..)

  

# Plugin*

  

*#Elementor**: Constructeur de page.

**#Woocommerce**: Configuration des catégories, des payements, validation de commande et récépissé de commande, création des produits (titre, image, prix,....), mise en ligne sur le shop.

  

**#Akismet Anti-Spam**: Akismet est un anti-spam qui protéger notre site des indésirables. Notre site est pleinement configuré et protégé, même quand vous dormez. Pour qu'il soit fonctionnel est qu'il protège notre site, il faut créer un compte sur le site Akismet pour obtenir une clé API qui met sur le plugin Akismet dans les réglages.

  

**#iThemes Security**:Le plugin iThemes Security sécurise et protége notre site en effectue des sauvegardes régulières de notre base de données WordPress et nous permettant de nous remettre en ligne rapidement en cas d'attaque. Comme avec **Akismet** création de compte pour récupérer une clé API.

  

*#Classic Editor**: Ce plugin active l’éditeur classique de WordPress et l’ancienne disposition de l'écran de modification d’article (TinyMCE, boites à méta, etc.).**#GDPR Cookie Consent**: Ce plugin permet de montrer que notre site est conforme à la loi européenne sur les cookie et au RGPD ( Règlement général sur la protection des données).

  

**#Jetpack par WordPress.com**: Jetpack permet de connecter notre site à un compte WordPress.com pour profiter de fonctionnalités normalement réservées aux utilisateurs de WordPress.com.**#WPForms Lite**: Ce plugin est un constructeur de formulaire pour créer des formulaires de contact ou autre très facile d'utilisation.**#Yoast SEO**: Plugin qui permet d'analyser la visibilité et le référencement d'un page ou article.

  

**#GDPR Cookie Consent**: Ce plugin permet de montrer que notre site est conforme à la loi européenne sur les cookie et au RGPD ( Règlement général sur la protection des données).

  

**#Jetpack par WordPress.com**: Jetpack permet de connecter notre site à un compte WordPress.com pour profiter de fonctionnalités normalement réservées aux utilisateurs de WordPress.com.

  

**#WPForms Lite**: Ce plugin est un constructeur de formulaire pour créer des formulaires de contact ou autre très facile d'utilisation.

  

**#Yoast SEO**: Plugin qui permet d'analyser la visibilité et le référencement d'un page ou article.

  

# Base de données 
Connection direct avec wordpress via Flywheel
(**DATABASE**) pas besoin de passer par phpMyAdmin, il suffit de clicker sur **open admin**.

La base de données contient tout les fichiers de wordpress( **wp-admin, wp-content, wp-includes**).

Dans la table **wp_wc_product_meta_lookup** est répertorié tous les données de mes produits (id, prix, stock, etc..) elle est composé de 15 colonnes.

Dans la table ** wp_wc_customer_lookup** est répertorié tous les données de mes clients (id, prénom, nom, mail, etc..) elle est composé de 2 colonnes.
