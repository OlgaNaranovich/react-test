const createDate = () => {
	const currentDate = new Date();
	const options: any = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
	return currentDate.toLocaleDateString('en-US', options);
};

export default createDate;
