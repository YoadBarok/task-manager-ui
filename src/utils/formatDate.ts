export function formatDate(date: string): string {
    const converted =  new Date(date).toLocaleString('en-GB');
    return converted;
}