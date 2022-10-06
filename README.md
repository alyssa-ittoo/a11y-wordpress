# a11y-wordpress
Walker [doc WP](https://developer.wordpress.org/reference/classes/walker/) maison pour rendre le menu WordPress accessible.

## Installation
* Créer un nouveau dossier (`walker` par exemple) dans votre thème (`themes/nom_de_votre_theme`).
* Ajouter le fichier `menus.php` dans ce nouveau dossier. Il permet d'étendre le walker [`Walker_Nav_Menu`](https://developer.wordpress.org/reference/classes/walker_nav_menu/) par défaut de WordPress en appliquant les correctifs d'accessibilité.
* Appeler ce fichier depuis le fichier `functions.php` : 
```php
require_once 'walker/menus.php';
```
### Créer un menu
* Enregistrer un emplacement de menu ([codex](https://developer.wordpress.org/reference/functions/register_nav_menu/)) dans le fichier de configuration du thème (`functions.php` ou un sous-fichier) :
```php
function register_my_menu() {
    register_nav_menu( 'main-menu' => __( 'Menu principal', 'text-domain' ) );
}
add_action( 'after_setup_theme', 'register_my_menu' );
```
* Afficher le menu en reprenant le code du fichier `header.php`, et l'insérer où vous le souhaitez dans le thème.
* Créer un menu depuis l'administration d'interface WordPress, en sélectionnant l'emplacement précédemment enregistré.

## Correctifs apportés par ce repo
* Ajout de sémantique ([landmarks ARIA](https://disic.github.io/guide-integrateur/1-gabarit-general.html#html5aria)).
* Indication de la page courante et de son parent direct ([`aria-current`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)).
* Précision via un attribut `title` si le lien s'ouvre dans un nouvel onglet.
* Signaler qu’un élément possède un sous-menu. Basé sur le tutoriel W3C ["Fly-out Menus"](https://www.w3.org/WAI/tutorials/menus/flyout/#flyoutnavkbbtn)
* Sur mobile, menu déroulant via un bouton.

## Tutoriel & explications
Vous retrouverez les explications de chaque points dans le tutoriel Alsacréations
