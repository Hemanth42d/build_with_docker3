import TodoInputsSection from "../components/TodoInputsSection";
import TodoSection from "../components/TodoSection";

const MainPage = () => {
  return (
    <>
      <div className="h-full w-full bg-gray-100 flex justify-center items-center gap-1 ">
        <div className="w-1/4  h-full rounded-md">
          <TodoInputsSection />
        </div>
        <div className="w-3/4 h-full bg-amber-100 rounded-md">
          <TodoSection />
        </div>
      </div>
    </>
  );
};

export default MainPage;
