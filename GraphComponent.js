import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GraphComponent = ({ route }) => {
  const { bmi, difference } = route.params;

  const lineChartData = {
    labels: ['BMI', 'Difference'],
    datasets: [
      {
        data: [bmi, difference],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Customize color
        strokeWidth: 2, // Optional
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI and Difference Graph</Text>
      <LineChart
        data={lineChartData}
        width={screenWidth - 20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=" kg/m²"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffa726',
          backgroundGradientTo: '#fb8c00',
          decimalPlaces: 1, // Optional
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />
      <View style={styles.outerBox2}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
          <Text style={styles.scrollContent}>
            BMI (Body Mass Index) and Difference calculations are essential for assessing and managing patient health. They provide valuable insights into a patient's weight category and help in making informed decisions regarding nutrition and medical care.
          </Text>
          <Text style={styles.scrollSubHeading}>Why We Do This Calculation:</Text>
          <Text style={styles.scrollContent}>
            - BMI is a simple and widely used method to categorize individuals based on their body weight relative to their height.
          </Text>
          <Text style={styles.scrollContent}>
            - The difference in BMI values can indicate changes in a patient's health status over time.
          </Text>
          <Text style={styles.scrollSubHeading}>Usage in Clinical Practice:</Text>
          <Text style={styles.scrollContent}>
            - Regular BMI assessments can help detect potential health risks early, such as obesity or underweight conditions.
          </Text>
          <Text style={styles.scrollContent}>
            - BMI values are often used to tailor dietary and fitness plans to individual needs.
          </Text>
          <Text style={styles.scrollContent}>
            - In conjunction with other health metrics, BMI helps in creating comprehensive health management plans.
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  outerBox2: {
    flex: 1,
    width: '90%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  scrollContent: {
    fontSize: 16,
    marginVertical: 5,
  },
  scrollSubHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default GraphComponent;
