function loadStorage<T>(item: string): T | null {
    const localStorageItem = localStorage.getItem(item);
    if (!localStorageItem) return null;
    return JSON.parse(localStorageItem);
}

export default loadStorage;
