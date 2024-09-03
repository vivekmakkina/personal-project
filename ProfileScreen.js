import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = ({ route }) => {
  const { username } = route.params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://192.168.19.209/vivek/doctordetails.php`, {
          params: { username: username },
        });
        setUserData(response.data[0]); // Assuming data[0] contains the user information
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error fetching user data: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.headerText}>Profile</Animatable.Text>
      {userData ? (
        <Animatable.View animation="fadeInUp" style={styles.profileCard}>
          <Animatable.Image
            source={{ uri: userData.image }}
            style={styles.profileImage}
            resizeMode="cover"
            animation="zoomIn"
          />
          <Animatable.Text animation="bounceIn" style={styles.usernameText}>Hello, Dr. {userData.username}</Animatable.Text>
          <Text style={styles.infoText}>Gender: {userData.gender}</Text>
          <Text style={styles.infoText}>Phone Number: {userData.phoneNumber}</Text>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
        </Animatable.View>
      ) : (
        <Text style={styles.infoText}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  profileCard: {
    width: '100%',
    maxWidth: 350,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ddd',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  errorText: {
    color: 'red',
  },
});

export default ProfileScreen;
