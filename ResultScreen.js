import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ResultScreen = ({ route }) => {
  const navigation = useNavigation(); // Initialize navigation hook
  const { bmi, bmiLevel } = route.params;

  // Calculate the difference from a fixed BMI value, e.g., 22.5 (midpoint of normal range)
  const calculateBMIDifference = () => {
    const referenceBMI = 22.5;
    return bmi >= referenceBMI 
      ? (bmi - referenceBMI).toFixed(2) 
      : (referenceBMI - bmi).toFixed(2);
  };

  const bmiDifference = calculateBMIDifference();

  // Determine the gradient colors based on BMI value
  const getGradientColors = () => {
    if (bmi < 18.5) {
      return ['#0000FF', '#87CEFA']; // Blue shades for Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return ['#00FF00', '#ADFF2F']; // Green shades for Normal
    } else if (bmi >= 25 && bmi < 30) {
      return ['#FFA500', '#FFD700']; // Orange shades for Overweight
    } else {
      return ['#FF0000', '#FF6347']; // Red shades for Obesity
    }
  };

  const handleContinue = () => {
    // Navigate to DrugSelectionScreen.js
    navigation.navigate('DrugSelectionScreen');
  };

  const handleGraphPress = () => {
    // Navigate to GraphComponent and pass the bmi and difference values
    navigation.navigate('GraphComponent', {
      bmi: bmi,
      difference: bmiDifference
    });
  };

  // Calculate the height of the filled part of the vertical meter
  const calculateFilledHeight = () => {
    const minBMI = 10;
    const maxBMI = 40;
    const meterHeight = 140; // Height of the vertical meter
    return ((bmi - minBMI) / (maxBMI - minBMI)) * meterHeight;
  };

  const filledHeight = calculateFilledHeight();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.graphButton} onPress={handleGraphPress}>
          <Icon name="bar-chart" size={20} color="#000000" style={styles.graphIcon} />
          <Text style={styles.graphButtonText}>Graph</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={getGradientColors()}
        style={styles.innerContainer}
      >
        <Text style={styles.resultText}>{bmi}</Text>
        <Text style={styles.categoryText}>{bmiLevel}</Text>
      </LinearGradient>

      <View style={styles.squareContainer}>
        <View style={styles.square}>
          <View style={styles.meterContainer}>
            <View style={[styles.filledMeter, { height: filledHeight }]} />
          </View>
          <View style={styles.meterLabelsContainer}>
            <Text style={styles.meterLabel}>40</Text>
            <Text style={styles.meterLabel}>30</Text>
            <Text style={styles.meterLabel}>20</Text>
            <Text style={styles.meterLabel}>10</Text>
          </View>
        </View>
        <View style={styles.square1}>
          <Text style={styles.headingText}>Category:</Text>
          <LinearGradient
            colors={['#E0E0E0', '#FFFFFF']}
            style={styles.valueContainer1}
          >
            <Text style={styles.valueText}>{bmiLevel}</Text>
          </LinearGradient>
          <Text style={styles.headingText1}>Difference:</Text>
          <LinearGradient
            colors={['#E0E0E0', '#FFFFFF']}
            style={styles.valueContainer}
          >
            <Text style={styles.valueText1}>{bmiDifference}</Text>
          </LinearGradient>
        </View>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: -40, 
    marginTop: 0, // Adjust as needed to position the button above the innerContainer
  },
  graphButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // For Android shadow
  },
  graphIcon: {
    marginRight: 10,
  },
  graphButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  innerContainer: {
    padding: 110,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    marginTop: 50,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    marginBottom: 10,
    elevation: 5, // For Android shadow
  },
  resultText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  square: {
    width: '48%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    flexDirection: 'row', // Align items horizontally
  },
  meterContainer: {
    width: 20,
    height: 140,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end', // Align the filled meter at the bottom
    marginRight: 10,
  },
  filledMeter: {
    width: '100%',
    backgroundColor: '#87CEFA', // Default color, change based on BMI range
  },
  meterLabelsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 140,
    marginBottom: 10,
  },
  meterLabel: {
    fontSize: 12,
    color: '#000000',
  },
  square1: {
    width: '48%',
    height: 200,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    paddingLeft: 15, // Add some padding to the left
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  headingText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 15,
  },
  valueText: {
    fontSize: 16,
    color: '#000000',
  },
  valueContainer: {
    alignSelf: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  valueContainer1: {
    alignSelf: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  valueText1: {
    fontSize: 16,
    color: '#000000',
  },
  continueButton: {
    marginTop: 30,
    backgroundColor: '#213066',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ResultScreen;
