# Web Technologies Lab Midterm

- Name: Rumaan
- Roll number: FA24-BCS-098
- N = 98
- BP = 698px (600 + 98)
- H = 326 (98 x 7 = 686, 686 mod 360 = 326), accent colour hsl(326, 70%, 45%)
- K = 5 (98 mod 3 = 2, plus 3)
- Cart limit per product = 4 ((98 mod 4) + 2)
- Delivery date window: 29 Oct 2026 (exam date) to 4 Feb 2027 (exam date + 98 days)

## Files changed

- index.html
- product.html
- style.css
- checkout.html (new)
- script.js (new)
- README.md (new)

## Task 1 - Mega-menu

Added a "Shop by Category" item to the navbar in index.html and product.html (and the same navbar in checkout.html). It holds 5 columns (K = 5), each with a heading and 5 links, inside the existing nav. From 698px the panel is absolutely positioned under the navbar and opens with :hover or :focus-within, so Tab alone opens it. Below 698px the same 5 groups appear as independent details/summary accordions inside the hamburger menu. The navbar now switches between hamburger and full menu at 698px (instead of Bootstrap's 992px) using my own media query, and the navbar z-index was raised to 1040 so the panel sits above the WhatsApp button, product grid and card hover effects.

## Task 2 - Checkout form

Created checkout.html, linked from the cart icon. Two fieldsets with legends (Contact, Delivery), every input has a label joined with for/id, phone uses pattern="03[0-9]{2}-[0-9]{7}", and the date uses min and max. Red borders and messages appear only through :user-invalid, so nothing shows on page load. From 698px the fieldsets sit side by side and each field is a two-column CSS Grid (label left, input right); below that it is one column. The submit button is w-100.

## Task 3 - Cart badge and mini cart

Created script.js (plain JavaScript) and linked it in index.html. Add to Cart reads the name and price from the card and pushes them into a cart array, and the badge on the cart icon shows the array length. The cart icon toggles a mini-cart panel listing each item with a Remove button, and the total is calculated with reduce(). Each product can be added at most 4 times; then its button says "Limit reached" and is disabled until one is removed. Without JavaScript the cart icon still goes to checkout.html.

## AI tools used

Claude
chatgpt
