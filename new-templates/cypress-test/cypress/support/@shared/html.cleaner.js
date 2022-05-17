export const pathPageClean = (route) => {
    const componentName = route.replace('.html', '');
    return `${componentName}`;
};

export const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()