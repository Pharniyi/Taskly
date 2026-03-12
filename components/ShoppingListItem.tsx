import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native"
import {theme} from "@/theme";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    name: string;
    isCompleted?: boolean;
}

export function ShoppingListItem({name, isCompleted}:Props) {

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
        <View style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]}>
            <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>
                {name}
            </Text>
            <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
                <AntDesign name="close-circle" size={24} color= { isCompleted ? theme.colorGrey : theme.colorRed } />
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
    borderBottomColor:theme.colorCerulean, 
    paddingHorizontal:18, 
    paddingVertical:16,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },

  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },

  completedButton: {
    backgroundColor: theme.colorGrey,
  },

  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
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