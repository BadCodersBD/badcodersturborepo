import styled from "styled-components";

const Main = styled.div`
	width: 100%;
	height: auto;
	color: #ffffff;
	background: radial-gradient(
		86.74% 37.06% at 50% 52.26%,
		#555555 0%,
		#000000 100%
	);
	padding: 2rem 2rem 2rem 2rem;
	border-radius: 2rem 2rem 0rem 0rem;
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	text-align: right;
	text-transform: uppercase;
`;

export const Styled = {
	Main,
	Title,
};
