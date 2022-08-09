document.addEventListener( 'DOMContentLoaded', ( function() {
	/** @type {HTMLElement[]} */
	const menuItems = Array.from( document.querySelectorAll( 'li.menu-item-has-children' ) );

	/**
	 * @param {HTMLElement} el
	 * @param {string}      attr
	 * @param {any}         value
	 */
	const setAttr = ( el, attr, value ) => el.setAttribute( attr, value );
  
  /**
	 * Menu de navigation avec sous-menu
	 *
	 * @see https://www.w3.org/WAI/tutorials/menus/flyout/#flyoutnavkbbtn
	 */
	menuItems.forEach( ( el ) => {
		const button = el.querySelector( 'button' );

		if ( button ) {
			button
				.addEventListener( 'click', function( event ) {
					const parent = this.parentNode;

					/**
					 * Si le sous-menu est ouvert :
					 * - on retire la classe "open" au sous-menu
					 * - on passe l'attribut "aria-expanded" à false
					 */
					if ( parent && parent.classList.contains( 'open' ) ) {
						parent.classList.remove( 'open' );

						setAttr( parent.querySelector( 'button' ), 'aria-expanded', 'false' );

						/**
						 * Si le sous-menu est fermé :
						 * - on ajoute la classe "open" au sous-menu
						 * - on passe l'attribut "aria-expanded" à true
						 */
					} else if ( parent ) {
						parent.classList.add( 'open' );

						setAttr( parent.querySelector( 'button' ), 'aria-expanded', 'true' );
					}

					event.preventDefault();
				} );
		}
	} );

	/**
	 * Mobile : au clic sur le bouton on affiche ou masque le menu de navigation
   *
   * (Code basé sur @see https://github.com/Automattic/_s/blob/master/js/navigation.js)
	 */

	/** @type {HTMLElement} */
	const siteNavigation = document.querySelector( 'nav' );

	if ( siteNavigation ) {
		/** @type {HTMLElement} */
		const mobileButton = siteNavigation.querySelector( 'button.menu-toggle' );

		/**
		 * Au clic sur le bouton mobile, on affiche ou masque le menu :
		 * - on ajouter/supprime la classe "toggled" sur la <nav> qui nous servira à masquer/afficher en css
		 * - on passe l'attribut "aria-expanded" à true/false
		 */
		if ( mobileButton ) {
			mobileButton.addEventListener( 'click', function() {
				siteNavigation.classList.toggle( 'toggled' );

				if ( mobileButton.getAttribute( 'aria-expanded' ) === 'true' ) {
					setAttr( mobileButton, 'aria-expanded', 'false' );
				} else {
					setAttr( mobileButton, 'aria-expanded', 'true' );
				}
			} );
		}
	}
} ) );
