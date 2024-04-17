import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Pressable } from 'react-native';

const Logo = () => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    // Function to add item to the cart
    const addToCart = (item) => {
        setCart([...cart, item]);
        setSubtotal(subtotal + parseInt(item.price.replace('$', '')));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
        setSubtotal(0);
    };

    // Function to submit the order
    const submitOrder = () => {
        // Implement your order submission logic here
        console.log("Order Submitted:", cart);
        // Clear the cart after submitting the order
        clearCart();
    };

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.logo}
                source={require('../Images/LittleLemonLogo.png')}
                resizeMode='contain'
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
            <Text style={styles.text}>
                Little Lemon, your local Mediterranean Bistro
            </Text>

            {/* Display images in a vertical grid */}
            <View style={styles.gridContainer}>
                {images.map((image, index) => (
                    <Pressable key={index} onPress={() => addToCart(image)} style={styles.imageContainer}>
                        <Image style={styles.image} source={image.source} resizeMode='cover' />
                        <Text style={styles.name}>{image.name}</Text>
                        <Text style={styles.price}>${image.price}</Text>
                        <Text style={styles.addToCart}>Add to Cart</Text>
                    </Pressable>
                ))}
            </View>

            {/* Display cart items and subtotal */}
            <View style={styles.cartContainer}>
                <Text style={styles.cartText}>Cart:</Text>
                {cart.map((item, index) => (
                    <View key={index} style={styles.cartItem}>
                        <Text style={styles.cartItemName}>{item.name}</Text>
                        <Text style={styles.cartItemPrice} >{item.price}</Text>
                    </View>
                ))}
                <Text style={styles.subtotalText}>Subtotal: ${subtotal}</Text>
                <Pressable onPress={clearCart} style={styles.clearButton}>
                    <Text style={styles.clearButtonText}>Clear Cart</Text>
                </Pressable>
            </View>

            {/* Button to submit order */}
            <Pressable onPress={submitOrder} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit Order</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,

        marginLeft: 'auto',
        backgroundColor: '#000000'
    },
    text: {
        marginTop: 14,
        paddingVertical: 10,
        color: '#ffff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        height: 100,
        width: 300,
        alignSelf: 'center',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    imageContainer: {
        marginBottom: 20,
        alignItems: 'center',
        width: '48%',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 3,
    },
    name: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'

    },
    price: {
        fontSize: 16,
        marginTop: 5,
        color: '#fff'
    },
    addToCart: {
        marginTop: 10,
        fontSize: 16,
        color: '#ffd700',
    },
    cartContainer: {
        marginTop: 20,

    },
    cartText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffd700',
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,



    },
    subtotalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 13,
        color: '#ffd700',
    },
    clearButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        position: 'relative',
        width: "30%",
        color: '#ffd700',
        marginBottom: 15,
        left: 230,
        bottom: 40

    },
    clearButtonText: {
        color: '#ffff',
        fontSize: 16,
        alignSelf: 'center',

    },
    submitButton: {
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center',
        bottom: 23,

        width: '80%',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,

    },
    cartItemName: {
        color: "#ffd700",
        paddingHorizontal: 12
    },
    cartItemPrice: {
        color: "#ffd700",
        paddingHorizontal: 12
    }
});

// Sample images data
const images = [
    { source: require('../Images/pik1.png'), name: 'Pizza', price: '15' },
    { source: require('../Images/pik2.png'), name: 'Burger', price: '12' },
    { source: require('../Images/pik3.jpeg'), name: 'Pasta', price: '15' },
    { source: require('../Images/pik4.jpeg'), name: 'Salad', price: '20' },
    { source: require('../Images/pik5.jpeg'), name: 'Sushi', price: '18' },
    { source: require('../Images/pik1.png'), name: 'Baryani', price: '15' },
];

export default Logo;