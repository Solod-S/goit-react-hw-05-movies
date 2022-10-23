import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
`;
export const Item = styled.li`
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  position: relative;
`;
export const Data = styled.div`
  position: absolute;
  bottom: 0;
  padding-left: 2%;
  background-color: ${p => p.theme.colors.backGroundColor};
  width: 100%;
`;
export const Name = styled.h2`
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 10px;
`;
export const Character = styled.h3`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 10px;
`;
export const NoCast = styled.h2`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 10px;
`;
