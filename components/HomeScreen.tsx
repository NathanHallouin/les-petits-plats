import React, { useState, useMemo } from "react";
import { ScrollView, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Header } from "./Header";
import { recipes } from "../data/recipes";
import { RecipeCard } from "./RecipeCard";
import { Filters } from "./RecipeFilters";

export const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    time: [],
    ustensil: [],
    appliance: undefined,
  });

  // Dynamic extraction of utensils and appliances
  const ustensils = useMemo(() => {
    const set = new Set<string>();
    recipes.forEach((r) => r.ustensils.forEach((u) => set.add(u)));
    return Array.from(set).sort();
  }, []);

  const appliances = useMemo(() => {
    const set = new Set<string>();
    recipes.forEach((r) => set.add(r.appliance));
    return Array.from(set).sort();
  }, []);

  // Recipe filtering
  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const searchLower = search.toLowerCase();
      const matchSearch =
        r.name.toLowerCase().includes(searchLower) ||
        r.description.toLowerCase().includes(searchLower) ||
        r.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(searchLower)
        );
      const matchTime =
        !filters.time.length || filters.time.some((t) => r.time <= t);
      const matchUstensil =
        !filters.ustensil.length ||
        filters.ustensil.every((u) => r.ustensils.includes(u));
      const matchAppliance =
        !filters.appliance || r.appliance === filters.appliance;
      return matchSearch && matchTime && matchUstensil && matchAppliance;
    });
  }, [search, filters]);

  const hasActiveFilters =
    filters.time.length > 0 ||
    filters.ustensil.length > 0 ||
    filters.appliance !== undefined;

  return (
    <ScrollView
      className="flex-1 min-h-screen"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <Header
        value={search}
        onChangeText={setSearch}
        filters={filters}
        onChangeFilters={setFilters}
        ustensils={ustensils}
        appliances={appliances}
        recipeCount={filtered.length}
      />

      {/* Main Content */}
      <View className="px-4 sm:px-6 lg:px-8 py-8 -mt-6">
        {/* Section Header */}
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <Text className="text-2xl font-bold text-gray-900">
              {hasActiveFilters ? "Resultats filtres" : "Nos recettes"}
            </Text>
            <Text className="text-sm text-gray-500 mt-1">
              {filtered.length} recette{filtered.length > 1 ? "s" : ""}{" "}
              disponible{filtered.length > 1 ? "s" : ""}
            </Text>
          </View>
        </View>

        {/* Recipe Grid */}
        {filtered.length > 0 ? (
          <View className="recipe-grid stagger-children">
            {filtered.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </View>
        ) : (
          <View className="items-center justify-center py-20">
            <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
              <FontAwesome name="search" size={32} color="#9ca3af" />
            </View>
            <Text className="text-xl font-semibold text-gray-700 mb-2">
              Aucune recette trouvee
            </Text>
            <Text className="text-gray-500 text-center max-w-xs">
              Essayez de modifier vos filtres ou votre recherche pour trouver
              des recettes
            </Text>
          </View>
        )}
      </View>

      {/* Footer */}
      <View className="items-center py-8 border-t border-gray-100 mt-8">
        <Text className="text-sm text-gray-400">
          Les Petits Plats - Votre inspiration culinaire
        </Text>
      </View>
    </ScrollView>
  );
};
