export const setComa = (number) => {
	const strNumber = number.toString(); // Convert the number to a string
	const parts = strNumber.split("."); // Split the number into integer and decimal parts
	const integerPart = parts[0];
	const decimalPart = parts.length > 1 ? "." + parts[1] : "";

	let formattedInteger = "";
	let count = 0;

	// Iterate through each character of the integer part in reverse order
	for (let i = integerPart.length - 1; i >= 0; i--) {
		formattedInteger = integerPart[i] + formattedInteger;
		count++;

		// Add a comma after every 3 characters (except for the last one)
		if (count % 3 === 0 && i !== 0) {
			formattedInteger = "," + formattedInteger;
		}
	}

	return formattedInteger + decimalPart;
};
