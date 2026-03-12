
import { theme } from "@/theme";
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { ShoppingListItem } from "@/components/ShoppingListItem";
import { Link } from "expo-router";
export default function App() {

  return (
    <View style={styles.container}> 
      <Link href="/idea" style={{marginBottom:16, alignItems:"center", justifyContent:"center", padding:12, borderRadius:6}}>
        <Text style={{color:theme.colorBlack, fontSize:18}}>Go to Idea Screen</Text>
      </Link>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted/>
      <ShoppingListItem name="Sugar" isCompleted/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  itemContainer: {
    borderBottomWidth: 1, 
    borderBottomColor:"#1a759f", 
    paddingHorizontal:8, 
    paddingVertical:16,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },

  itemText: {
    fontSize:18, 
    fontWeight:200
  },

  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },

  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});