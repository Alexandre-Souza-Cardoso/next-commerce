export const formatPrice = (price: number) => {
    if (!price) return 'r$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price / 100);
}