import React from "react";
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";
import { SearchBar } from "./SearchBar";
import { RecipeFilters, Filters } from "./RecipeFilters";

type HeaderProps = {
  value: string;
  onChangeText: (text: string) => void;
  filters: Filters;
  onChangeFilters: (filters: Filters) => void;
  ustensils: string[];
  appliances: string[];
  recipeCount: number;
};

export const Header = ({
  value,
  onChangeText,
  filters,
  onChangeFilters,
  ustensils,
  appliances,
  recipeCount
}: HeaderProps) => {
  const { width } = Dimensions.get("window");

  return (
    <ImageBackground
      source={require("../assets/img-background.png")}
      style={{ width, minHeight: 500 }}
      resizeMode="cover"
      className="relative"
    >
      {/* Overlay gradient */}
      <View className="absolute inset-0 header-overlay" />

      <View className="flex-1 flex-col items-center justify-center relative z-10 px-4 py-12">
        {/* Logo Section */}
        <View className="items-center mb-8 animate-fadeIn">
          <View className="flex-row items-center gap-1">
            <Image
              source={require("../assets/logo/logo.png")}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/logo/point.png")}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Title Section */}
        <View className="max-w-4xl mx-auto mb-10 animate-slideUp">
          <Text className="font-anton text-center text-2xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-wide">
            CHERCHEZ PARMI PLUS DE{" "}
            <Text className="text-yellow-400">1500 RECETTES</Text>
            {"\n"}DU QUOTIDIEN, SIMPLES ET DELICIEUSES
          </Text>
        </View>

        {/* Search Section */}
        <View className="w-full max-w-2xl mx-auto mb-6 animate-slideUp px-4">
          <SearchBar
            value={value}
            onChangeText={onChangeText}
            placeholder="Rechercher une recette, un ingredient..."
          />
        </View>

        {/* Results Count & Filters */}
        <View className="flex-row items-center gap-4 animate-fadeIn">
          <View className="glass px-4 py-2 rounded-full">
            <Text className="text-gray-700 font-semibold text-sm">
              {recipeCount} recette{recipeCount > 1 ? 's' : ''} trouvee{recipeCount > 1 ? 's' : ''}
            </Text>
          </View>
          <RecipeFilters
            filters={filters}
            onChange={onChangeFilters}
            ustensils={ustensils}
            appliances={appliances}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
