# Art_Supplies_inventory
This is a personal web-based tool to help artists and crafters keep track of their materials, plan future projects, and create a wishlist of items they hope to buy.

## 📂 Pages Overview
| **File**            | **Description**                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `homepage.html`     | The main inventory page where users can add, edit, and delete items they already own.                                                 |
| `wishlist.html`     | A page to track art supplies users want to purchase, including linking to products and associating them with projects.                |
| `upcomingproj.html` | A planning page where users list future art projects, their details, and optionally upload reference images.                          |
| `script.js`         | JavaScript for handling inventory functions on `homepage.html`, including form handling, table rendering, local storage, and search.  |
| `scriptwish.js`     | JavaScript for `wishlist.html` that manages adding, editing, and deleting wishlist items, including project dropdown logic.           |
| `scriptproj.js`     | JavaScript for `upcomingproj.html`, supporting project entries, image upload, thumbnail previews, and click-to-enlarge functionality. |
| `chatbot.js`        | JavaScript for a simple chatbot feature allowing users to ask basic questions about art supplies like paint, brushes, yarn, etc.      |
| `style.css`         | The base styling applied across all pages for shared components like layout, navigation, and fonts.                                   |
| `stylewish.css`     | Additional or overridden styles specifically for the wishlist page layout and modals.                                                 |
| `styleproj.css`     | Styles specific to the upcoming projects page, including image previews and full-screen modals.                                       |


## ✅ How to Use
1. Open `homepage.html` in your browser to start managing your inventory.
2. Switch to `wishlist.html` to build your purchase list.
3. Plan ahead using `upcomingproj.html`.
4. Click the ❓ help buttons in the corner of each page for a quick description of how the page works.

### 🎨 Homepage - Inventory (`homepage.html`)
- Track art supplies you currently own.
- Add detailed entries with name, brand, category, source, and review.
- Edit and delete existing items.
- Search your list by product name.

### 🧾 Wishlist (`wishlist.html`)
- Add items you'd like to purchase.
- Select a related project from the Upcoming Projects page if applicable.
- Include a clickable link to the product if you have one.
- Search, edit, and delete wishlist entries.
- Use the chatbot for material suggestions or art supply questions.

### 📌 Upcoming Projects (`upcomingproj.html`)
- List and plan future craft/art projects.
- Add reason and detailed description.
- Upload an optional image for reference (click on it to enlarge).
- Projects added here appear as options in the Wishlist page.

## 🤖 Chatbot Feature
Located at the bottom of the Wishlist page, the chatbot allows you to ask questions like:
- "What type of brush should I use for acrylic paint?"
- "What can I make with yarn?"
- "What size beads work best for bracelets?"

The chatbot responds with helpful beginner-friendly suggestions.

## 💾 Storage
All data is saved to your browser using `localStorage`. No account or login is needed — your entries will remain even if you refresh or close the page (unless you clear your browser storage).

## 📁 File Structure
project-folder/
├── homepage.html
├── wishlist.html
├── upcomingproj.html
├── script.js
├── scriptwish.js
├── scriptproj.js
├── chatbot.js
├── style.css
├── stylewish.css
├── styleproj.css

