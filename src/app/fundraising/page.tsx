import Image from "next/image";
import SchrodersTeam from "@/../public/images/schroders_team_pic.png";

export default function FundraisingPage() {
  return (
    <div>
      <section className="pt-2 pb-14 bg-luna-beige text-luna-blue">
        <div className="text-center flex flex-col items-center px-8">
          <h1 className="font-bold text-3xl mt-6 mb-12">CURRENT FUNDRAISING</h1>
          <div className="leading-none flex flex-col gap-y-4 md:w-1/2">
            <p>
              Period poverty significantly impacts the health, education, and
              dignity of individuals who menstruate, often resulting in missed
              school days and decreased productivity. By engaging in fundraising
              efforts, we can develop and distribute affordable menstrual
              products and implement educational programmes to raise awareness
              about menstrual health. Additionally, fundraising enables us to
              invest in partnerships with local communities and organisations,
              fostering a more comprehensive approach to addressing the complex
              challenges associated with period poverty.
            </p>
            <p>
              We are currently preparing for a myriad of events this year. From
              hosting fundraisers to attending accelerator events, we have big
              plans for the year. Keep an eye on our socials for updates!
            </p>
          </div>
        </div>
      </section>
      <section className="pt-7 bg-luna-blue text-luna-beige">
        <div className="text-center flex flex-col items-center px-8">
          <h1 className="font-bold text-3xl mt-6 mb-12">PAST EVENTS</h1>
          <div className="leading-none flex flex-col gap-y-4 md:w-1/2">
            <p>
              Enactus partner, Sodexo Stop Hunger Foundation, has recognized
              LUNA as a project with tremendous potential. This additional
              support and funding will undoubtedly enhance our efforts, enabling
              us to make an impact on addressing period poverty among girls in
              our community. Grateful for the continued support as we work
              towards creating positive change.
            </p>
            <p>
              We were the winners of the Enactus UK & Ireland Regional Impact
              Accelerators, securing funding from Schroders on November 24,
              2023. The funds will propel the Luna Initiative’s research and
              product development!
            </p>
            <p>
              Hats off to our incredible team - Jiya Imran, Esther Lo, Karenshia
              Wijaya, Tricia Teo, and Mariyah — who brilliantly pitched Luna’s
              innovative solution to period poverty. Team Luna’s creativity and
              dedication stood out, earning us the judges’ and Schroders’
              confidence to use the funding for positive change.
            </p>
          </div>
          <div className="w-fit mx-auto my-10">
            <Image src={SchrodersTeam} className="w-64 md:w-400" alt="luna team" />
          </div>
        </div>
      </section>
    </div>
  );
}
