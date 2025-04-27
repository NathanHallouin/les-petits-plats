import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import type { Recipe } from "../data/recipes";

type RootStackParamList = {
	RecipeDetail: { recipe: Recipe };
};

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, "RecipeDetail">;

export const RecipeDetailScreen = () => {
	const navigation = useNavigation();
	const route = useRoute<RecipeDetailScreenRouteProp>();
	const { recipe } = route.params;

	return (
		<ScrollView className="flex-1 bg-neutral-200">
			<View className="relative">
				<Image
					source={recipe.image}
					className="w-full h-24 sm:h-32 md:h-40 lg:max-h-32"
					resizeMode="cover"
				/>
				<Pressable
					onPress={() => navigation.goBack()}
					className="absolute top-4 left-4 bg-white p-2 rounded-full"
				>
					<FontAwesome name="arrow-left" size={24} color="black" />
				</Pressable>
				<View className="absolute top-4 right-4 bg-yellow-400 px-3.5 py-1 rounded-2xl">
					<Text className="text-xs">{recipe.time}min</Text>
				</View>
			</View>

			<View className="p-8">
				<Text className="font-bold text-2xl mb-4">{recipe.name}</Text>

				<View className="mt-4">
					<Text className="text-gray-500 mb-2">RECETTE</Text>
					<Text className="text-base">{recipe.description}</Text>
				</View>

				<View className="mt-4">
					<Text className="text-gray-500 mb-2">INGRÉDIENTS</Text>
					<View className="mt-2">
						{recipe.ingredients.map((ingredient, index) => (
							<View key={`${ingredient.ingredient}-${ingredient.quantity}-${ingredient.unit}`} className="mb-4">
								<Text className="font-medium">{ingredient.ingredient}</Text>
								<Text className="text-gray-500">
									{ingredient.quantity} {ingredient.unit}
								</Text>
							</View>
						))}
					</View>
				</View>

				<View className="mt-4">
					<Text className="text-gray-500 mb-2">APPAREIL</Text>
					<Text className="text-base">{recipe.appliance}</Text>
				</View>

				<View className="mt-4">
					<Text className="text-gray-500 mb-2">USTENSILES</Text>
					<View className="flex-row flex-wrap">
						{recipe.ustensils.map((ustensil, index) => (
							<Text key={`${ustensil}-${index}`} className="mr-2 text-base">
								{ustensil}
							</Text>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
