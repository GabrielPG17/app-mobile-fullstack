import React from 'react';
import {
 View,
 Text,
 FlatList,
 TouchableOpacity,
 StyleSheet 
} from 'react-native';
import colors from '../styles/colors';

const categorias = [
  {id: "entradas", name: "Entradas", emoji: "🥟"},
  {id: "saladas", name: "Saladas", emoji: "🥗" },
  {id: "sopas", name: "Sopas e caldos", emoji: "🍲"},
  {id:"massas", name: "Massas", emoji: "🍝"},
  {id: "carnes", name:"Carnes", emoji: "🥩"},
  {id: "peixes", name: "Peixes e frutos do mar", emoji: "🐟"},
  {id:"lanches", name: "Lanches e salgados", emoji: "🥪"},
  {id: "sobremesas", name:"Sobremesas", emoji: "🍮"},
  {id: "bebidas", name: "Bebidas", emoji: "🍹"},
];
export default function CategoriasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Receitas', { categoria: item.nome })}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  row: { justifyContent: 'space-between' },
  card: {
    flex: 1,
    margin: 6,
    paddingVertical: 28,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: colors.primary,
    elevation: 3,
  },
  emoji: { fontSize: 36, marginBottom: 8 },
  nome: { fontSize: 16, fontWeight: '600', color: '#fff' },
  
  card: {
  flex: 1,
  margin: 6,
  paddingVertical: 28,
  borderRadius: 14,
  alignItems: 'center',
  backgroundColor: colors.white,
  borderWidth: 1,
  borderColor: colors.border,
},
nome: { fontSize: 15, fontWeight: 'bold', color: colors.primary },
});