import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import type { Recipe } from "../data/recipes";

type RootStackParamList = {
  RecipeDetail: { recipe: Recipe };
};

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, "RecipeDetail">;

const SectionTitle = ({ icon, children }: { icon: string; children: string }) => (
  <View className="flex-row items-center gap-3 mb-4">
    <View className="w-10 h-10 bg-amber-100 rounded-xl items-center justify-center">
      <FontAwesome name={icon as any} size={16} color="#d97706" />
    </View>
    <Text className="text-lg font-bold text-gray-900">{children}</Text>
  </View>
);

export const RecipeDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RecipeDetailScreenRouteProp>();
  const { recipe } = route.params;

  return (
    <ScrollView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Hero Image */}
      <View className="relative overflow-hidden" style={{ height: 300 }}>
        <Image
          source={recipe.image}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        {/* Gradient Overlay */}
        <View
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Back Button */}
        <Pressable
          onPress={() => navigation.goBack()}
          className="absolute top-12 left-4 bg-white/90 w-12 h-12 rounded-full items-center justify-center"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 4,
          }}
        >
          <FontAwesome name="arrow-left" size={18} color="#1f2937" />
        </Pressable>

        {/* Time Badge */}
        <View
          className="absolute top-12 right-4 bg-amber-400 px-4 py-2 rounded-full flex-row items-center gap-2"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <FontAwesome name="clock-o" size={14} color="#1f2937" />
          <Text className="font-bold text-gray-900">{recipe.time} min</Text>
        </View>

        {/* Title Card */}
        <View
          className="absolute bottom-0 left-4 right-4 bg-white rounded-t-3xl px-6 pt-6"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 8,
          }}
        >
          <Text className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {recipe.name}
          </Text>
          <View className="flex-row items-center gap-4 pb-4">
            <View className="flex-row items-center gap-1">
              <FontAwesome name="users" size={14} color="#6b7280" />
              <Text className="text-gray-500 font-medium">
                {recipe.servings} personnes
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <FontAwesome name="cutlery" size={14} color="#6b7280" />
              <Text className="text-gray-500 font-medium">{recipe.appliance}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Content */}
      <View className="bg-white px-6 pb-8">
        {/* Quick Info Cards */}
        <View className="flex-row gap-3 mb-8 -mt-2">
          <View className="flex-1 bg-amber-50 rounded-2xl p-4 items-center">
            <FontAwesome name="clock-o" size={24} color="#d97706" />
            <Text className="text-xs text-gray-500 mt-2">Temps</Text>
            <Text className="font-bold text-gray-900">{recipe.time} min</Text>
          </View>
          <View className="flex-1 bg-green-50 rounded-2xl p-4 items-center">
            <FontAwesome name="users" size={24} color="#059669" />
            <Text className="text-xs text-gray-500 mt-2">Portions</Text>
            <Text className="font-bold text-gray-900">{recipe.servings}</Text>
          </View>
          <View className="flex-1 bg-blue-50 rounded-2xl p-4 items-center">
            <FontAwesome name="list" size={24} color="#2563eb" />
            <Text className="text-xs text-gray-500 mt-2">Ingredients</Text>
            <Text className="font-bold text-gray-900">
              {recipe.ingredients.length}
            </Text>
          </View>
        </View>

        {/* Description */}
        <View className="mb-8">
          <SectionTitle icon="file-text-o">Preparation</SectionTitle>
          <View className="bg-gray-50 rounded-2xl p-5">
            <Text className="text-base text-gray-700 leading-7">
              {recipe.description}
            </Text>
          </View>
        </View>

        {/* Ingredients */}
        <View className="mb-8">
          <SectionTitle icon="shopping-basket">Ingredients</SectionTitle>
          <View className="bg-gray-50 rounded-2xl overflow-hidden">
            {recipe.ingredients.map((ingredient, index) => (
              <View
                key={`${ingredient.ingredient}-${index}`}
                className={`flex-row items-center justify-between p-4 ${
                  index < recipe.ingredients.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-2 h-2 bg-amber-400 rounded-full" />
                  <Text className="text-base text-gray-800 font-medium">
                    {ingredient.ingredient}
                  </Text>
                </View>
                <Text className="text-base font-semibold text-amber-600">
                  {ingredient.quantity} {ingredient.unit}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Ustensils */}
        <View className="mb-8">
          <SectionTitle icon="wrench">Ustensiles</SectionTitle>
          <View className="flex-row flex-wrap gap-2">
            {recipe.ustensils.map((ustensil, index) => (
              <View
                key={`${ustensil}-${index}`}
                className="bg-gray-100 px-4 py-2.5 rounded-full"
              >
                <Text className="text-sm font-medium text-gray-700">
                  {ustensil}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Appliance */}
        <View className="mb-8">
          <SectionTitle icon="plug">Appareil</SectionTitle>
          <View className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 flex-row items-center gap-4">
            <View className="w-14 h-14 bg-amber-400 rounded-2xl items-center justify-center">
              <FontAwesome name="cog" size={24} color="#1f2937" />
            </View>
            <View>
              <Text className="text-lg font-bold text-gray-900">
                {recipe.appliance}
              </Text>
              <Text className="text-sm text-gray-500">Appareil necessaire</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="items-center py-6 bg-white border-t border-gray-100">
        <Text className="text-sm text-gray-400">Bon appetit !</Text>
      </View>
    </ScrollView>
  );
};
