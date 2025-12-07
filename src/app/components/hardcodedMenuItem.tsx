'use client'
import Image from "next/image";
import styled from "styled-components";
import AllergenWarningIcon from "@utils/exclamation.png";
import PlaceholderImage from "@utils/placeholder.png";
import HardcodedItemIcons from "./hardcodedItemIcons";

const HardcodedMenuItem = () => {
  return (
    <MenuItemContainer>
      <ItemDetails>
        <AboveDivider>
          <h4>Dish Name</h4>
          <HardcodedItemIcons />
        </AboveDivider>
        <HorizontalDivider />
        <BelowDivider>
          <ItemDescription>Item description. This is where the restaurant will describe the dish in as much or as little detail as they’d like in order to give the customer an idea of what it is they may order.</ItemDescription>
          <IngredientList>Ingredients List: components, spices, and anything that your customers may want to be aware is in the dish to help them make an informed choice.</IngredientList>
          <AllergenWarningContainer>
            <Image
              src={AllergenWarningIcon}
              alt=""
              height={16}
              width={16}
            />
            <AllergenWarning>Allergen Warning: Peanuts, Dairy, etc.</AllergenWarning>
          </AllergenWarningContainer>
        </BelowDivider>
      </ItemDetails>
      <div>
        <Image
          className="position-relative"
          src={PlaceholderImage}
          alt=""
          width={256}
          height={256}
        />
      </div>
    </MenuItemContainer>
  )
}

const MenuItemContainer = styled.div`
  display: flex;
  height: 16rem;
  border: 2px solid #242424;
  border-radius: 1.25rem;
  background-color: #f0fdff;
  overflow: hidden;
  box-shadow: .25rem .25rem .5rem 0 #00000077;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0.5rem;
  height: 100%;
  border-right: 2px solid #242424;
`;

const AboveDivider = styled.div`
  display: flex;
  padding-bottom: .25rem;
  align-items: center;

  & h4 {
    margin: 0;
  }
`;

const HorizontalDivider = styled.hr`
  border-top-width: 2px;
  opacity: 50%;
  margin-top: 0;
`;

const BelowDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const IngredientList = styled.p`
  font-size: .75rem;
  margin: 0;
  color: #535353;
`;

const AllergenWarningContainer = styled.div`
  display: flex;
  gap: .25rem;
`;

const AllergenWarning = styled.p`
  font-size: .75rem;
  margin: 0;
`;

export default HardcodedMenuItem;