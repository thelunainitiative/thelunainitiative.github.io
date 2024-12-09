import Image from "next/image";
import WhiteLogo from "@/../public/images/white_logo.png";
import { LunaButton } from "@/components/ui/Buttons";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center bg-luna-blue">
        <div className="w-fit mt-12">
          <Image
            src={WhiteLogo}
            alt="Luna logo white"
            width={560}
          />
        </div>
        <div className="w-fit mt-10 mb-16">
          <Link href="" className="w-fit">
            <LunaButton
              text="ABOUT US"
              className="text-luna-beige outline-luna-beige outline outline-2 py-1 px-6 rounded-sm font-bold text-xl"
            />
          </Link>
        </div>
        <div className="mb-10 w-9/12">
          <p className="text-luna-beige text-lg px-5 leading-tight text-center">
            Addressing period poverty in the UK is essential for promoting
            health, education, and gender equality. Many people face financial
            barriers that prevent them from accessing necessary menstrual
            products, leading to negative health outcomes, increased absenteeism
            from school and work, and a detrimental impact on overall wellbeing.
          </p>
        </div>
      </section>
      <section className="bg-luna-beige text-luna-blue grid grid-cols-2 gap-x-9 px-5 py-12 leading-tight">
        <div>
          <h3 className="text-2xl font-bold mb-5">I. MISSION</h3>
          <p>
            The Luna Initiative is dedicated to combating period poverty by
            providing accessible menstrual products and raising awareness about
            menstrual health. We empower people to manage their periods with
            dignity and confidence, contributing to a society where no one is
            held back by the challenges of period poverty.
          </p>
        </div>
        <div className="text-right mt-20">
          <h3 className="text-2xl font-bold mb-5">II. VISION</h3>
          <p>
            Our vision is a world where period poverty is eradicated, and
            everyone has equal access to menstrual products and education. We
            strive to contribute to a society that celebrates menstruation as a
            natural aspect of life, free from stigma and barriers, ensuring that
            all individuals can thrive without the limitations imposed by lack
            of access to menstrual products.
          </p>
        </div>
      </section>
      <section className="bg-luna-blue text-luna-beige p-5">
        <h3 className="text-2xl font-bold my-4">Want to get in touch?</h3>
        <p className="my-4">Email us at: thelunainitiative@gmail.com</p>
      </section>
    </div>
  );
}
