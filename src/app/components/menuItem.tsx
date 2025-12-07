'use client'
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import AllergenWarningIcon from "@utils/exclamation.png";
import ItemIcons from "./itemIcons";
import { ItemIconsProps } from "./itemIcons";

export type MenuItemsProps = {
  dishName: string;
  iconsToDisplay: ItemIconsProps;
  itemDescription: string;
  itemIngredients: string;
  allergenWarning: string;
  itemImage: StaticImageData;
}

const MenuItem = ({dishName, iconsToDisplay, itemDescription, itemIngredients, allergenWarning, itemImage}: MenuItemsProps) => {
  return (
    <MenuItemContainer>
      <ItemDetails>
        <AboveDivider>
          <h4>{dishName}</h4>
          <ItemIcons {...iconsToDisplay} />
        </AboveDivider>
        <HorizontalDivider />
        <BelowDivider>
          <ItemDescription>{itemDescription}</ItemDescription>
          <IngredientList>{itemIngredients}</IngredientList>
          <AllergenWarningContainer>
            <Image
              src={AllergenWarningIcon}
              alt=""
              height={16}
              width={16}
            />
            <AllergenWarning>Allergen Warning: {allergenWarning}</AllergenWarning>
          </AllergenWarningContainer>
        </BelowDivider>
      </ItemDetails>
      <div>
        <Image
          className="position-relative"
          src={itemImage}
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
  border-radius: .75rem;
  corner-shape: bevel;
  background-color: #eae4df;
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

const IngredientList = styled.small`
  font-size: .75rem;
  margin: 0;
  color: #3d3d3d;
`;

const AllergenWarningContainer = styled.div`
  display: flex;
  gap: .25rem;
`;

const AllergenWarning = styled.small`
  font-size: .75rem;
  margin: 0;
`;

export default MenuItem;