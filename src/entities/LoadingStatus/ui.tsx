import { FC } from 'react';

import styled from 'styled-components';

import Loader from 'shared/ui/Loader';
import Typography from 'shared/ui/Typography';

interface IStatusProps {
	status: 'empty' | 'loading' | 'error';
}

const StatusWrapper = styled.div<IStatusProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span:nth-child(2) {
		margin-top: 10px;
	}
`;

const EmptyWrapper = styled.div`
	max-width: 260px;
	text-align: center;
`;

const LoadingStatus: FC<IStatusProps> = ({ status }) => {
	return (
		<StatusWrapper status={status}>
			{status === 'loading' && <Loader />}
			{status === 'error' && <Typography>Ошибка при загрузке</Typography>}
			{status === 'empty' && (
				<EmptyWrapper>
					<Typography
						size='large'
						primary
					>
						ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО
					</Typography>
					<Typography>
						Простите, по вашему запросу товаров сейчас нет. Задайте запрос
						по-другому или измените характеристики
					</Typography>
				</EmptyWrapper>
			)}
		</StatusWrapper>
	);
};

export default LoadingStatus;
