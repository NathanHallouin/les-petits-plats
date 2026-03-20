import React, { useState } from "react";
import { View, Text, Pressable, Modal, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
  { label: "Rapide", subLabel: "< 15 min", value: 15, icon: "bolt" },
  { label: "Moyen", subLabel: "< 30 min", value: 30, icon: "clock-o" },
  { label: "Long", subLabel: "< 1h", value: 60, icon: "hourglass-half" },
];

export const RecipeFilters = ({ filters, onChange, ustensils, appliances }: RecipeFiltersProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeFiltersCount =
    filters.time.length +
    filters.ustensil.length +
    (filters.appliance ? 1 : 0);

  const toggleTime = (val: number) => {
    if (filters.time.includes(val)) {
      onChange({ ...filters, time: filters.time.filter((t) => t !== val) });
    } else {
      onChange({ ...filters, time: [...filters.time, val] });
    }
  };

  const toggleUstensil = (u: string) => {
    if (filters.ustensil.includes(u)) {
      onChange({ ...filters, ustensil: filters.ustensil.filter((x) => x !== u) });
    } else {
      onChange({ ...filters, ustensil: [...filters.ustensil, u] });
    }
  };

  const selectAppliance = (a: string) => {
    onChange({ ...filters, appliance: filters.appliance === a ? undefined : a });
  };

  const resetFilters = () => {
    onChange({ time: [], ustensil: [], appliance: undefined });
  };

  const FilterChip = ({
    label,
    active,
    onPress,
    icon,
  }: {
    label: string;
    active: boolean;
    onPress: () => void;
    icon?: string;
  }) => (
    <Pressable
      onPress={onPress}
      className={`px-4 py-2.5 rounded-full flex-row items-center gap-2 ${
        active
          ? "bg-amber-400"
          : "bg-white border-2 border-gray-200"
      }`}
      style={{
        shadowColor: active ? '#f59e0b' : '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: active ? 0.2 : 0.05,
        shadowRadius: 4,
        elevation: active ? 4 : 2,
      }}
    >
      {icon && (
        <FontAwesome
          name={icon as any}
          size={12}
          color={active ? "#1f2937" : "#6b7280"}
        />
      )}
      <Text
        className={`text-sm font-semibold ${
          active ? "text-gray-900" : "text-gray-600"
        }`}
      >
        {label}
      </Text>
      {active && (
        <FontAwesome name="check" size={10} color="#1f2937" />
      )}
    </Pressable>
  );

  const SectionTitle = ({ children }: { children: string }) => (
    <View className="flex-row items-center gap-2 mb-3">
      <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        {children}
      </Text>
      <View className="flex-1 h-px bg-gray-100" />
    </View>
  );

  return (
    <>
      {/* Filter Button */}
      <Pressable
        onPress={() => setDrawerOpen(true)}
        className="flex-row items-center gap-2 bg-white px-5 py-3 rounded-full"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <FontAwesome name="sliders" size={16} color="#1f2937" />
        <Text className="font-semibold text-gray-800">Filtres</Text>
        {activeFiltersCount > 0 && (
          <View className="bg-amber-400 w-5 h-5 rounded-full items-center justify-center">
            <Text className="text-xs font-bold text-gray-900">
              {activeFiltersCount}
            </Text>
          </View>
        )}
      </Pressable>

      {/* Filter Modal */}
      <Modal visible={drawerOpen} animationType="slide" transparent>
        <View className="flex-1 justify-end bg-black/50">
          <Pressable
            className="flex-1"
            onPress={() => setDrawerOpen(false)}
          />
          <View
            className="bg-white rounded-t-3xl max-h-[85%]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -10 },
              shadowOpacity: 0.15,
              shadowRadius: 20,
              elevation: 20,
            }}
          >
            {/* Handle */}
            <View className="items-center pt-3 pb-2">
              <View className="w-10 h-1 bg-gray-300 rounded-full" />
            </View>

            {/* Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
              <View>
                <Text className="text-xl font-bold text-gray-900">Filtres</Text>
                <Text className="text-sm text-gray-500 mt-0.5">
                  Affinez votre recherche
                </Text>
              </View>
              <Pressable
                onPress={() => setDrawerOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
              >
                <FontAwesome name="times" size={18} color="#6b7280" />
              </Pressable>
            </View>

            {/* Content */}
            <ScrollView className="px-6 py-6">
              {/* Time Filter */}
              <View className="mb-8">
                <SectionTitle>Temps de preparation</SectionTitle>
                <View className="flex-row flex-wrap gap-3">
                  {timeOptions.map((opt) => (
                    <FilterChip
                      key={opt.value}
                      label={opt.label}
                      active={filters.time.includes(opt.value)}
                      onPress={() => toggleTime(opt.value)}
                      icon={opt.icon}
                    />
                  ))}
                </View>
              </View>

              {/* Appliances Filter */}
              <View className="mb-8">
                <SectionTitle>Appareils</SectionTitle>
                <View className="flex-row flex-wrap gap-3">
                  {appliances.map((a) => (
                    <FilterChip
                      key={a}
                      label={a}
                      active={filters.appliance === a}
                      onPress={() => selectAppliance(a)}
                    />
                  ))}
                </View>
              </View>

              {/* Ustensils Filter */}
              <View className="mb-8">
                <SectionTitle>Ustensiles</SectionTitle>
                <View className="flex-row flex-wrap gap-3">
                  {ustensils.map((u) => (
                    <FilterChip
                      key={u}
                      label={u}
                      active={filters.ustensil.includes(u)}
                      onPress={() => toggleUstensil(u)}
                    />
                  ))}
                </View>
              </View>
            </ScrollView>

            {/* Footer */}
            <View
              className="flex-row gap-3 px-6 py-4 border-t border-gray-100"
              style={{ paddingBottom: 34 }}
            >
              <Pressable
                onPress={resetFilters}
                className="flex-1 py-4 rounded-xl border-2 border-gray-200 items-center"
              >
                <Text className="font-semibold text-gray-600">Reinitialiser</Text>
              </Pressable>
              <Pressable
                onPress={() => setDrawerOpen(false)}
                className="flex-1 py-4 rounded-xl bg-amber-400 items-center"
                style={{
                  shadowColor: '#f59e0b',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 6,
                }}
              >
                <Text className="font-bold text-gray-900">Appliquer</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
