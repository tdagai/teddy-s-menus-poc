'use client'
import styled from "styled-components";
import MenuItem, { MenuItemsProps } from "@components/menuItem";
// import HardcodedMenuItem from "./hardcodedMenuItem";

export type MenuSectionProps = {
  sectionTitle: string;
  dishesInSection: MenuItemsProps[];
}

const MenuSection = ({sectionTitle, dishesInSection}: MenuSectionProps) => {
  return (
    <div>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <HorizontalDivider />
      <ItemsGrid>
        {/* <HardcodedMenuItem /> */}
        {dishesInSection.map((dish, index) => {
          return <MenuItem {...dish} key={index} />
        })}
      </ItemsGrid>
    </div>
  )
}

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(800px, 100%), 1fr));
  gap: 1rem;
  justify-items: center;
  /* margin: 1rem; */
  padding: 1.5rem;
  /* background-color: #eae4df; */
  /* border-radius: 1.25rem; */
`;

const SectionTitle = styled.h3`
  margin-left: 1.5rem;
  margin-bottom: 0;
`;

const HorizontalDivider = styled.hr`
  border-top-width: 2px;
  opacity: 50%;
  margin: 0 1.5rem;
`;

export default MenuSection;