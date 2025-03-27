import { LuMail, LuPhone } from "react-icons/lu";

export default function ContactUs() {
  const contactdetails = [
    {
      id: 1,
      icon: <LuMail />,
      title: "Email",
      description: "Our friendly team is here to help.",
      link: "info@devtechfusion.com",
    },
    {
      id: 2,
      icon: <LuPhone />,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      link: "+1 (555) 000-0000",
    },
  ];

  return (
    <section className="font-['SatoshiVariable'] w-full py-20 px-4 sm:px-6 md:px-12 lg:px-5 rounded-4xl">
      <div className="w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto flex flex-col items-top justify-center lg:flex-row gap-12">
        <div>
          <h2 className="text-2xl text-center lg:text-left sm:text-4xl md:text-3xl 2xl:text-4xl font-bold text-gray-800">
            Get in touch with our team
          </h2>
          <p className="text-gray-600 text-center lg:text-left mt-2 text-sm sm:text-base">
            We'd love to hear from you. Please fill out this form or shoot us an email.
          </p>

          <div className="mt-6 flex flex-col space-y-6">
            {contactdetails.map((contact) => (
              <div key={contact.id} className="flex items-center space-x-4">
                <span className="text-[#211951] text-xl sm:text-2xl">{contact.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{contact.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{contact.description}</p>
                  <a href={`mailto:${contact.link}`} className="text-[#211951] font-semibold">
                    {contact.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white xl:w-1/2 2xl:w-2/5 p-5 sm:p-5 rounded-lg shadow-md w-full">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First name</label>
                <input type="text" className="w-full sm:p-1 xl:p-2 border rounded mt-1" placeholder="First name" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last name</label>
                <input type="text" className="w-full sm:p-1 xl:p-2 border rounded mt-1" placeholder="Last name" />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" className="w-full sm:p-1 xl:p-2 border rounded mt-1" placeholder="you@company.com" />
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Message</label>
              <textarea className="w-full sm:p-1 xl:p-2 border rounded mt-1" rows="4" placeholder="Write your message..."></textarea>
            </div>

            <div className="mt-4 flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                You agree to our friendly <a href="#" className="text-[#211951]">privacy policy</a>.
              </label>
            </div>

            <button className="w-full bg-[#211951] text-white py-2 mt-4 rounded hover:bg-[#191241] transition">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
