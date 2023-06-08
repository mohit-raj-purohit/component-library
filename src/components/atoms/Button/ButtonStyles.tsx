import styled from '@emotion/styled';
import { css } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

export interface StyledButtonProps {
	color?: string;
    hoverColor?: string;
}

const styles = css`
	background-color: #4285f4;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	&:hover {
		background-color: #357ae8;
	}
`;

export const StyledButton = styled('button', {
	shouldForwardProp: (prop) =>
		isPropValid(prop) && prop !== 'color' && prop !== 'hoverColor',
})<StyledButtonProps>(
	(props) => css`
		${styles};
		color: ${props.color || props.theme.colors.white};
		&:hover {
			color: ${props.hoverColor};
		}
	`
);
