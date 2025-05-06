import imageThree from "../assets/imageThree.png";
import LogoNine from "../assets/imageNine.png";
import LogoOne from "../assets/logoOne.png";
import LogoTwo from "../assets/logoTwo.png";
import LogoThree from "../assets/logoThree.png";
import LogoFour from "../assets/logoSix.png";
import LogoFive from "../assets/logoFour.png";
import Right from "../assets/Right.png";

function Customer() {
  return (
    <section className="bg-[#F5F7FA] py-10 px-4">
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imageThree}
            alt="Customer"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-[#717171] mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            dolorum dolor, magni exercitationem maxime eum tempora officia
            nesciunt culpa sequi dolore ducimus facilis. Facilis nobis ipsam
            iste perspiciatis in enim repellendus quas, omnis quibusdam quae
            dolores atque corporis itaque repudiandae esse quia id. Minima nobis
            molestias cupiditate iusto quos et laboriosam adipisci ipsum nostrum
            iste sit esse facere labore rerum facilis a eum commodi corrupti,
            quod ipsam odio! Aliquid odio similique quod? Ipsa, tempore amet!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aut esse quis nulla corrupti aspernatur sint ipsa nemo magnam!
            Obcaecati nobis, delectus, excepturi veritatis architecto quibusdam
            cupiditate, quo tempora quae culpa hic modi. Laudantium, magni.
          </p>

          <h3 className="text-[#4CAF4F] text-lg font-semibold">Tim Smith</h3>
          <p className="text-[#89939E] mb-6">
            British Dragon Boat Racing Association
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <img src={LogoNine} alt="Logo 9" className="w-10 h-auto" />
            <img src={LogoOne} alt="Logo 1" className="w-10 h-auto" />
            <img src={LogoTwo} alt="Logo 2" className="w-10 h-auto" />
            <img src={LogoThree} alt="Logo 3" className="w-10 h-auto" />
            <img src={LogoFour} alt="Logo 4" className="w-10 h-auto" />
            <img src={LogoFive} alt="Logo 5" className="w-10 h-auto" />
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 ">
            <p className="text-[#4CAF4F] text-lg font-semibold">
              Meet all customers
            </p>
            <img src={Right} alt="Arrow" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
