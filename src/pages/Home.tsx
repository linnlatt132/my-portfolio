import AboutMe from "../components/AboutMe";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import SkillsList from "../components/SkillsLists";

const Home = () => {
  return (
    <div className="transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 w-full min-h-screen dark:text-white">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-[700px] sm:py-25 py-20">
        {/* Profile */}
        <ProfileBar />

        {/* Nav bar on bottom */}
        <NavBar />

        {/* About Me */}
        <AboutMe />

        {/* Skills */}
        <SkillsList />

        {/* Projects */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi
          soluta corrupti inventore suscipit facilis sequi ea neque voluptate
          ipsa consequuntur iste enim, fugit excepturi! Voluptas magni itaque
          temporibus necessitatibus. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quas ipsum exercitationem quae ad cum. Officiis odio
          dolor sequi itaque iure corporis minus. Accusamus quae odit quibusdam
          eos cum, corrupti ex. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Minus ea illo enim quod, dicta, dolore voluptates,
          quaerat repudiandae molestiae odit corrupti. Blanditiis alias ad
          voluptatem laudantium repudiandae incidunt. A, eveniet!
        </p>

        {/* Certificates */}
      </div>
    </div>
  );
};

export default Home;
