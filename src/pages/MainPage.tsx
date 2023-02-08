import Development from "../components/Development";
import Stacks from "../components/Stacks";
import UserSection from "../components/UserSection";

const MainPage = () => {
  return (
    <div className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <UserSection />

      <Stacks />
      
      <Development />
    </div>
  );
};

export default MainPage;
