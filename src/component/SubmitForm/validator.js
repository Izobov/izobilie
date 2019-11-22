export const required = value => {
    if (value) return undefined;
    return 'Это поле обязательное'
}