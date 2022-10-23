import styled from 'styled-components';
import img from '../../img/bg.jpg';
export const SearchBarPixabayLogo = styled.img`
  max-width: 200px;
`;
export const SearchBarWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  height: 322px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${img});
  content: '';
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${p => p.theme.radii.normal};
`;
export const SearchBarForm = styled.form`
  display: flex;
  justify-content: center;
`;
export const SearchBarInput = styled.input`
  height: 36px;
  width: 280px;
  border: none;

  border-top-left-radius: ${p => p.theme.space[1]}px;
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.radii.normal};
  padding-left: ${p => p.theme.space[4]}px;
`;
export const SearchBarButton = styled.button`
  height: 36px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.primaryText};
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;
