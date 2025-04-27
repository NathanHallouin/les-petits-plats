import React, { useState, useMemo } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { Header } from "./Header";
import { recipes } from "../data/recipes";
import { RecipeCard } from "./RecipeCard";
import { Filters } from "./RecipeFilters";

export const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({ time: [], ustensil: [], appliance: undefined });

  // Extraction dynamique des ustensiles et appareils
  const ustensils = useMemo(() => {
    const set = new Set<string>();
    recipes.forEach((r) => r.ustensils.forEach((u) => set.add(u)));
    return Array.from(set);
  }, []);
  const appliances = useMemo(() => {
    const set = new Set<string>();
    recipes.forEach((r) => set.add(r.appliance));
    return Array.from(set);
  }, []);

  // Filtrage des recettes
  const filtered = recipes.filter((r) => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchTime = !filters.time.length || filters.time.some((t) => r.time <= t);
    const matchUstensil = !filters.ustensil.length || filters.ustensil.every((u) => r.ustensils.includes(u));
    const matchAppliance = !filters.appliance || r.appliance === filters.appliance;
    return matchSearch && matchTime && matchUstensil && matchAppliance;
  });

  return (
    <SafeAreaView className="flex-1 bg-neutral-200">
      <ScrollView>
        <Header
          value={search}
          onChangeText={setSearch}
          filters={filters}
          onChangeFilters={setFilters}
          ustensils={ustensils}
          appliances={appliances}
        />
        {/* grilles de cards */}
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
          {filtered.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
          {filtered.length === 0 && (
            <Text className="text-center text-gray-500">
              Aucune recette trouvée.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
