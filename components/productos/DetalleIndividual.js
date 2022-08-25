import React from 'react'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

export const DetalleIndividual = ({ setanimateModal, animateModal, setShowModelDetail, ShowDetail, ProductDetail }) => {

    const {Codigo, Descripcion, PrecioCosto, PrecioVenta, Existencia, Fecha} = ProductDetail;

    return (
        <SwipeUpDownModal
            modalVisible={ShowDetail}
            PressToanimate={animateModal}
            //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
            ContentModal={
                <View style={styles.containerContent}>
                    <View style={styles.titleContent}>
                        <Text style={styles.headerTitle}>
                            Detalle de producto
                        </Text>
                    </View>
                    
                    <View style={styles.fieldRow}>
                        <Text style={styles.field}> Codigo: </Text>
                        <Text style={styles.value}> #{Codigo} </Text>
                    </View>
                    <View style={styles.fieldRow}>
                        <Text style={styles.field}> Producto: </Text>
                        <Text style={styles.value}> {Descripcion} </Text>
                    </View>   
                    <View style={styles.fieldRow}>
                        <Text style={styles.field}> Costo: </Text>
                        <Text style={styles.value}> Q{PrecioCosto} </Text>
                    </View>   
                    <View style={styles.fieldRow}>
                        <Text style={styles.field}> Precio de venta: </Text>
                        <Text style={styles.value}> Q{PrecioVenta} </Text>
                    </View>   
                    <View style={styles.fieldRow}>
                        <Text style={styles.field}> Stock: </Text>
                        <Text style={styles.value}> {Existencia} </Text>
                    </View>
                    <View style={styles.fieldRow}>
                        <Text style={styles.field}> Fecha de vencimiento: </Text>
                        <Text style={styles.value}> {Fecha} </Text>
                    </View>   

                        
                        
                </View>
            }
            HeaderStyle={styles.headerContent}
            ContentModalStyle={styles.Modal}
            // HeaderContent={

            // }
            onClose={() => {
                setShowModelDetail(false);
                setanimateModal(false);
            }}
        />
    )


}

const styles = StyleSheet.create({
    field:{
        fontSize: 16,
        fontWeight: '800',
        color: '#cccc',
        textAlign: 'left'
    },
    value:{
        fontSize: 17,
        fontWeight: '800',
        
        textAlign: 'left'
    },
    fieldRow:{
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    containerContent: { flex: 1, marginTop: 40, height: 50 },
    containerHeader: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#ccc',
        marginHorizontal: 50
    },
    headerContent: {
        marginTop: 0,
    },
    Modal: {
        backgroundColor: '#FFFFFF',
        marginTop: '55%',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        paddingHorizontal: 25
    },
    titleContent:{
        flex: 0,
        alignContent: 'center',
        paddingBottom: 25
    },
    headerTitle: {
        color: '#339DFF',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '700'
    }
});

export default DetalleIndividual