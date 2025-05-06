import vector from "../assets/Vector.png";
import vectorTwo from "../assets/vectorTwo.png";
import vectorThree from "../assets/vectorThree.png";
import vectorFour from "../assets/vectorFour.png";

const achievements = [
  {
    image: vector,
    title: "2,245,341",
    text: "Members",
  },
  {
    image: vectorTwo,
    title: "46,328",
    text: "Clubs",
  },
  {
    image: vectorThree,
    title: "828,867",
    text: "Event Bookings",
  },
  {
    image: vectorFour,
    title: "1,926,436",
    text: "Payments",
  },
];

function Achievement() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Heading Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[#4d4d4d] text-[28px] sm:text-[36px] md:text-[40px] font-bold">
            Helping a local <br />
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h1>
          <p className="text-[#717171] text-sm mt-4 max-w-md mx-auto lg:mx-0">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2 mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 text-center sm:text-left"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-[24px] font-bold text-[#4d4d4d]">
                  {achievement.title}
                </h1>
                <p className="text-sm text-[#717171]">{achievement.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
