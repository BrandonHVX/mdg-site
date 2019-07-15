import styled, { css } from 'styled-components';
import { rgba } from 'polished';

// position: static on the image wrapper resets the absolute positioning and allows for some custom styling
// the single/project templates have different headers

const BGImage = styled.div`
  width: 100%;
  .gatsby-image-wrapper {
    position: static !important;
    filter: grayscale(100%);
    > div {
      padding-bottom: ${(props) => (props.single ? '30vw' : '40vw')} !important;
      @media (max-width: ${(props) => props.theme.breakpoints.m}),
        (max-device-width: ${(props) => props.theme.breakpoints.m}) {
        padding-bottom: ${(props) => (props.single ? '40vw' : '60vw')};!important;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.s}),
        (max-device-width: ${(props) => props.theme.breakpoints.s}) {
        padding-bottom: ${(props) => (props.single ? '300px' : '400px')} !important;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.xs}),
        (max-device-width: ${(props) => props.theme.breakpoints.xs}) {
        padding-bottom: 400px !important;
      }
    }
  }
  ${(props) =>
		props.customcolor &&
		css`
			&:before {
				content: '';
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
				background: ${`linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${rgba(props.customcolor, 1)} 100%)`};
				mix-blend-mode: overlay;
				z-index: 2;
			}
		`}
  &:after {
    backface-visibility: hidden;
    background: ${({ theme }) => `linear-gradient(to bottom,  ${theme.colors.bg_color} 100%),
      linear-gradient(to right,  ${theme.colors.bg_color} 100%)`};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export default BGImage;
