import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const Form = () => {
    const [moneda, setMoneda] = useState('');
    const [cotizacionVisible, setCotizacionVisible] = useState(false);

    const handleCotizar = () => {
        setCotizacionVisible(true);
    };


    return (
        <ScrollView contentContainerStyle={styles.overlay}>
            <View style={styles.container}>
                <Text style={styles.heading}>Cotiza tu moneda</Text>
                <Text style={styles.subtitle}>Selecciona una moneda para consultar su valor.</Text>
                <View style={styles.campo}>
                    <Text style={styles.label}>Moneda</Text>
                    <Picker
                        selectedValue={moneda}
                        onValueChange={(valor) => {
                            setMoneda(valor);
                            setCotizacionVisible(false);
                        }}
                        style={styles.pickerInput}
                    >
                        <Picker.Item label="Seleccione" value="" />
                        <Picker.Item label="Dolar USD" value="USD" />
                        <Picker.Item label="Peso mexicano MX" value="MXN" />
                        <Picker.Item label="Euro EUR" value="EUR" />
                        <Picker.Item label="Libra esterlina GBP" value="GBP" />
                    </Picker>
                </View>

                <Pressable
                    style={styles.btnCotizar}
                    onPress={handleCotizar}
                >
                    <Text style={styles.textCotizar}>Cotizar</Text>
                </Pressable>

                {cotizacionVisible && <Text style={styles.resultado}>Formulario Creado</Text>}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#E8F4F3',
    },
    container: {
        width: '100%',
        maxWidth: 480,
        alignSelf: 'center',
        padding: 24,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        shadowColor: '#123B4A',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.14,
        shadowRadius: 12,
    },
    heading: {
        color: '#123B4A',
        fontSize: 26,
        fontWeight: '800',
        marginBottom: 6,
    },
    subtitle: {
        color: '#5D7075',
        fontSize: 15,
        lineHeight: 21,
        marginBottom: 24,
    },
    label: {
        textTransform: 'uppercase',
        color: '#167C80',
        fontWeight: '700',
        fontSize: 14,
        letterSpacing: 0.6,
        marginBottom: 8,
    },
    campo: {
        width: '100%',
    },
    pickerInput: {
        height: 52,
        color: '#123B4A',
        backgroundColor: '#F4F9F8',
        borderWidth: 1,
        borderColor: '#C8DEDB',
    },
    btnCotizar: {
        minHeight: 52,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#167C80',
        paddingHorizontal: 16,
        marginTop: 24,
    },
    textCotizar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 0.8,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    resultado: {
        marginTop: 20,
        color: '#123B4A',
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default Form;