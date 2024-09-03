import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PancuroniumScreen = () => {
  return (
    <View style={styles.container}>
      {/* Container 1 */}
      <View style={styles.container1}>
        <Text style={styles.container1Text}>Pancuronium</Text>
      </View>

      {/* Container 2 */}
      <View style={styles.container2}>
        <Text style={styles.heading}>Intubating dose:</Text>

        {/* Sub-containers */}
        <View style={styles.subContainer}>
          <Text style={styles.subContainerTitle}>Pancuronium Dose:</Text>
          <View style={styles.subContainerContent}>
            <Text style={styles.subContainerContentText}>0.08-0.12 mg/kg  iv</Text>
          </View>
        </View>
      </View>

      {/* Outer Box 2 */}
      <View style={styles.outerBox2}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
          <Text style={styles.scrollContent}>
            Pancuronium is a neuromuscular blocker used in anesthesia to facilitate endotracheal intubation and maintain muscle relaxation during surgery. The dosage can vary based on patient factors, but the typical intubating dose for pancuronium is:
          </Text>
          <Text style={styles.scrollSubHeading}>Intubating Dose:</Text>
          <Text style={styles.scrollContent}>
            - Dose Range: 0.06 to 0.1 mg/kg administered intravenously (IV).
          </Text>
          <Text style={styles.scrollSubHeading}>Administration Details:</Text>
          <Text style={styles.scrollContent}>
            - Route: Intravenous (IV)
          </Text>
          <Text style={styles.scrollContent}>
            - Onset of Action: Moderate onset, usually within 2 to 4 minutes.
          </Text>
          <Text style={styles.scrollContent}>
            - Duration of Action: Long duration; effects generally last around 60 to 90 minutes.
          </Text>
          <Text style={styles.scrollSubHeading}>Special Considerations:</Text>
          <Text style={styles.scrollContent}>
            - Monitoring: Continuous monitoring of neuromuscular function is recommended to ensure adequate muscle relaxation and avoid overdosage.
          </Text>
          <Text style={styles.scrollContent}>
            - Metabolism: Pancuronium is primarily metabolized by the liver and excreted by the kidneys. Its effects may be prolonged in patients with liver or renal dysfunction.
          </Text>
          <Text style={styles.scrollContent}>
            - Side Effects: Possible side effects include tachycardia, hypertension, and respiratory depression.
          </Text>
          <Text style={styles.scrollSubHeading}>Usage in Clinical Practice:</Text>
          <Text style={styles.scrollContent}>
            - Patient Factors: Dosage adjustments may be required based on the patient’s age, weight, and overall health status.
          </Text>
          <Text style={styles.scrollContent}>
            - Complementary Medications: Often used in conjunction with other anesthetics and sedatives to achieve complete muscle relaxation.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  container1: {
    backgroundColor: '#213066',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  container1Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Changed text color to white
  },
  container2: {
    backgroundColor: '#213066',
    padding: 30,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF', // Changed text color to white
  },
  subContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subContainerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subContainerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 2,
    width: '90%',
    borderColor: 'black',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subContainerContentText: {
    fontSize: 14,
    color: '#000',
  },
  outerBox2: {
    backgroundColor: '#D9D9D9',
    padding: 10, // Reduced padding
    borderRadius: 10,
    width: '90%', // Adjust width to make it smaller
    maxHeight: 320, // Set a max height if you want to limit the height
    marginBottom: 20,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  scrollContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  scrollSubHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default PancuroniumScreen;
