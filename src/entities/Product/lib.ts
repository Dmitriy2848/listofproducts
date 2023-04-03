const parserFromISODate = (ISOString: string): string => {
	const str = ISOString.split(' ').join('');

	const date = new Date(str);

	let day: string | number = date.getDay();
	let month: string | number = date.getMonth();
	const year = date.getFullYear().toString().slice(2);

	const hours = date.getHours();
	const minutes = date.getMinutes();

	if (day < 10) {
		day = '0' + day;
	}
	if (month < 10) {
		month = '0' + month;
	}

	return `${day}.${month}.${year}, ${hours}:${minutes}`;
};

export { parserFromISODate };
