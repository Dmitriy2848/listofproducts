import { FC } from 'react';

import styled, { keyframes } from 'styled-components';

import { ReactComponent as Spinner } from 'shared/assets/icons/spinner.svg';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	} 
	to {
    transform: rotate(360deg);
	}
`;

const StyledWrapper = styled.div`
	display: inline-block;
	min-width: 34px;

	svg {
		animation: ${rotate} 2s linear infinite;
	}
`;

const Loader: FC = () => {
	return (
		<StyledWrapper>
			<Spinner />
		</StyledWrapper>
	);
};

export default Loader;
