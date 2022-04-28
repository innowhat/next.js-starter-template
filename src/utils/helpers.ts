
// Return a random item from an array
export const random_item = (arr: unknown[]) => arr[Math.floor(Math.random() * arr.length)];

// Join an array of strings with a separator
export const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')
