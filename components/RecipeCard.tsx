import React from "react";
import { Image, ScrollView, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { Recipe } from "../data/recipes";

type RootStackParamList = {
	RecipeDetail: { recipe: Recipe };
};

type RecipeCardProps = {
	recipe: Recipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => navigation.navigate("RecipeDetail", { recipe })}
			className="bg-white rounded-3xl shadow-lg overflow-hidden w-full mx-auto mb-6"
		>
			<View className="relative">
				<Image
					source={recipe.image}
					className="w-full h-24 sm:h-32 md:h-40 lg:max-h-32"
					resizeMode="cover"
				/>
				<View className="absolute top-4 right-4 bg-yellow-400 px-3.5 py-1 rounded-2xl">
					<Text className="text-xs">{recipe.time}min</Text>
				</View>
			</View>

			<View className="p-8">
				<Text className="font-bold text-xl mb-4">{recipe.name}</Text>

				<View className="mt-4">
					<Text className="text-gray-500 mb-2">RECETTE</Text>
					<Text className="text-base">{recipe.description}</Text>
				</View>

				<View className="mt-4">
					<Text className="text-gray-500 mb-2">INGRÉDIENTS</Text>
					<ScrollView className="mt-2">
						<View className="flex-row flex-wrap">
							{recipe.ingredients.map((ingredient) => (
								<View
									key={`${ingredient.ingredient}-${ingredient.quantity}-${ingredient.unit}`}
									className="w-1/2 mb-4"
								>
									<Text className="font-medium">{ingredient.ingredient}</Text>
									<Text className="text-gray-500">
										{ingredient.quantity} {ingredient.unit}
									</Text>
								</View>
							))}
						</View>
					</ScrollView>
				</View>
			</View>
		</Pressable>
	);
};
