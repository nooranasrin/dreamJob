export const PrimaryButton: React.FC<{ text: string; styles?: string }> = ({
  text,
  styles,
}): JSX.Element => {
  return (
    <button
      className={`${styles} rounded-3xl bg-blue-500 w-28 text-white h-10`}>
      {text}
    </button>
  );
};

export const SecondaryButton: React.FC<{ text: string; styles?: string }> = ({
  text,
  styles,
}): JSX.Element => {
  return (
    <button
      className={`${styles} font-normal border-slate-400 border rounded-3xl w-20 px-4 text-slate-500 h-10`}>
      {text}
    </button>
  );
};
