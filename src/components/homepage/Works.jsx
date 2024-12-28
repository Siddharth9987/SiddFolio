import ibgroup from "/src/assets/images/retro.png";
import memento from "/src/assets/images/makodevis.png";
import acc from "/src/assets/images/concrete.png";
import daddy from "/src/assets/images/green.png";
import sunnyside from "/src/assets/images/jonas.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://epicstudio.framer.website/"
            img={ibgroup}
            alt="Epic Studio website mockup"
            name="Epic studio website"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • Figma"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://picture.framer.website/"
            img={memento}
            alt="Picture'23 landing page mockup"
            name="Picture studio landing page"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-50">
          <Projects
            link="https://concrete-template.framer.website/?via=ludoviclosco"
            img={acc}
            alt="Concrete project mockup"
            name="Concrete Temp site"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://greenstone.framer.website/"
            img={daddy}
            alt="Greenstone page mockup"
            name="Green Stone Tempo"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://jonas-template.framer.website/"
            img={sunnyside}
            alt="Jonas project mockup"
            name="Jonas'22LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
