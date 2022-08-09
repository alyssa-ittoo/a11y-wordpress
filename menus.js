document.addEventListener( 'DOMContentLoaded', ( function() {
/** @type {HTMLElement[]} */
	const menuItems = Array.from( document.querySelectorAll( 'li.menu-item-has-children' ) );

	/**
	 * @param {HTMLElement} el
	 * @param {string}      attr
	 * @param {any}         value
	 */
	const setAttr = ( el, attr, value ) => el.setAttribute( attr, value );

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
} ) );
