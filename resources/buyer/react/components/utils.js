
const formatDivider = (amount, prefix = "CRC ", spanClass = "ml-1 text-gray-500", divider = 3) => {
    // if amount is null or amount is undefined or amount is 0 then return
    if (!amount) return;
    // remove spaces and -, , . from amount
    const amountStr = amount.toString().replace(/\s/g, "").replace(/-/g, "").replace(/,/g, "").replace(/\./g, "");
    if (amountStr.length <= divider) {
        return `${prefix}${amountStr}`;
    }
    //substring of the last divider digits
    const last = amountStr.substring(amountStr.length - divider);
    // the rest of the string
    const rest = amountStr.substring(0, amountStr.length - divider);
    return (<>{prefix}{rest}<span className={spanClass}>{last}</span></>)
}

// export fun
export { formatDivider };
