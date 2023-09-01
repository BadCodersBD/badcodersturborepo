type Props = {
  children: React.ReactNode;
};

export const FormWrapper = ({ children }: Props) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="mx-2 my-8 max-w-fit rounded-2xl shadow-2xl shadow-gray-400">
        <div className="space-y-4 p-2 bg-zinc-500 rounded-lg text-white sm:p-8 md:space-y-2 lg:space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
};
