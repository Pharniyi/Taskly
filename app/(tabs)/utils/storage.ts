import AsyncStorage from "@react-native-async-storage/async-storage"; //This gives access to phone storage, allowing us to save and retrieve data even after the app is closed.
export async function getFromStorage(key: string){ //This is to go and get data saved with this key
  try {
    const data =await AsyncStorage.getItem(key); //try to get data
    return data != null ? JSON.parse(data) : null; //it comes back as a string not an array, so convert back to real data
  } //If data exists → convert it to real object if not return null

 catch {
    return null; //if anything goes wrong just return null do not crash the app
  }
}

export async function saveToStorage(key: string, data:object){ //save data using this key 
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));//convert the data to string
  } catch {}
}