// <!-- JavaScript: Load menu from CSV data + Back to Top -->
// Menu data from THEBACKYARD_Menu.csv
const menuData = [
  { category: "Grills & Chips", item: "Full Chicken", description: "Chips", price: "R250.00" },
  { category: "Grills & Chips", item: "1/4 Chicken", description: "Chips", price: "R80.00" },
  { category: "Grills & Chips", item: "Fish", description: "Chips", price: "R50.00" },
  { category: "Grills & Chips", item: "4 x Wings", description: "Chips", price: "R60.00" },
  { category: "Grills & Chips", item: "8 x Wings", description: "Chips", price: "R110.00" },
  { category: "Grills & Chips", item: "12 x Wings", description: "Wings & Chips", price: "R150.00" },
  { category: "Grills & Chips", item: "Beef/Pork cut", description: "Chips", price: "R90.00" },
  { category: "Grills & Chips", item: "Beef/Pork cut", description: "wors & Chips", price: "R150.00" },
  { category: "Grills & Chips", item: "Pork Ribs (300g)", description: "Chips", price: "R100.00" },

  { category: "Platters", item: "Platter 1", description: "1x Beef/Pork, 4x Wings, 2x Wors, 2x Viennas, 1x 300g Ribs, Chips", price: "R300.00" },
  { category: "Platters", item: "Platter 2", description: "2x Beef/Pork, 8x Wings, 4x Wors, 4x Viennas, 2x 300g Ribs, Chips", price: "R400.00" },
  { category: "Platters", item: "Platter 3", description: "3x Beef/Pork, 12x Wings, 4x Wors, 6x Viennas, 3x 300g Ribs, Chips", price: "R500.00" },

  { category: "Traditional Platters", item: "Platter 1", description: "Skopo, Mogodu, Pork Trotters, Sheep Trotters, Salad, Pap", price: "R300.00" },
  { category: "Traditional Platters", item: "Platter 2", description: "Chicken feet, Livers, Intestines, Gizzards, Salad, Pap", price: "R200.00" },

  { category: "Braai Meat", item: "Beef/Pork & Wors", description: "Pap + 2 Salads + Gravy", price: "R130.00" },
  { category: "Braai Meat", item: "1/4 Chicken", description: "Pap + 2 Salads + Gravy", price: "R70.00" },
  { category: "Braai Meat", item: "1/4 Chicken & Wors", description: "Pap + 2 Salads + Gravy", price: "R100.00" },

  { category: "Cooked Meals", item: "Skopo (half cut)", description: "Pap + 2 Salads + Gravy", price: "R120.00" },
  { category: "Cooked Meals", item: "Beef Stew", description: "Pap + 2 Salads + Gravy", price: "R80.00" },
  { category: "Cooked Meals", item: "Mogodu", description: "Pap + 2 Salads + Gravy", price: "R60.00" },
  { category: "Cooked Meals", item: "Pork Trotters (Thlakwana)", description: "Pap + 2 Salads + Gravy", price: "R60.00" },

  { category: "Kotas", item: "Slay Queen", description: "Archar, egg & chips", price: "R20.00" },
  { category: "Kotas", item: "Ghana", description: "Archar, Polony, egg & chips", price: "R22.00" },
  { category: "Kotas", item: "Vuka", description: "Archar, Polony, cheese & chips", price: "R22.00" },
  { category: "Kotas", item: "Metampelong", description: "Archar, cheese, Polony, egg & chips", price: "R25.00" },
  { category: "Kotas", item: "Phelindaba", description: "Archar, vianna, Polony, egg & chips", price: "R28.00" },
  { category: "Kotas", item: "Skotipola", description: "Archar, cheese, Russian, Polony, egg & chips", price: "R30.00" },
  { category: "Kotas", item: "Gomora", description: "Archar, patty, cheese, russian, egg & chips", price: "R50.00" },
  { category: "Kotas", item: "Quantum", description: "Archar, patty, russian, pork rib, cheese, egg & chips", price: "R60.00" },

  { category: "Chips", item: "Chips", description: "Small", price: "R20.00" },
  { category: "Chips", item: "Chips", description: "Medium", price: "R30.00" },
  { category: "Chips", item: "Chips", description: "Large", price: "R40.00" },

  { category: "Extras", item: "Skopo", description: "Half Cut", price: "R100.00" },
  { category: "Extras", item: "1/4 Chicken", description: "1/4", price: "R50.00" },
  { category: "Extras", item: "Beef or Pork", description: "Cut", price: "R50.00" },
  { category: "Extras", item: "Pork Trotter", description: "Thlakwana", price: "R40.00" },
  { category: "Extras", item: "Sheep Trotter", description: "Thlakwana", price: "R20.00" },
  { category: "Extras", item: "Stew", description: "Beef or Chicken", price: "R50.00" },
  { category: "Extras", item: "Wors", description: "", price: "R30.00" },
  { category: "Extras", item: "Fish", description: "", price: "R30.00" },
  { category: "Extras", item: "Pap", description: "", price: "R10.00" },
  { category: "Extras", item: "Salad", description: "", price: "R10.00" },
  { category: "Extras", item: "Gravy", description: "", price: "R10.00" },
  { category: "Extras", item: "Regular Russian", description: "", price: "R15.00" },
  { category: "Extras", item: "Pork Russian", description: "", price: "R20.00" },
  { category: "Extras", item: "Cheese Slice", description: "", price: "R5.00" },
  { category: "Extras", item: "Polony Slice", description: "R4.00" },
  { category: "Extras", item: "EGG", description: "", price: "R6.00" },
  { category: "Extras", item: "Archaar", description: "Small", price: "R5.00" },
  { category: "Extras", item: "Archaar", description: "1kg", price: "R60.00" }
];

// Render the menu
function renderMenu() {
  const container = document.getElementById("menu-content");
  container.innerHTML = "";

  // Group items by category
  const grouped = {};
  menuData.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  // Render each category
  Object.keys(grouped).forEach(category => {
    const section = document.createElement("div");
    section.className = "menu-section";

    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `<h2>${category}</h2>`;
    section.appendChild(header);

    grouped[category].forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-item";

      const desc = item.description ? `<div class="item-desc">${item.description}</div>` : "";

      card.innerHTML = `
        <div class="item-details">
          <div class="item-name">${item.item}</div>
          ${desc}
        </div>
        <div class="item-price">${item.price}</div>
      `;
      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

// Back to Top functionality
function initBackToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Year in footer
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  initBackToTop();
  updateYear();
});
