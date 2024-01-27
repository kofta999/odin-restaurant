import "./menu.css";

const menuItems = [
  {
    name: "Chicken Kofta",
    description:
      "Grilled ground chicken with herbs and spices, served with rice and salad.",
    price: "$12.99",
  },
  {
    name: "Lamb Kofta",
    description:
      "Grilled ground lamb with herbs and spices, served with rice and salad.",
    price: "$14.99",
  },
  {
    name: "Falafel Platter",
    description:
      "Crispy falafel served with hummus, tahini sauce, and fresh salad.",
    price: "$10.99",
  },
  {
    name: "Baklava",
    description:
      "Sweet pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.",
    price: "$5.99",
  },
];

export default function Menu() {
  const menuDiv = document.createElement("div");

  menuDiv.id = "menu";

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("h3");

    name.textContent = item.name;
    description.textContent = item.description;
    price.textContent = item.price;

    card.classList.add("menu-card");

    card.append(name, description, price);
    menuDiv.appendChild(card);
  });

  return menuDiv;
}
