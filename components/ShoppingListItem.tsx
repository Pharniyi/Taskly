import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native"
import {theme} from "@/theme";

type Props = {
    name: string;
}

export function ShoppingListItem({name}:Props) {

      const handleDelete = () => {
        Alert.alert(
          "Delete Item",
          `Are you sure you want to delete ${name}?`,
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            {
              text: "Yes",
              style: "destructive",
              onPress: () => console.log("Item deleted")
            }
          ]
        );
      };
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
                {name}
            </Text>
            <TouchableOpacity  style={styles.button} onPress={handleDelete} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
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