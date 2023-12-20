# Application Planning

## The Project: FAST REACT PIZZA CO.

### How to PLAN and BUILD a react application

From the earlier “thinking in react” lecture:

1. Break the desired UI into components
2. Build a static version (no state yet)
3. Think about state management + data flow

This works well for small apps with one page and a few features

In real-world apps, we need to adapt this process

1. Gather application requirements and features
2. Divide the application into pages
    1. Think about the overall ang page-level UI
    2. Break the desired UI into components
    3. Design and build a static version (no state yet)
3. Divide the application into feature categories
    1. Think about state management + data flow
4. Decide on what libraries to use (technology decisions)

### PROJECT REQUIREMENTS FROM THE BUSINESS

Very simple application, where users can order one or more pizzas from a menu

Requires no user accounts and no login: users just input their names before using the app

The pizza menu can change, so it should be loaded from an API ✅

Users can add multiple pizzas to a cart before ordering

Ordering requires just the user’s name, phone number and address

If possible, GPS location should also be provided, to make delivery easier

User’s can mark their order as priority for an additional 20% of the cart price

Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API

Payments are made on delivery, so no payment processing is necessary in the app

Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID

Users should be able to mark their order as ‘priority’order even after it has been placed

### FEATURES + PAGES

Features Categories:

User

Menu

Cart

Order

Necessary Pages:

Homepage `/`

Pizza menu `/menu`

Cart `/cart`

Placing a new order `/order/new`

Looking up an order `/order/:orderID`

### STATE MANAGEMENT + TECHNOLOGY DECISIONS

User → global UI state (stays in app)

Menu → global remote state (fetched from API)

Cart → global UI state (stored in app)

Order → global remote state (fetched and submitted to API)

| Routing | React Router | the standard for react SPA |
| --- | --- | --- |
| Styling | tailwind | trendy way of styling applications that we want to learn |
| Remote State management | React Router | new way of fetching data right inside React Router that is worth exploring |
| UI State management | Redux | State is fairly complex. Redux has many advantages for UI state. Also, we want to practice redux a bit more |

# Setting Up a Professional File Structure

📁 src

---📁 features

------📁 cart

------📁 menu

------📁 order

------📁 user

---📁 services

---📁 ui

---📁 utils