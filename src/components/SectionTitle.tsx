type Props = {
  themed: string;
  actual: string;
};

export default function SectionTitle({
  themed,
  actual,
}: Props) {
  return (
    <div className="section-title-wrapper">
      <h2 className="section-title themed">
        {themed}
      </h2>

      <h2 className="section-title actual">
        {actual}
      </h2>
    </div>
  );
}