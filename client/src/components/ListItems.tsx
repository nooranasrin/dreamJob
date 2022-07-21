const ListItems: React.FC<{ items: [string] }> = ({ items }): JSX.Element => {
  const listItems = items.map((item: string, index: number) => (
    <li key={index}>{item}</li>
  ));

  return (
    <ul className='text-sm font-normal text-slate-500 px-3 list-disc'>
      {listItems}
    </ul>
  );
};

export default ListItems;
