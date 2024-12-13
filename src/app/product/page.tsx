import Image from "next/image";
import ProductSide from "@/../public/images/product_side.jpg";
import ProductZoom from "@/../public/images/product_zoom.jpg";

export default function ProductPage() {
  return (
    <div className="bg-luna-beige">
      <div className="flex flex-col items-center pt-2 pb-20">
        <main className="text-luna-blue text-center mb-14 flex flex-col items-center">
          <h1 className="font-bold text-3xl mt-6 mb-12">THE PRODUCT</h1>
          <div className="leading-none flex flex-col gap-y-4 w-10/12 md:w-1/2">
            <p>
              By installing menstrual product dispensers in at the sites of
              various organisations, we ensure that individuals have easy access
              to essential menstrual supplies. Our unique approach includes a
              commitment to donate one menstrual product for every product we
              supply.
            </p>
            <p>
              This not only helps to meet the immediate needs of those facing
              financial barriers but also fosters a culture of support and
              awareness around menstrual health.
            </p>
            <p>
              By partnering with organisations, we aim to create a sustainable
              solution that empowers individuals to manage their periods with
              dignity and confidence, ultimately working towards the eradication
              of period poverty in the UK.
            </p>
          </div>
        </main>
        <div className="flex flex-col gap-y-9 items-center">
          <Image src={ProductSide} alt="luna product" className="w-3/4 md:w-[400px]"/>
          <Image src={ProductZoom} alt="luna product" className="w-3/4 md:w-[400px]" />
        </div>
      </div>
    </div>
  );
}
