
import { theme } from "@/theme";
import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, ScrollView, FlatList} from "react-native";
import { ShoppingListItem } from "@/components/ShoppingListItem";
import { Link } from "expo-router";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
}

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value,setValue] = useState("");
  const handleSubmit = () => {
    if(value){
      const newShoppingList =[
        {
          id: new Date().toTimeString(),name:value
        },
        ...shoppingList,
      ]
      setShoppingList(newShoppingList);
      setValue("");
    }
  }


  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  }

  const handleToggleComplete= (id:string) => {
    
  }

  return (
    <FlatList 
    data={shoppingList}
    keyExtractor={(item) => item.id}
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    stickyHeaderIndices={[0]}
    ListEmptyComponent={
       <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
      }
    ListHeaderComponent={
      <TextInput 
      placeholder="E.g. Coffee" 
      style={styles.textInput} 
      value={value} 
      onChangeText={setValue}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}/>
    }
    renderItem={({item}) => {
      return <ShoppingListItem name={item.name} onDelete={() => handleDelete(item.id)}
      onToggleComplete={() => handleToggleComplete(item.id)}/>
    }}
    />
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff",
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },

  textInput: {
    borderColor:theme.colorLightGrey,
    borderWidth:2,
    padding:12,
    marginHorizontal:12,
    marginBottom:12,
    fontSize:18,
    borderRadius:50,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer:{
    justifyContent:"center", 
    alignItems:"center",
    marginVertical:18,
  },
});