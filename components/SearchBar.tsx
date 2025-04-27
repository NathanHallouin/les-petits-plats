import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, Pressable } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (s: string) => void;
  placeholder?: string;
};

export const SearchBar = ({
  value,
  onChangeText,
  placeholder,
}: SearchBarProps) => (
  <View className="w-full">
    <View className="relative w-full">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="h-16 w-full rounded-lg bg-white px-4"
      />
      <Pressable className="absolute right-1 top-2">
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
    </View>
  </View>
);
