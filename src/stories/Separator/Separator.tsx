export type SeparatorProps = {
  margin: number;
  borderColor?: string;
};

export default function Separator({ margin, borderColor = '#777' }: SeparatorProps) {
  return (
    <hr
      style={{
        margin: `${margin}px 0`,
        borderColor: `${borderColor}`,
      }}
    />
  );
}
