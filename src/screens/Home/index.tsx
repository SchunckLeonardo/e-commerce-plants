import { Cactus, Leaf, PottedPlant } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { SectionWhyChooseUs, PerfectChoice, WhyChoose, Qualities, Quality } from "./styles";

export function Home() {
  return (
    <main>
      <Header />
      <SectionWhyChooseUs>
        <PerfectChoice>
          <img src="/images/whychooseus.jpg" />
        </PerfectChoice>
        <WhyChoose>
          <h3>Why choose us ?</h3>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley.</p>
          <Qualities>
            <Quality>
              <PottedPlant className="icon" weight="thin" />
              <div>
                <h4>Hand Planted</h4>
                <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
            </Quality>
            <Quality>
              <Cactus className="icon" weight="thin" />
              <div>
                <h4>Natural Sunlight</h4>
                <p>It is a long established fact that a reader will be distracted by the reable content of a page.</p>
              </div>
            </Quality>
            <Quality>
              <Leaf className="icon" weight="thin" />
              <div>
                <h4>Clean Air</h4>
                <p>There are many variations of passages of lorem ipsum available, but the majority have suffered.
                </p>
              </div>
            </Quality>
          </Qualities>
        </WhyChoose>
      </SectionWhyChooseUs>
    </main>
  )
}
