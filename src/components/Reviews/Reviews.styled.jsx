import styled from 'styled-components';

export const Item = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const Description = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
export const NoReviews = styled.h2`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: 10px;
`;
