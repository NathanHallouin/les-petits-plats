import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigation = useNavigation();

  // Limiter la description à 80 caractères
  const shortDescription = recipe.description.length > 80
    ? recipe.description.substring(0, 80) + "..."
    : recipe.description;

  // Limiter les ingrédients affichés
  const displayedIngredients = recipe.ingredients.slice(0, 4);
  const remainingCount = recipe.ingredients.length - 4;

  return (
    <Pressable
      onPress={() => navigation.navigate("RecipeDetail", { recipe })}
      className="card bg-white w-full"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 6,
      }}
    >
      {/* Image Container */}
      <View className="relative overflow-hidden" style={{ height: 180 }}>
        <Image
          source={recipe.image}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        {/* Gradient overlay */}
        <View
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.3) 100%)',
          }}
        />
        {/* Time Badge */}
        <View
          className="absolute top-3 right-3 bg-amber-400 px-3 py-1.5 rounded-full flex-row items-center gap-1"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <FontAwesome name="clock-o" size={12} color="#1f2937" />
          <Text className="text-xs font-bold text-gray-800">{recipe.time}min</Text>
        </View>
        {/* Appliance Badge */}
        <View className="absolute bottom-3 left-3 bg-white/90 px-3 py-1.5 rounded-full">
          <Text className="text-xs font-semibold text-gray-700">{recipe.appliance}</Text>
        </View>
      </View>

      {/* Content */}
      <View className="p-5">
        {/* Title */}
        <Text className="font-bold text-lg text-gray-900 mb-2" numberOfLines={1}>
          {recipe.name}
        </Text>

        {/* Description */}
        <Text className="text-sm text-gray-500 mb-4 leading-5" numberOfLines={2}>
          {shortDescription}
        </Text>

        {/* Ingredients Preview */}
        <View className="border-t border-gray-100 pt-4">
          <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            Ingredients
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {displayedIngredients.map((ingredient, index) => (
              <View
                key={`${ingredient.ingredient}-${index}`}
                className="bg-gray-50 px-3 py-1.5 rounded-full"
              >
                <Text className="text-xs text-gray-600 font-medium">
                  {ingredient.ingredient}
                </Text>
              </View>
            ))}
            {remainingCount > 0 && (
              <View className="bg-amber-50 px-3 py-1.5 rounded-full">
                <Text className="text-xs text-amber-600 font-semibold">
                  +{remainingCount}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Footer */}
        <View className="flex-row items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <View className="flex-row items-center gap-1">
            <FontAwesome name="users" size={12} color="#9ca3af" />
            <Text className="text-xs text-gray-400 font-medium">
              {recipe.servings} pers.
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-xs text-amber-500 font-semibold">Voir la recette</Text>
            <FontAwesome name="arrow-right" size={10} color="#f59e0b" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
