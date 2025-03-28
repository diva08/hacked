import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="py-36 px-12 bg-[#172033]">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 text-white">
        Our Story
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5">
          <div className="relative h-[450px] md:h-[550px] w-full rounded-lg shadow-xl overflow-hidden">
            <Image
              src="./founder.png"
              // src="/founder.png"
              alt="Deepshikha Sharma - Founder"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <blockquote className="text-gray-200 text-2xl leading-relaxed">
            <p className="mb-8">
              "As a high school student, I struggled to find real internships and meaningful volunteer
              projects in tech. So I started Hacked—to make sure every driven student can access
              hands-on experience and help close the digital divide"
            </p>
            <footer className="text-blue-300 text-xl font-medium">
              Founder - Deepshikha Sharma
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
