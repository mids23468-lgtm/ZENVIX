export interface Watch {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'chronograph' | 'tourbillon' | 'automatique' | 'heritage';
  gender: 'men' | 'women' | 'unisex';
  image: string;
  description: string;
  reference: string;
  movement: {
    caliber: string;
    type: string;
    powerReserve: string;
    frequency: string;
    jewels: number;
  };
  case: {
    material: string;
    diameter: string;
    thickness: string;
    waterResistance: string;
    crystal: string;
  };
  strap: string;
  isLimitedEdition?: boolean;
  editionLimit?: number;
  features: string[];
}

export interface CartItem {
  watch: Watch;
  quantity: number;
  selectedStrap?: string;
  includeWoodenBox?: boolean;
}

export type ActiveSection = 'home' | 'collection' | 'men' | 'women' | 'about' | 'craftsmanship' | 'contact';
