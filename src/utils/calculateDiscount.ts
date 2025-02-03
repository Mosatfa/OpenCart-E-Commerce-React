export const calculateDiscount = (price: number, discountPercentage: number): { finalPrice: string; amountSaved: string } => {
    const discountAmount: number = (price * discountPercentage) / 100;
    const finalPrice: number = price - discountAmount;

    return {
        finalPrice: finalPrice.toFixed(2),
        amountSaved: discountAmount.toFixed(2)
    };
}