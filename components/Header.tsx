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
};

export const Header = ({ value, onChangeText, filters, onChangeFilters, ustensils, appliances }: HeaderProps) => {
  const { width } = Dimensions.get("window");
  return (
    <ImageBackground
      source={require("../assets/img-background.png")}
      style={{ width }}
      className="h-[420px] sm:h-[667px] bg-cover relative"
    >
      <View className="flex-1 flex-col items-center justify-center relative h-full">
        <View className="w-full flex items-center mt-4 mb-6 z-10">
          <Image
            source={require("../assets/logo/logo.png")}
            className="h-16 w-16 sm:h-20 sm:w-20"
            resizeMode="contain"
          />
          <Image
            source={require("../assets/logo/point.png")}
            className="h-5 w-5 sm:h-6 sm:w-6"
            resizeMode="contain"
          />
        </View>
        <View className="flex flex-col items-center justify-center w-full gap-6">
          <Text className="font-anton text-center text-3xl text-yellow-300 drop-shadow-md sm:text-5xl">
            CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
          </Text>
          <View className="w-full px-4 sm:px-20 md:px-40 lg:px-60 xl:px-80">
            <SearchBar value={value} onChangeText={onChangeText} placeholder="Rechercher une recette, un ingrédient..." />
          </View>
          <RecipeFilters filters={filters} onChange={onChangeFilters} ustensils={ustensils} appliances={appliances} />
        </View>
      </View>
    </ImageBackground>
  );
};
