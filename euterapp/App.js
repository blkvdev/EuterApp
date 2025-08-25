import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from '@expi/vector-icons/Ionicons'

const { width, height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaViewView style={styles.container}>

      <View style={styles.container}>

      </View>
      <View style={styles.footer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} color="#888888"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='repeat' size={30} color="#888888"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='shere-outline' size={30} color="#888888"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ellipsis-horizontal' size={30} color="#888888"/>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaViewView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
