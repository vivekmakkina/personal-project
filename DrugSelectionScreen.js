import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DrugSelectionScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleDrugSelection = (drugName) => {
    switch (drugName) {
      case 'Atracurium':
        navigateToScreen('AtracuriumScreen');
        break;
      case 'Vecuronium':
        navigateToScreen('VecuroniumScreen');
        break;
      case 'Pancuronium':
        navigateToScreen('PancuroniumScreen');
        break;
      default:
        break;
    }
  };

  // Animated values for button press animation and text animation
  const scaleValue = React.useRef(new Animated.Value(1)).current;
  const textOpacity = React.useRef(new Animated.Value(0)).current;
  const textScale = React.useRef(new Animated.Value(0.8)).current;

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.dribbble.com/users/1818897/screenshots/15806423/media/ec318c7d6bae828d740075765535cd96.jpg' }}
        style={styles.image}
      />
      <Animated.Text style={[styles.heading, { opacity: textOpacity, transform: [{ scale: textScale }] }]}>
        Choose any one drug
      </Animated.Text>
      <TouchableOpacity
        style={[styles.drugContainer, { transform: [{ scale: scaleValue }] }]}
        onPress={() => {
          animateButton();
          handleDrugSelection('Atracurium');
        }}
      >
        <Text style={styles.drugText}>Atracurium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.drugContainer, { transform: [{ scale: scaleValue }] }]}
        onPress={() => {
          animateButton();
          handleDrugSelection('Vecuronium');
        }}
      >
        <Text style={styles.drugText}>Vecuronium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.drugContainer, { transform: [{ scale: scaleValue }] }]}
        onPress={() => {
          animateButton();
          handleDrugSelection('Pancuronium');
        }}
      >
        <Text style={styles.drugText}>Pancuronium</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#213066',
    marginBottom: 40,
  },
  drugContainer: {
    backgroundColor: '#E1E1E1',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  drugText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DrugSelectionScreen;
