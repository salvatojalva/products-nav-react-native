import React from 'react'
import { Text, View, StyleSheet, Button, Pressable } from 'react-native'

export const Producto = ({ item, setShowProdutoModal, setShowModelDetail, setProductDetail }) => {

    const { Codigo, Descripcion, PrecioVenta, PrecioCosto, Existencia, Fecha } = item

    return (
        <>
            <View style={styles.body}>
                <View style={styles.row}>
                    <View style={styles.col3}>
                        <Pressable
                            onPressOut={() =>{
                                setShowModelDetail(true)
                                setProductDetail(item)
                            }}
                        >
                            <View style={styles.container}>
                                <View style={styles.row}>
                                    <Text style={styles.description}>{Descripcion}</Text>
                                </View>
                            </View>
                            <View style={styles.container}>
                                <View style={styles.row}>
                                    <Text style={styles.codigo}># {Codigo}</Text>
                                    <Text style={styles.stock}>Disponibles: {Existencia}</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.col1}>
                        <View style={styles.container}>
                            <Text style={styles.venta}>
                                Q
                                <Text>{PrecioVenta}</Text>
                            </Text>
                            <Text style={styles.costo}>
                                Costo
                                <Text> Q{PrecioCosto}</Text>
                            </Text>
                        </View>
                        <Button
                            title='EDITAR'
                            onPress={() => setShowProdutoModal(true)}
                        >

                        </Button>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        width: "100%",
        flexDirection: 'column',
        paddingTop: 15,
        justifyContent: 'space-between'
    },
    col3: {
        width: "75%",
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    col1: {
        width: "25%",
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    codigo: {
        fontSize: 12,
        fontWeight: '800',
        color: '#cccc',
        textAlign: 'left'
    },
    stock: {
        fontSize: 12,
        fontWeight: '600',
    },
    description: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#339DFF'
    },
    venta: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    costo: {
        paddingTop: 17,
        fontSize: 12,

    }

});