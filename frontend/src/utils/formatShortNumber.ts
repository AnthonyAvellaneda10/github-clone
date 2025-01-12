export function formatShortNumber(number: number): string {
    if (isNaN(number) || number === null) return "0";
    const abs = Math.abs(number);
    const rounder = Math.pow(10, 1);
    const isNegative = number < 0;

    const powers = [
        { key: "Q", value: Math.pow(10, 15) },
        { key: "T", value: Math.pow(10, 12) },
        { key: "B", value: Math.pow(10, 9) },
        { key: "M", value: Math.pow(10, 6) },
        { key: "K", value: 1000 },
    ];

    for (let i = 0; i < powers.length; i++) {
        let reduced = abs / powers[i].value;
        reduced = Math.round(reduced * rounder) / rounder;
        if (reduced >= 1) {
            return (isNegative ? "-" : "") + reduced + powers[i].key;
        }
    }
    return (isNegative ? "-" : "") + abs.toString();
}
