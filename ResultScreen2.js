import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const ResultScreen2 = ({ route }) => {
  const { lbm } = route.params;
  const navigation = useNavigation(); // Get navigation object

  const handleContinuePress = () => {
    // Navigate to DrugSelectionScreen
    navigation.navigate('DrugSelectionScreen');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.outerBox}>
        <View style={styles.container}>
          <Text style={styles.resultText}>LBM       : <Text style={styles.lbmValue}>     {lbm}</Text></Text>
          <Text style={[styles.infoText, styles.infoTextMargin]}>LBM ratio varies with age, activity, and diet</Text>
        </View>
      </View>
      <Text style={styles.bottomText}>According to the IDEAL LBM ratio for adults:</Text>
      <View style={styles.outerBox2}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
          <Text style={styles.scrollContent}>
            Lean Body Mass (LBM) represents 
            the weight of your body minus all 
            fat. It includes muscles, bones,
            ligaments, tendons, and organs.
            LBM is essential for various functions 
            such as metabolism, strength, and overall
            health. Maintaining an optimal LBM ratio 
            is crucial for achieving fitness goals 
            and living a healthy lifestyle.
          </Text>
          <Text style={styles.scrollSubHeading}>Why is LBM important?</Text>
          <Text style={styles.scrollContent}>
            - Metabolism: LBM influences your metabolic rate, helping you burn more calories even at rest.
          </Text>
          <Text style={styles.scrollContent}>
            - Strength: Muscles, a significant component of LBM, contribute to physical strength and endurance.
          </Text>
          <Text style={styles.scrollContent}>
            - Health: LBM plays a role in overall health, including bone density and organ function.
          </Text>
          <Text style={styles.scrollSubHeading}>Maintaining Optimal LBM:</Text>
          <Text style={styles.scrollContent}>
            - Balanced Diet: Consuming adequate protein and nutrients supports muscle maintenance.
          </Text>
          <Text style={styles.scrollContent}>
            - Physical Activity: Regular exercise, including strength training, helps preserve and build LBM.
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
    paddingTop: 10, // Increase padding top to move up
  },
  outerBox: {
    width: '90%', // Adjusted box size
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 50,
    borderWidth: 0.4,
    borderColor: 'black',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#213066', // Color for "LBM :"
  },
  lbmValue: {
    color: '#516DD1', // Color for the LBM value
  },
  infoText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#989898', // Color for the info text
  },
  infoTextMargin: {
    marginTop: 60, // Adjusted margin to move text downwards
  },
  bottomText: {
    marginTop: 30, // Increased margin to move the text further down
    fontSize: 16,
    color: 'black', // Color for the bottom text
  },
  outerBox2: {
    width: '90%', // Adjusted box size
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 20, // Adjusted padding vertical
    borderWidth: 0.4,
    borderColor: 'black',
    marginTop: 10,
    maxHeight: 300, // Set maximum height for ScrollView
  },
  scrollContainer: {
    paddingBottom: 20, // Add padding bottom to ensure last item is visible
  },
  scrollContent: {
    fontSize: 16,
    marginBottom: 10,
    width: '100%', // Ensure content takes full width
  },
  scrollSubHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    width: '100%', // Ensure subheading takes full width
  },
  continueButton: {
    marginTop: 30, // Add margin top to create space between the content and button
    backgroundColor: '#213066',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ResultScreen2;
