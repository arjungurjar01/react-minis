import Card from "../components/Card";
import Home from "../components/Home";
import { projectDetails } from '../Utils';


function HomePage() {
  return (
    <div className='bg-[#171717]  h-screen w-full'>
             <Home/>
        <div className="flex sm:flex-row flex-col  w-full h-screen bg-[#f1f1f1]">
        <div className="px-2 sm:mb-10 sm:gap-y-4 mx-auto place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl  mb-1">
          {projectDetails.map(({ name, description ,routeLinkName }) => (
            <Card
              key={name}
              name={name}
              description={description}
              routeLinkName={routeLinkName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
