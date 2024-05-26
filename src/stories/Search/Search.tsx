export type SearchTypes = {
  inputPlaceholder?: string;
  buttonLabel: string;
  backgroundColor?: string;
};

export default function Search({
  inputPlaceholder = '',
  buttonLabel,
  backgroundColor = '',
}: SearchTypes) {
  return (
    <div className='space-x-3'>
      <input type='text' className='p-2 rounded-lg' placeholder={inputPlaceholder} />
      <button
        type='submit'
        className='p-2 rounded-lg hover:underline'
        style={{ backgroundColor: backgroundColor }}>
        {buttonLabel}
      </button>
    </div>
  );
}
