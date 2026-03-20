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
        placeholderTextColor="#9ca3af"
        className="h-16 w-full rounded-2xl bg-white px-6 pr-16 text-base shadow-lg"
        style={{
          fontSize: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 8,
        }}
      />
      <Pressable
        className="absolute right-2 top-2 bg-amber-400 w-12 h-12 rounded-xl items-center justify-center"
        style={{
          shadowColor: '#f59e0b',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
        }}
      >
        <FontAwesome name="search" size={18} color="#1f2937" />
      </Pressable>
    </View>
  </View>
);
