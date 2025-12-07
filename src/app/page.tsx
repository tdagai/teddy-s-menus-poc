'use client'
import MenuSection, { MenuSectionProps } from "@components/menuSection";
import PlaceholderImage from "@utils/placeholder.png";
import MozzarellaSticksImage from "@utils/Mozzarella-Sticks.jpg";
import KoreanBbqCauliflower from "@utils/Korean-Fried-Cauliflower.jpg"

const sectionsOfMenu: MenuSectionProps[] = [
  {
    sectionTitle: "Starters",
    dishesInSection: [
      {
        dishName: "Mozzarella Sticks",
        iconsToDisplay: { spiceLevel: "not spicy", vegan: false, vegetarian: false, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: MozzarellaSticksImage,
      },
      {
        dishName: "Korean BBQ Cauliflower",
        iconsToDisplay: { spiceLevel: "mild", vegan: false, vegetarian: true, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: KoreanBbqCauliflower,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "spicy", vegan: true, vegetarian: false, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "not spicy", vegan: false, vegetarian: true, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "spicy", vegan: false, vegetarian: false, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "mild", vegan: false, vegetarian: false, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
    ]
  },
  {
    sectionTitle: "Entrées",
    dishesInSection: [
      {
        dishName: "Mozzarella Sticks",
        iconsToDisplay: { spiceLevel: "not spicy", vegan: false, vegetarian: false, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: MozzarellaSticksImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "mild", vegan: false, vegetarian: true, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "spicy", vegan: true, vegetarian: false, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "not spicy", vegan: false, vegetarian: true, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "spicy", vegan: false, vegetarian: false, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "mild", vegan: false, vegetarian: false, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
    ]
  },
  {
    sectionTitle: "Desserts",
    dishesInSection: [
      {
        dishName: "Mozzarella Sticks",
        iconsToDisplay: { spiceLevel: "not spicy", vegan: false, vegetarian: false, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: MozzarellaSticksImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "mild", vegan: false, vegetarian: true, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "spicy", vegan: true, vegetarian: false, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "not spicy", vegan: false, vegetarian: true, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "spicy", vegan: false, vegetarian: false, glutenFree: false },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
      {
        dishName: "Dish Name",
        iconsToDisplay: { spiceLevel: "mild", vegan: false, vegetarian: false, glutenFree: true },
        itemDescription: "Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.",
        itemIngredients: "Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.",
        allergenWarning: "Peanuts, Dairy, etc.",
        itemImage: PlaceholderImage,
      },
    ]
  },
]

const Home = () => {
  return (
    <div>
      {sectionsOfMenu.map((section, index) => {
        return (<MenuSection {...section} key={index} />)
      })}
    </div>
  );
}

export default Home;
