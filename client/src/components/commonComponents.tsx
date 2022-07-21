interface ButtonProps {
  text: string;
  styles?: string;
}

interface JobAttributeProps {
  attribute: string;
  value: string;
}

export const PrimaryButton = ({ text, styles }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles} rounded-3xl bg-blue-500 w-28 text-white h-10`}>
      {text}
    </button>
  );
};

export const SecondaryButton = ({ text, styles }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles} font-normal border-slate-400 border rounded-3xl w-20 px-4 text-slate-500 h-10`}>
      {text}
    </button>
  );
};

export const JobAttribute = ({
  attribute,
  value,
}: JobAttributeProps): JSX.Element => (
  <div className='w-60 mb-5'>
    <div>{attribute}</div>
    <div className='font-normal text-sm'>{value}</div>
  </div>
);

export const Title: React.FC<{ title: string }> = ({ title }): JSX.Element => (
  <div className='text-base text-slate-700 mb-2 mt-8'>{title}</div>
);
