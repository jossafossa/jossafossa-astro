type DateProps = {
  date: Date;
};

export const Date = ({ date }: DateProps) => {
  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleDateString("nl-NL")}
    </time>
  );
};
