import React,{useState} from "react";
import Card from "./Card";
const breakfastMenu = [
  {
    id: 1,
    category: "breakfast",
    dataTestId: "menu-item-breakfast",
    name: "Classic Avocado Toast",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    description: "Smashed organic avocado on toasted sourdough, topped with chili flakes, radish, and a poached egg."
  },
  {
    id: 2,
    category: "breakfast",
    dataTestId: "menu-item-breakfast",
    name: "Fluffy Buttermilk Pancakes",
    price: 10.95,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=800&q=80",
    description: "A stack of three golden pancakes served with whipped butter and pure Vermont maple syrup."
  },
  {
    id: 3,
    category: "breakfast",
    dataTestId: "menu-item-breakfast",
    name: "Acai Berry Bowl",
    price: 14.00,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    description: "Chilled acai base topped with fresh strawberries, blueberries, gluten-free granola, and a drizzle of honey."
  },
  {
    id: 4,
    category: "breakfast",
    dataTestId: "menu-item-breakfast",
    name: "Classic Eggs Benedict",
    price: 15.50,
    image: "https://images.unsplash.com/photo-1600335814565-0dd0d48a39a6?auto=format&fit=crop&w=800&q=80",
    description: "Two poached eggs and Canadian bacon on toasted English muffins, smothered in silky hollandaise sauce."
  },
  {
    id: 5,
    category: "breakfast",
    dataTestId: "menu-item-breakfast",
    name: "Smoked Salmon Bagel",
    price: 13.75,
    image: "https://images.unsplash.com/photo-1510629954389-c1e0da47d415?auto=format&fit=crop&w=800&q=80",
    description: "Toasted everything bagel with cream cheese, premium smoked salmon, capers, and red onion."
  }
];
const lunchMenu = [
  {
    id: 6,
    category: "lunch",
    dataTestId: "menu-item-lunch",
    name: "Classic Wagyu Burger",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Premium Wagyu beef patty with sharp cheddar, caramelized onions, and secret sauce on a brioche bun."
  },
  {
    id: 7,
    category: "lunch",
    dataTestId: "menu-item-lunch",
    name: "Mediterranean Quinoa Salad",
    price: 14.25,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "A refreshing mix of quinoa, cucumbers, cherry tomatoes, kalamata olives, and feta with lemon vinaigrette."
  },
  {
    id: 8,
    category: "lunch",
    dataTestId: "menu-item-lunch",
    name: "Crispy Chicken Tacos",
    price: 15.95,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    description: "Three flour tortillas filled with crispy chicken, avocado crema, pickled onions, and fresh cilantro."
  },
  {
    id: 9,
    category: "lunch",
    dataTestId: "menu-item-lunch",
    name: "Grilled Salmon Bowl",
    price: 19.00,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    description: "Miso-glazed salmon served over brown rice with steamed bok choy and pickled ginger."
  },
  {
    id: 10,
    category: "lunch",
    dataTestId: "menu-item-lunch",
    name: "Caprese Panini",
    price: 13.50,
    image: "https://images.unsplash.com/photo-1525351447719-751bd874c7bf?auto=format&fit=crop&w=800&q=80",
    description: "Fresh mozzarella, vine-ripened tomatoes, and basil pesto pressed on artisan ciabatta bread."
  }
];
const shakesMenu = [
  {
    id: 11,
    category: "shakes",
    dataTestId: "menu-item-shakes",
    name: "Double Chocolate Dream",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    description: "Rich dark chocolate ice cream blended with cocoa nibs and topped with whipped cream."
  },
  {
    id: 12,
    category: "shakes",
    dataTestId: "menu-item-shakes",
    name: "Classic Strawberry Swirl",
    price: 7.95,
    image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=800&q=80",
    description: "Fresh orchard strawberries blended with vanilla bean ice cream and a drizzle of berry coulis."
  },
  {
    id: 13,
    category: "shakes",
    dataTestId: "menu-item-shakes",
    name: "Cookies & Cream",
    price: 8.25,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    description: "Hand-spun vanilla milkshake loaded with crushed Oreo cookies and chocolate drizzle."
  },
  {
    id: 14,
    category: "shakes",
    dataTestId: "menu-item-shakes",
    name: "Salted Caramel Pecan",
    price: 9.00,
    image: "https://images.unsplash.com/photo-1541658016709-8273f8d7bc45?auto=format&fit=crop&w=800&q=80",
    description: "Sweet and salty caramel blended with roasted pecans for a perfect crunch."
  },
  {
    id: 15,
    category: "shakes",
    dataTestId: "menu-item-shakes",
    name: "Tropical Mango Blast",
    price: 8.75,
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=800&q=80",
    description: "A dairy-free blend of fresh mango, coconut milk, and a hint of lime."
  }
];


function Menu(){
    const [menu,setMenu]=useState(shakesMenu)
    const showBreakfast=()=>{
       setMenu(breakfastMenu)
    }
    const showlunch=()=>{
       setMenu(lunchMenu)
    }
    const showShakes=()=>{
        setMenu(shakesMenu)
    }
    return(
        <div id="main">
            <h1>Our Menu</h1>
            <button  id="filter-btn-1" onClick={(e)=>{showBreakfast()}}>Breakfast</button>
            <button id="filter-btn-2" onClick={(e)=>{showlunch()}}>Lunch</button>
            <button id="filter-btn-3" onClick={(e)=>{showShakes()}}>Shakes</button>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                menu.map((item,index)=><Card key={index} {...item}/>)
            }
            </div>
        </div>
    )
}


export default Menu;