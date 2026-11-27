import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

const opcoes = [
  {
    titulo: "Minhas Receitas",
    descricao: "Organize suas receitas favoritas.",
    icone: "restaurant-outline",
    tela: "Receitas",
  },
  {
    titulo: "Categorias",
    descricao: "Organize suas categorias de receitas.",
    icone: "grid-outline",
    tela: "Categorias",
  },
  {
    titulo: "Meus Planos",
    descricao: "Organize suas refeições durante a semana.",
    icone: "calendar-outline",
    tela: "Planos",
  },
];
const categorias = [
  { name: "Entradas", emoji: "🥟" },
  { name: "Saladas", emoji: "🥗" },
  { name: "Sopas e caldos", emoji: "🍲" },
  { name: "Massas", emoji: "🍝" },
  { name: "Carnes", emoji: "🥩" },
  { name: "Peixes e frutos do mar", emoji: "🐟" },
  { name: "Lanches e salgados", emoji: "🥪" },
  { name: "Sobremesas", emoji: "🍮" },
  { name: "Bebidas", emoji: "🍹" },
];
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <View style={styles.header}>
        <View>
          <Text style={styles.pageTitle}>Painel Inicial</Text>
          <Text style={styles.subtitle}>
            Organize sua alimentação de forma simples.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.userButton}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Ionicons
            name="person-circle-outline"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.userText}>Olá, usuário!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Bem-vindo ao ReceitasJA!</Text>

        <Text style={styles.bannerDescription}>
          Descubra receitas, organize ingredientes e planeje suas refeições.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorias</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Categorias")}>
            <Text style={styles.seeAll}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chipsWrap}>
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={styles.chip}
              onPress={() =>
                navigation.navigate("Receitas", { categoria: cat.name })
              }
            >
              <Text style={styles.chipText}>
                {cat.emoji} {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acesse suas ferramentas</Text>

        {opcoes.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(item.tela)}
          >
            <View style={styles.cardIcon}>
              <Ionicons name={item.icone} size={27} color={colors.primary} />
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>

              <Text style={styles.cardDescription}>{item.descricao}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={21}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ReceitasJA - Organize sua alimentação.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 55,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pageTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: colors.text,
  },

  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 5,
  },

  userButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  userText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.text,
  },

  banner: {
    backgroundColor: colors.banner,
    borderRadius: 17,
    padding: 23,
    minHeight: 145,
    justifyContent: "center",
  },

  bannerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
  },

  bannerDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
  },

  section: {
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 14,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  seeAll: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },

  chipsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  chip: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardIcon: {
    width: 49,
    height: 49,
    borderRadius: 13,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },

  cardContent: {
    flex: 1,
    marginLeft: 13,
    marginRight: 8,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  footer: {
    marginTop: 15,
    marginBottom: 25,
    alignItems: "center",
  },

  footerText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
});
