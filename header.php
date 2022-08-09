<!-- Menu principal -->
<nav role="navigation" aria-label="<?php esc_html_e( 'Menu principal', 'text-domain' ); ?>">
    <button type="button" class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'text-domain' ); ?></button>
    <?php
    wp_nav_menu([
        'theme_location' => 'main-menu',
        'container'      => false,
        'walker'         => new A11y_Walker_Nav_Menu(),
        'menu_id'        => 'primary-menu',
    ]);
    ?>
</nav>
