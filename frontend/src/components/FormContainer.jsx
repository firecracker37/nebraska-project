export default function FormContainer({ children }) {
    return (
      <div className="flex mt-12 justify-center h-screen">
        <div className="w-full lg:w-auto lg:min-w-[640px]">
          <div className="bg-gray-300 rounded p-6">{children}</div>
        </div>
      </div>
    );
  }
  