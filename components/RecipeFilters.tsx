import React, { useState } from "react";
import { View, Text, Pressable, Modal, ScrollView } from "react-native";

export type Filters = {
  time: number[];
  ustensil: string[];
  appliance?: string;
};

type RecipeFiltersProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  ustensils: string[];
  appliances: string[];
};

const timeOptions = [
  { label: "< 15 min", value: 15 },
  { label: "< 30 min", value: 30 },
  { label: "< 1h", value: 60 },
];

export const RecipeFilters = ({ filters, onChange, ustensils, appliances }: RecipeFiltersProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Ajout/retrait pour les temps
  const toggleTime = (val: number) => {
    if (filters.time.includes(val)) {
      onChange({ ...filters, time: filters.time.filter((t) => t !== val) });
    } else {
      onChange({ ...filters, time: [...filters.time, val] });
    }
  };
  // Ajout/retrait pour les ustensiles
  const toggleUstensil = (u: string) => {
    if (filters.ustensil.includes(u)) {
      onChange({ ...filters, ustensil: filters.ustensil.filter((x) => x !== u) });
    } else {
      onChange({ ...filters, ustensil: [...filters.ustensil, u] });
    }
  };
  // Sélection unique pour l'appareil
  const selectAppliance = (a: string) => {
    onChange({ ...filters, appliance: filters.appliance === a ? undefined : a });
  };
  // Réinitialisation
  const resetFilters = () => {
    onChange({ time: [], ustensil: [], appliance: undefined });
  };

  // Bloc de filtres (réutilisé dans drawer)
  const FiltersBlock = (
    <View className="w-full flex flex-col gap-6 p-4 bg-white rounded-lg">
      {/* Temps */}
      <View className="flex flex-col items-start gap-2">
        <Text className="text-xs font-bold mb-1 text-gray-600 uppercase tracking-wider">Temps</Text>
        <View className="flex-row flex-wrap gap-2">
          {timeOptions.map((opt) => (
            <Pressable
              key={opt.value}
              onPress={() => toggleTime(opt.value)}
              className={`px-3 py-2 rounded-full border flex-row items-center ${filters.time.includes(opt.value) ? "bg-yellow-400 border-yellow-500" : "bg-white border-gray-300"}`}
            >
              <Text className="text-xs font-semibold mr-1">{opt.label}</Text>
              {filters.time.includes(opt.value) && (
                <Text className="text-xs font-bold">×</Text>
              )}
            </Pressable>
          ))}
        </View>
      </View>
      {/* Ustensiles */}
      <View className="flex flex-col items-start gap-2">
        <Text className="text-xs font-bold mb-1 text-gray-600 uppercase tracking-wider">Ustensiles</Text>
        <View className="flex-row flex-wrap gap-2">
          {ustensils.map((u) => (
            <Pressable
              key={u}
              onPress={() => toggleUstensil(u)}
              className={`px-3 py-2 rounded-full border flex-row items-center ${filters.ustensil.includes(u) ? "bg-yellow-400 border-yellow-500" : "bg-white border-gray-300"}`}
            >
              <Text className="text-xs font-semibold mr-1">{u}</Text>
              {filters.ustensil.includes(u) && (
                <Text className="text-xs font-bold">×</Text>
              )}
            </Pressable>
          ))}
        </View>
      </View>
      {/* Appareils */}
      <View className="flex flex-col items-start gap-2">
        <Text className="text-xs font-bold mb-1 text-gray-600 uppercase tracking-wider">Appareils</Text>
        <View className="flex-row flex-wrap gap-2">
          {appliances.map((a) => (
            <Pressable
              key={a}
              onPress={() => selectAppliance(a)}
              className={`px-3 py-2 rounded-full border ${filters.appliance === a ? "bg-yellow-400 border-yellow-500" : "bg-white border-gray-300"}`}
            >
              <Text className="text-xs font-semibold">{a}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      {/* Bouton reset */}
      <View className="flex flex-col items-start">
        <Pressable onPress={resetFilters} className="px-3 py-2 rounded-full border bg-gray-200 border-gray-400 mt-2">
          <Text className="text-xs font-semibold">Réinitialiser</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <>
      {/* Bouton Filtres visible partout */}
      <View className="w-full flex items-end pr-4 mt-2">
        <Pressable onPress={() => setDrawerOpen(true)} className="px-4 py-2 bg-yellow-400 rounded-full shadow-md">
          <Text className="font-semibold text-black">Filtres</Text>
        </Pressable>
      </View>
      {/* Drawer/Modal mobile + web */}
      <Modal visible={drawerOpen} animationType="slide" transparent>
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-2xl p-4 max-h-[80%]">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Filtres</Text>
              <Pressable onPress={() => setDrawerOpen(false)}>
                <Text className="text-2xl font-bold">×</Text>
              </Pressable>
            </View>
            <ScrollView>{FiltersBlock}</ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}; 