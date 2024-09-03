import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const MenuScreen = ({ navigation }) => {
  const handleOptionPress = (screen) => {
    // Logic to navigate to different screens
    navigation.navigate(screen);
  };

  const handleLogoutPress = () => {
    // Logic for logging out
  };

  return (
    <View style={styles.modalView}>
      <Pressable
        style={styles.modalOption}
        onPress={() => handleOptionPress('Calculator')}>
        <Text style={styles.modalText}>BMI Calculator</Text>
      </Pressable>
      <Pressable
        style={styles.modalOption}
        onPress={() => handleOptionPress('Calculator2')}>
        <Text style={styles.modalText}>LBM Calculator</Text>
      </Pressable>
      <Pressable
        style={styles.modalOption}
        onPress={() => handleOptionPress('Calculator')}>
        <Text style={styles.modalText}>BMI Graph</Text>
      </Pressable>
      <Pressable
        style={styles.modalOption}
        onPress={handleLogoutPress}>
        <View style={styles.iconText}>
          <Icon name="sign-out" size={20} color="#000" style={styles.icon} />
          <Text style={styles.modalText}>Logout</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.modalOption, styles.closeButton]}
        onPress={() => navigation.goBack()}>
        <Text style={styles.modalText}>Close Menu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOption: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    marginLeft: 8, // Add space between the icon and the text
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 10,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8, // Space between the icon and the text
  },
});

export default MenuScreen;
