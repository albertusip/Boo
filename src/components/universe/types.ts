export interface Universe {
  tag: string;
  souls: string;
};

export interface UniverseProps {
  universes: Universe[];
  variant?: "vertical" | "horizontal";
};