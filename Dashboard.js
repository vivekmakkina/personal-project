import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons icons from Expo

const { width } = Dimensions.get('window');

const Dashboard = ({ navigation, route }) => {
  const { username } = route.params;
  const [activeDot, setActiveDot] = useState(0);
  const scrollViewRef = useRef(null);
  const imageCount = 3;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeDot + 1) % imageCount;
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
      setActiveDot(nextIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [activeDot]);

  const handleBMIPress = () => {
    navigation.navigate('Calculator');
  };

  const handleLMBPress = () => {
    navigation.navigate('Calculator2'); // Navigate to Calculator2 screen
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveDot(index);
  };

  const handleModalOptionPress = (screen) => {
    setModalVisible(!modalVisible);
    navigation.navigate(screen);
  };

  const handleLogoutPress = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.menuIcon}>
          <Ionicons name="menu" size={27} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hello Dr. {username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', { username })} style={styles.profileIcon}>
          <Ionicons name="person-circle-outline" size={27} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          ref={scrollViewRef}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Image 1
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Image 2
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Image 3
              style={styles.image}
            />
          </View>
        </ScrollView>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, activeDot === 0 && styles.activeDot]} />
          <View style={[styles.dot, activeDot === 1 && styles.activeDot]} />
          <View style={[styles.dot, activeDot === 2 && styles.activeDot]} />
        </View>
        <View style={styles.outerBox}>
          <View style={[styles.con1, { backgroundColor: 'white' }]}>
            <TouchableOpacity style={styles.button} onPress={handleBMIPress}>
              <View>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvdhDHiRUHL5rDazIbcESKA6_qNI2xjaNlQ&usqp=CAU' }}
                  style={styles.circle}
                />
              </View>
              <Text style={styles.buttonText}>BODY MASS INDEX</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.con2, { backgroundColor: 'white' }]}>
            <TouchableOpacity style={styles.button} onPress={handleLMBPress}>
              <View>
                <Image
                  source={{ uri: 'https://pbs.twimg.com/profile_images/378800000400487633/57af26a308edcd7707b60dc24837c302_400x400.jpeg' }}
                  style={styles.circle}
                />
              </View>
              <Text style={styles.buttonText}>LEAN BODY MASS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.modalOption}
              onPress={() => handleModalOptionPress('Calculator')}
            >
              <Text style={styles.modalText}>BMI Calculator</Text>
            </Pressable>
            <Pressable
              style={styles.modalOption}
              onPress={() => handleModalOptionPress('Calculator2')}
            >
              <Text style={styles.modalText}>LBM Calculator</Text>
            </Pressable>
            <Pressable
              style={styles.modalOption}
              onPress={() => handleModalOptionPress('Calculator')}
            >
              <Text style={styles.modalText}>BMI Graph</Text>
            </Pressable>
            <Pressable
              style={styles.modalOption}
              onPress={handleLogoutPress}
            >
              <Ionicons name="log-out-outline" size={20} color="black" style={styles.logoutIcon} />
              <Text style={styles.modalText}>Logout</Text>
            </Pressable>
            <Pressable
              style={[styles.modalOption, styles.closeButton]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}>Close Menu</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: 'rgba(33, 48, 102, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  menuIcon: {
    marginLeft: 14,
    marginTop: 30, // Adjust this value to move the icon down
  },
  profileIcon: {
    marginRight: 14,
    marginTop: 30, // Adjust this value to move the icon down
  },
  headerText: {
    marginTop: 30, // Adjust this value to move the text down
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  scrollView: {
    width: '100%',
    height: width, // Set height equal to width to make it square
    marginBottom: 20,
  },
  imageContainer: {
    width: width,
    height: 250, // Increased height
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
    marginTop: 10,
  },
  image: {
    width: '95%',
    height: '95%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  outerBox: {
    width: '90%', // Reduced width
    backgroundColor: '#213066',
    paddingHorizontal: 10, // Reduced horizontal padding
    paddingVertical: 40, // Adjusted vertical padding
    borderRadius: 20,
    marginBottom: 40,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
  },
  con1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adjust spacing between rows
    paddingVertical: 20, // Adjust padding for rows
    paddingHorizontal: 5, // Adjust padding for rows
    borderRadius: 10,
    width: '95%',
    justifyContent: 'center',
  },
  con2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adjust spacing between rows
    paddingVertical: 20, // Adjust padding for rows
    paddingHorizontal: 5, // Adjust padding for rows
    borderRadius: 10,
    width: '95%',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row', // Change to row to align image and text horizontally
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10, // Adjust padding for button content
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#213066',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    textAlign: 'center', // Center text
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '80%',
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: 'black',
  },
  closeButton: {
    backgroundColor: '#f00',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  logoutIcon: {
    marginRight: 10,
  },
});

export default Dashboard;
