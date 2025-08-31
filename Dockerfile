# Use PHP 8.2 with Apache for WordPress development
FROM php:8.2-apache

# Set www-data user UID to 1000 to avoid common file permission issues between host and container
RUN usermod -u 1000 www-data

# Enable Apache mod_rewrite for WordPress permalinks
RUN a2enmod rewrite

# Install Composer v2.8.9 globally
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --version=2.8.9 --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

# Install WP-CLI globally
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    libzip-dev \
    zlib1g-dev \
    unzip \
    nano \
    sudo \
    mariadb-client \
    && docker-php-ext-install mysqli zip gd