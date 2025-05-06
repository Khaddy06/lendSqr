import Logo from "../assets/Logo.png";
import LogoOne from "../assets/logoOne.png";
import LogoTwo from "../assets/logoTwo.png";
import LogoThree from "../assets/logoThree.png";
import LogoFour from "../assets/logoSix.png";
import LogoFive from "../assets/logoFour.png";
import LogoSeven from "../assets/logoSeven.png";
import LogoEight from "../assets/logoEight.png";
import LogoNine from "../assets/logoNine.png";
import image from "../assets/image.png";

const cards = [
  {
    image: LogoSeven,
    title: "MemberShip organization",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: LogoEight,
    title: "National Association",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: LogoNine,
    title: "Clubs and  Groups",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Clients() {
  return (
    <div className="">
      <div className="text-center pt-10 px-4">
        <h1 className="text-3xl sm:text-4xl text-[#4D4D4D] font-semibold">
          Our Clients
        </h1>
        <p className="text-[#717171] text-[16px] sm:text-xl font-normal">
          We have been working with some fortune 500+ clients
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center items-center mt-10 max-w-7xl mx-auto px-4">
        <img src={Logo} alt="Client Logo" />
        <img src={LogoOne} alt="Client Logo One" />
        <img src={LogoTwo} alt="Client Logo Two" />
        <img src={LogoThree} alt="Client Logo Three" />
        <img src={LogoFour} alt="Client Logo Four" />
        <img src={LogoFive} alt="Client Logo Five" />
        <img src={LogoTwo} alt="Client Logo Two Duplicate" />
      </div>

      <div className="text-center pt-10 px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#4D4D4D] font-semibold">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-[#717171] text-base sm:text-lg font-normal mt-4">
          Who is NexCent suitable for?
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center w-full"
          >
            <img src={card.image} alt={card.title} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-2">
              {card.title}
            </h2>
            <p className="text-[#717171] text-sm">{card.text}</p>
          </div>
        ))}
      </div>

      <section className="pt-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex justify-center md:justify-start">
            <img
              src={image}
              alt="Community Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:w-[500px] font-bold text-[#4D4D4D]">
              The Unseen Of Spending Three Years at Pixelgrade
            </h1>
            <p className="text-[#717171] text-base sm:text-lg font-normal mt-2 max-w-xl mx-auto md:mx-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              quasi quia quaerat sint optio suscipit eligendi rerum provident
              exercitationem enim, pariatur dolorum, ipsum facilis amet in
              quidem fugiat ipsam architecto voluptatum, possimus molestiae?
              Earum magnam quasi molestias obcaecati eos aliquam?
            </p>
            <div className="flex justify-center md:justify-start mt-5">
              <button className="bg-[#4CAF4F] hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients;
