type MarkInputProps = {
	children: string;
};

const markStyle = {
	backgroundColor: '#3182CE',
	color: '#FFFFFF',
};

const MarkInput = ({ children }: MarkInputProps) => {
	return <mark style={markStyle}>{children}</mark>;
};

export const highlighter = (str: string, query: string) => {
	str = str.toLowerCase();
	query = query.toLowerCase();

	const index = str.search(query);
	const split = str.split(query);

	const one = split[0];
	const two = split[1];

	let combined;
	if (index !== -1 && query.length > 0) {
		if (one.length === 0) {
			combined = (
				<>
					<MarkInput>{query}</MarkInput>
					{two}
				</>
			);
		} else if (two.length === 0) {
			combined = (
				<>
					{one}
					<MarkInput>{query}</MarkInput>
				</>
			);
		} else {
			combined = (
				<>
					{one}
					<MarkInput>{query}</MarkInput>
					{two}
				</>
			);
		}
	} else {
		combined = str;
	}
	return combined;
};
