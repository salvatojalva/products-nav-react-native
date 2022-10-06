import React, { useState } from 'react'
import {
    Modal,
    Text,
    Pressable,
    StyleSheet,
    TextInput,
    SafeAreaView,
    ScrollView,
    Alert,
    Button,
    View
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AgregarProducto = ({ ShowProdutoModal, setShowProdutoModal, ProductList, setProductList }) => {

    const [Codigo, setCodigo] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [PrecioCosto, setPrecioCosto] = useState('')
    const [PrecioVenta, setPrecioVenta] = useState('')
    const [Existencia, setExistencia] = useState('')
    const [Fecha, setFecha] = useState('')

    const agregarProducto = async () => {
        const misDatos = [Codigo, Descripcion, PrecioCosto, PrecioVenta, Existencia, Fecha]
        if (misDatos.includes('')) {
            Alert.alert(
                'Aviso',
                'LLene todo los campos',
                [{ text: 'Recordar' }, { text: 'Cancelar' }, { text: 'Aceptar' }]
            )
            return
        }

        const nuevoProducto = {
            Codigo,
            Descripcion,
            PrecioCosto,
            PrecioVenta,
            Existencia,
            Fecha
        }
        const tepmNewList = [...ProductList, nuevoProducto];
        setProductList(tepmNewList)
        console.log(tepmNewList);
        try {
            await AsyncStorage.setItem('products', JSON.stringify(tepmNewList))
          } catch (e) {
            console.log(e)
            alert('Failed to save the data to the storage')
          }

        setShowProdutoModal(false)
        setCodigo('')
        setDescripcion('')
        setPrecioCosto('')
        setPrecioVenta('')
        setExistencia('')
        setFecha('')

    }
    return (
        <Modal
            animationType='slide'
            visible={ShowProdutoModal}
        >
            <SafeAreaView style={styles.bg}>
                <ScrollView>
                    <Text style={styles.titulo}> Nuevo producto</Text>
                    <Text style={styles.texto} >Codigo Producto</Text>
                    <TextInput
                        placeholder='Codigo'
                        style={styles.box}
                        value={Codigo}
                        onChangeText={setCodigo}
                    >
                    </TextInput>
                    <Text style={styles.texto} >Descripcion</Text>
                    <TextInput
                        placeholder='Descripcion'
                        style={styles.box}
                        value={Descripcion}
                        onChangeText={setDescripcion}
                    >
                    </TextInput>
                    <Text style={styles.texto} >Costo del producto</Text>
                    <TextInput
                        placeholder='Costo del producto'
                        style={styles.box}
                        value={PrecioCosto}
                        onChangeText={setPrecioCosto}
                    >
                    </TextInput>
                    <Text style={styles.texto} >Precio de venta</Text>
                    <TextInput
                        placeholder='Precio de venta'
                        style={styles.box}
                        value={PrecioVenta}
                        onChangeText={setPrecioVenta}
                    >
                    </TextInput>
                    <Text style={styles.texto} >Existencia</Text>
                    <TextInput
                        placeholder='Existencia'
                        style={styles.box}
                        value={Existencia}
                        onChangeText={setExistencia}
                    >
                    </TextInput>
                    <Text style={styles.texto} >Fecha de vencimiento</Text>
                    <TextInput
                        placeholder='Fecha de vencimiento'
                        style={styles.box}
                        value={Fecha}
                        onChangeText={setFecha}
                    >
                    </TextInput>


                    <View style={styles.fixToText}>
                        <Button
                            title="Cancelar"
                            color="#ccc"
                            onPress={() => { setShowProdutoModal(false) }}
                        />
                        <Button
                            title="Agregar producto"
                            onPress={agregarProducto}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}
const styles = StyleSheet.create({
    fixToText: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bg: {
        marginHorizontal: 20,
        flex: 1,
    },
    titulo: {
        textAlign: 'center',
        color: '#123a53',
        fontSize: 22,
        fontWeight: '600',
        margin: 20,
        fontWeight: 'bold',
    },

    texto: {
        paddingTop: 20,
        paddingBottom: 5,
        color: '#102445',
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold',
        marginHorizontal: 4
    },

    box:
    {
        borderWidth: 1,
        marginLeft: 3,
        padding: 3,
        borderRadius: 3,
        color: '#102445',
        fontSize: 12,
        textAlign: 'left',
        backgroundColor: '#ccc',
        fontWeight: 'bold',
        borderColor: '#cccc'
    },
})

export default AgregarProducto