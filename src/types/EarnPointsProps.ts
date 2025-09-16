export type EarnPointsProps = {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  pointsPS: number;
  setPointsPS: React.Dispatch<React.SetStateAction<number>>;
  levelCap: number;
  onNextLevel?: () => void;
  canGoNext?: boolean;
};
