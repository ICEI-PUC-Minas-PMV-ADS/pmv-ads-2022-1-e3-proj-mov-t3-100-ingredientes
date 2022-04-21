import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const BodyComponent = ({children}) => {
    return (
      <View style={Styles.Body}>
        {children}
      </View>
    );
  }

const Styles = StyleSheet.create({
 Body: {
   backgroundColor: '#ddd',
   flex: 9
}
});

export default BodyComponent;