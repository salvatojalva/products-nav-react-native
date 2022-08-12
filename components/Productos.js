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
import { Producto } from './productos/Producto';

const Separator = () => (
  <View style={styles.separator} />
);

export const Productos = () => {

  const [ShowProdutoModal, setShowProdutoModal] = useState(false)
  const [ProductList, setProductList] = useState([])

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