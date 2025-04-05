//modulerlik sağlandı bu şekilde 

export const getItemFromStorage = (key, defaultValue = []) => {
    try {
        const storedItems = localStorage.getItem(key);
        return storedItems ? JSON.parse(storedItems) : defaultValue;
      } catch (error) {
        console.error("Error retrieving favorite movies from localStorage:", error);
        return defaultValue; 
    }
}

export const setItemToStorage = (key, items) => {
    try {
        localStorage.setItem('favorite', JSON.stringify(items));
    } catch (error) {
        console.error("Error writing favorite movies to localStorage:", error);
    }
}