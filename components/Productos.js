import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView
} from 'react-native';
import AgregarProducto from './productos/AgregarProducto';
import DetalleIndividual from './productos/DetalleIndividual';
import { Producto } from './productos/Producto';

const Separator = () => (
  <View style={styles.separator} />
);

export const Productos = () => {

  const [ShowProdutoModal, setShowProdutoModal] = useState(false)

  const [ShowDetail, setShowModelDetail] = useState(false);
  const [animateModal, setanimateModal] = useState(false);
  
  const [ProductList, setProductList] = useState([
    {
      Codigo: 'ASC3FS1',
      Descripcion: 'PC Master race',
      PrecioCosto: '123.11',
      PrecioVenta: '123.33',
      Existencia: '12',
      Fecha: '123123'
    },
    {
      Codigo: '23L232',
      Descripcion: 'MVE 2TB',
      PrecioCosto: '545.11',
      PrecioVenta: '44.44',
      Existencia: '55',
      Fecha: '123534'
    }
  ]);
  const [ProductDetail, setProductDetail] = useState({
    Codigo: '',
    Descripcion: '',
    PrecioCosto: '',
    PrecioVenta: '',
    Existencia: '',
    Fecha: ''
  });

  return (
    <>

      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="Agregar nuevo producto"
            onPress={() => setShowProdutoModal(true)}
          />
          <AgregarProducto
            ShowProdutoModal={ShowProdutoModal}
            setShowProdutoModal={setShowProdutoModal}
            ProductList={ProductList}
            setProductList={setProductList}
          >

          </AgregarProducto>
           
          <DetalleIndividual
             ShowDetail={ShowDetail}
             setShowModelDetail={setShowModelDetail}
             animateModal={animateModal}
             setanimateModal={setanimateModal}
             ProductDetail={ProductDetail}
             
          />

        </View>
        <Separator />

        {
          (ProductList.length === 0)
            ? (

              <View style={[
                { flex: 1, justifyContent: 'center', alignItems: 'center' },
              ]}>
                <Text style={styles.noProducts}>Tienda la bendicion</Text>
              </View>
            )
            : (

              <FlatList
                data={ProductList}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.item}>

                      <Producto
                        item={item}
                        setShowProdutoModal={setShowProdutoModal}
                        setShowModelDetail={setShowModelDetail}
                        setProductDetail={setProductDetail}
                        ProductDetail={ProductDetail}
                      >
                      </Producto>

                    </View>

                  )
                }}
              >
              </FlatList>
            )
        }
      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    backgroundColor: '#FFFF',
    borderBottomColor: "#cccc",
    borderBottomWidth: 1,
    paddingBottom: 7,
    marginBottom: 7,
    borderRadius: 5
  },
  noProducts: {
    color: '#CCC',
    fontSize: 34,
    fontWeight: "800"
  },
  
});

export default Productos;