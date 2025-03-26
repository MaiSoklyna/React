interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  category: "vegetables" | "fruits";
}

interface State {
  team: TeamMember[];
  products: Product[];
  selectedCategory: "all" | "vegetables" | "fruits";
  sortBy: "price-low" | "price-high" | "name";
  searchQuery: string;
  setCategory: (category: string) => void;
  setSortBy: (sort: string) => void;
  setSearchQuery: (query: string) => void;
  filteredProducts: () => Product[];
}
