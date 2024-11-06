# GadgetHeaven - E-Commerce Platform

Welcome to **GadgetHeaven**, your go-to destination for the latest and greatest gadgets! This fully functional e-commerce platform is built with **React** and utilizes the **Context API** to manage the cart and wishlist, providing a seamless user experience.

## Live Website

You can check out the live demo of **GadgetHeaven** here:  
**[Live Demo Link](#)** *(https://splendorous-klepon-12f8f4.netlify.app/)*

## Project Overview

GadgetHeaven is a feature-rich e-commerce platform where users can browse, filter, and purchase the latest gadgets. It offers easy navigation, a smooth shopping experience, and various functionalities to manage products in the cart and wishlist.

---

## Features

- **Responsive Navbar** with active route highlighting.
- **Product Categories Sidebar** to filter products by categories (Computers, Phones, etc.).
- **Product Cards**: Each card displays detailed product information such as price, image, description, and specifications.
- **Add to Cart & Wishlist**: Visual feedback when adding products to the cart or wishlist. Once added, the buttons disable to prevent duplicates.
- **Sorting**: Sort products by price in descending order, and filter by availability (in stock vs out of stock).
- **Statistics Page**: A **Composed Chart** that shows product prices vs. product names, as well as scatter plots for ratings.
- **Cart & Wishlist Management**: Remove products from the cart or wishlist, and sort cart items by price.
- **Dynamic Title**: Page titles change dynamically to improve user experience.
- **Modal for Purchase Confirmation**: After adding products to the cart, users can confirm their purchase with a modal.
- **404 Error Page**: Users are redirected to a 404 page for invalid routes.
- **Real-time Cart Updates**: Display real-time updates for total items and subtotal price in the cart.
- **In-stock/Out-of-stock Handling**: Products that are out of stock cannot be added to the cart.
- **Prevent Duplicate Additions**: Users cannot add the same product to the cart twice or wishlist more than once.

---

## Installation and Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DKAbir111/gadget-heaven.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd gadget-heaven
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   Your app should now be running on `http://localhost:3000`.

---

## React Concepts and Tools Used

Certainly! Here’s the updated section reflecting the use of **Tailwind CSS** and **DaisyUI** along with the other libraries and tools:

---

## React Concepts and Tools Used

Certainly! Here's the updated section with **React Router** highlighting both **navigation** and **dynamic routes**:

---

## React Concepts and Tools Used

- **React Router** for navigation between pages and dynamic routes (enabling seamless transitions between different pages and loading content dynamically based on URL parameters).
- **Context API** for managing global state (Cart, Wishlist).
- **React Hooks** (`useState`, `useEffect`, `useNavigate`, `useLocation`) for managing component state and handling navigation.
- **React Toastify** for toasts that notify users about adding/removing items from the cart and wishlist.
- **React Icons** for displaying cart, wishlist, and other icons.
- **Recharts** for displaying charts in the statistics page.
- **React Rating** component for product ratings.
- **LocalStorage** for persisting cart and wishlist data across page reloads (optional).
- **Tailwind CSS** for utility-first CSS styling.
- **DaisyUI** for pre-built Tailwind components (e.g., buttons, modals, form elements) to speed up UI development.


---

## Pages

### Home Page

- **Banner Section**: A large banner that promotes featured products with a button that navigates to the Dashboard page.
- **Categories Sidebar**: Displays various product categories (Computers, Phones, Smartwatches, etc.) to filter gadgets.
- **Product Grid**: Products are displayed in a responsive grid. Clicking on a product takes users to the Product Details page.
- **Product Sorting**: Users can sort products by price (descending) and filter based on availability (in-stock vs out-of-stock).

### Product Details Page

- Displays detailed product information:
  - Product name, price, description, specifications, and image.
  - **Add to Cart** and **Add to Wishlist** buttons.
  - A 5-star **rating** system using **React Rating**.

### Cart & Wishlist Pages

- **Cart**:
  - View items in the cart, along with their name, price, and total price.
  - **Sort by Price** button to arrange cart items by price (descending order).
  - **Real-time Updates**: Display real-time updates for total product count and subtotal price.
  - **Remove Items**: Users can delete items from the cart.
  - Prevent cart total from exceeding $1000. If the total reaches this limit, no more products can be added.

- **Wishlist**:
  - View wishlist items with the ability to move them to the cart.
  - Users can delete items from the wishlist or add them to the cart. If the cart exceeds the price limit, an error toast is shown.

### Statistics Page

- A **Composed Chart** showing:
  - Y-axis: Product prices.
  - X-axis: Product names.
  - Scatter data representing product ratings.

### Help & Support Page

- **Help Center**: Answers to common questions regarding account management, product support, and more.
- **Contact Customer Care**: Provides options to contact customer support via email and live chat.
- **Shipping & Delivery**: Information about shipping policies, delivery times, and how to track shipments.
- **Order**: Helps users track and manage their orders, including canceling or modifying them.
- **Payment**: Guides on accepted payment methods, security, and troubleshooting payment issues.
- **Returns & Refunds**: Explains the return policy, process, and timeframes for receiving refunds.

### 404 Page

- **404 error page** is displayed for invalid routes, indicating that the page was not found.

---

## Features Implemented

- **Navbar** with route highlighting and responsive design.
- **Product Categories Sidebar** to easily filter products.
- **Product Sorting** by price (descending) and availability (in stock or out of stock).
- **Add to Cart & Wishlist** functionality with visual feedback and dynamic updates.
- **Real-time Cart Updates**: Show total item count and subtotal price in the cart.
- **Prevent Adding Out-of-Stock Products**: Products that are out of stock cannot be added to the cart.
- **Prevent Duplicate Items**: The same product cannot be added to the cart twice or to the wishlist more than once.
- **Toast Notifications** when adding/removing items from the cart or wishlist.
- **Modal for Purchase Confirmation** when items are added to the cart.
- **Cart and Wishlist Management**: Sorting items, removing them, and handling errors like price limits.
- **Dynamic Page Titles** and **Favicon** based on the current page.
- **404 Error Handling** for invalid routes.

---

## Future Enhancements

- Add pagination or infinite scroll for a larger product catalog.
- Implement user authentication for personalized experiences (login, registration).
- Integrate payment gateway for real transactions.
- Add more filters for products (by brand, rating, etc.).
- Allow users to leave product reviews and ratings.

## Authors and Acknowledgments

- **Darun Karas Abir** (GitHub: [@DKAbir111](https://github.com/DKAbir111))
- Special thanks to all contributors and users who provide feedback.
