import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, Button ,TouchableOpacity} from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { id: 1, name: 'Hummus', price: 5.00 },
      { id: 2, name: 'Moutabal', price: 5.00 },
      { id: 3, name: 'Falafel', price: 7.50 },
      { id: 4, name: 'Marinated Olives', price: 5.00 },
      { id: 5, name: 'Kofta', price: 5.00 },
      { id: 6, name: 'Eggplant Salad', price: 8.50 },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { id: 7, name: 'Lentil Burger', price: 10.00 },
      { id: 8, name: 'Smoked Salmon', price: 14.00 },
      { id: 9, name: 'Kofta Burger', price: 11.00 },
      { id: 10, name: 'Turkish Kebab', price: 15.50 },
    ],
  },
  {
    title: 'Sides',
    data: [
      { id: 11, name: 'Fries', price: 3.00 },
      { id: 12, name: 'Buttered Rice', price: 3.00 },
      { id: 13, name: 'Bread Sticks', price: 3.00 },
      { id: 14, name: 'Pita Pocket', price: 3.00 },
      { id: 15, name: 'Lentil Soup', price: 3.75 },
      { id: 16, name: 'Greek Salad', price: 6.00 },
      { id: 17, name: 'Rice Pilaf', price: 4.00 },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { id: 18, name: 'Baklava', price: 3.00 },
      { id: 19, name: 'Tartufo', price: 3.00 },
      { id: 20, name: 'Tiramisu', price: 5.00 },
      { id: 21, name: 'Panna Cotta', price: 5.00 },
    ],
  },
];

const Item = ({ id, name, price, onPress, isSelected }) => (
  <Pressable onPress={() => onPress(id, name, price)}>
    <View style={[menuStyles.innerContainer, isSelected && menuStyles.selectedItem]}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>${price.toFixed(2)}</Text>
    </View>
  </Pressable>
);

const Largedata = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const handleItemPress = (id, name, price) => {
    const isSelected = selectedItems.some(item => item.id === id);
    if (isSelected) {
      const updatedItems = selectedItems.filter(item => item.id !== id);
      setSelectedItems(updatedItems);
      setSubTotal(subTotal - price);
    } else {
      const newItem = { id, name, price };
      setSelectedItems([...selectedItems, newItem]);
      setSubTotal(subTotal + price);
    }
  };

  const handleClearItems = () => {
    setSelectedItems([]);
    setSubTotal(0);
  };
  
  const handleOrderSubmit = () => {
    // Logic to submit order goes here
    console.log("Order submitted:", selectedItems);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
    return (
      <Item
        id={item.id}
        name={item.name}
        price={item.price}
        onPress={handleItemPress}
        isSelected={isSelected}
      />
    );
  };

  const renderSectionHeader = ({ section }) => (
    <View style={menuStyles.headerContainer}>
      <Text style={menuStyles.sectionHeader}>{section.title}</Text>
      {/* Add bottom border after the title */}
      <View style={menuStyles.bottomBorder} />
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <View style={menuStyles.footerContainer}>
        <Text style={menuStyles.footerText}>Subtotal: ${subTotal.toFixed(2)}</Text>
        <TouchableOpacity onPress={handleClearItems} style={[menuStyles.btn, { backgroundColor: '#ffd700' }]}>
          <Text style={menuStyles.btnText}>Clear Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOrderSubmit} style={[menuStyles.btn, { backgroundColor: '#ffd700' }]}>
          <Text style={menuStyles.btnText}>Submit Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: 'blue', // Add your selected item background color here
  },
  headerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 150,
    paddingTop: 15,
    paddingBottom: 5,
    color:'#ffd700',
    backgroundColor:"red"
  },
  sectionHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Center align the section header
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 10, // Add space after the bottom border
  },
  footerContainer: {
    backgroundColor: 'black',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',

  },
  btn: {
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Largedata;