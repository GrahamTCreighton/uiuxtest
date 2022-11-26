export default function localStorage(key = "", defaultData = "") {
  const getLocalStorageData = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultData;
    } catch (e) {
      console.error(`Failed to read ${key} from localStorage`);
      return defaultData;
    }
  };

  const setLocalStorageData = (newData) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newData));
    } catch (e) {
      console.error(`Failed to save ${newData} in localStorage`);
    }
  };
  return { getLocalStorageData, setLocalStorageData };
}
