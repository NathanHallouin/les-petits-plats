export type Recipe = {
    id: number;
    name: string;
    servings: number;
    ingredients: {
        ingredient: string;
        quantity: number;
        unit?: string;
    }[];
    time: number;
    description: string;
    appliance: string;
    ustensils: string[];
    image: any;
};
