# Goow Boutique App

## Overview
Goow Boutique is a modern, minimalist e-commerce application for purchasing fashion items and accessories. This app mirrors the Goow Boutique web store, providing a seamless shopping experience on mobile devices.

## User Journeys
1. [Browse Products](docs/journeys/browse-products.md) - Explore the range of available fashion items and accessories.
2. [View Product Details](docs/journeys/view-product-details.md) - Get detailed information about a specific product.
3. [Add to Cart](docs/journeys/add-to-cart.md) - Add desired products to your shopping cart.
4. [Checkout](docs/journeys/checkout.md) - Complete your purchase securely.
5. [Manage Cart](docs/journeys/manage-cart.md) - View and modify items in your shopping cart.

## External APIs
- **Umami Analytics**: Used for tracking website statistics and user interactions.
- **Progressier**: Adds PWA functionality to the app, enabling offline access and installability.
- **Sentry**: Implements error logging for both frontend and backend to monitor and debug issues.

## Environment Variables
The following environment variables are required for the app to function correctly:

- `COCKROACH_DB_URL`: Database connection string.
- `NPM_TOKEN`: Token for accessing private NPM packages.
- `VITE_PUBLIC_APP_ID`: Public identifier for the app.
- `VITE_PUBLIC_APP_ENV`: Environment setting (e.g., development, production).
- `VITE_PUBLIC_SENTRY_DSN`: DSN for Sentry error logging.
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`: Website ID for Umami Analytics.

Ensure these variables are set in the `.env` file before running the application.