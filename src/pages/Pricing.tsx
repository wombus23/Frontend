import { Button } from "@/components/ui/button";
import { DefaultLayout } from "@/layouts";

const _features = [
  {
    title: "Free Plan",
    description: "Access to Basic version of Qanoon Bot.",
    priceUSD: 0,
    features: [
      "Basic case solving",
      "Basic email support",
      "Authentication services",
    ],
    children: (
      <Button variant="default" className="rounded-full w-full">
        Get Started...
      </Button>
    ),
  },
  {
    title: "Premium",
    description:
      "Complete access with Real-Time  Consultation with a  professional Lawyer",
    priceUSD: 30,
    features: [
      "Extensive case study",
      "Real-Time chat with a Lawyer via video call.",
      "Important document delivery",
      "Video content related to case",
    ],
    children: (
      <Button variant={"orange"} className="rounded-full max-w-[100px] mx-auto">
        Buy Now
      </Button>
    ),
  },
];

const Pricing = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 min-h-[calc(100dvh-72px)] flex flex-col items-center text-center lg:text-left gap-1">
        <h1 className="text-[32px] font-medium opacity-60">
          Chose Qanoon Bot’s Plan that suits you best.
        </h1>
        <p className="font-medium text-[13px] opacity-40">
          Crafted with a thoughtful focus on user’s needs and preferences.
        </p>
        <div className="flex flex-col lg:flex-row gap-[48px] mt-20">
          {_features.map((_feature) => {
            return (
              <PricingCard
                title={_feature.title}
                description={_feature.description}
                priceUSD={_feature.priceUSD}
                features={_feature.features}
              >
                {_feature.children}
              </PricingCard>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

type PricingCardProps = {
  title: string;
  description: string;
  priceUSD: number;
  features: string[];
  children?: React.ReactNode;
};

const PricingCard = ({
  title,
  description,
  priceUSD,
  features,
  children,
}: PricingCardProps) => {
  return (
    <div className="p-4 border-[0.75px] border-white rounded-2xl bg-card flex flex-col gap-3 max-w-[240px]">
      <div className="">
        <h4 className="text-[32px] font-medium">{title}</h4>
        <p className="font-normal text-[13px] opacity-50">{description}</p>
      </div>
      <div className="flex gap-1 items-end">
        <h5 className="text-[32px] font-bold font-overpass leading-0">{`$${priceUSD}`}</h5>
        <p className="font-normal text-[13px] opacity-50 mb-3">per month</p>
      </div>
      <ul className="space-y-2 mb-auto">
        {features.map((feature) => {
          return <Feature>{feature}</Feature>;
        })}
      </ul>
      {children}
    </div>
  );
};

const Feature = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center gap-2">
      <Icon />
      <p className="font-normal text-[13px] opacity-50">{children}</p>
    </li>
  );
};

const Icon = () => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.881638 5.75059C0.881638 4.24325 1.49915 2.79764 2.59833 1.73178C3.69751 0.665929 5.18832 0.0671387 6.74279 0.0671387C8.29727 0.0671387 9.78808 0.665929 10.8873 1.73178C11.9864 2.79764 12.6039 4.24325 12.6039 5.75059C12.6039 7.25794 11.9864 8.70355 10.8873 9.7694C9.78808 10.8353 8.29727 11.434 6.74279 11.434C5.18832 11.434 3.69751 10.8353 2.59833 9.7694C1.49915 8.70355 0.881638 7.25794 0.881638 5.75059ZM5.10984 7.1341C5.82911 7.71518 6.88215 7.60872 7.47056 6.89544L9.52993 4.39904C9.66833 4.23127 9.64067 3.9823 9.46883 3.84899C9.30414 3.72124 9.06775 3.74748 8.93508 3.90823L7.138 6.08576C6.67145 6.65109 5.8367 6.73538 5.26655 6.27473L4.54705 5.69341C4.38582 5.56315 4.15027 5.58456 4.01518 5.74175C3.87416 5.90585 3.89673 6.15405 4.06503 6.29002L5.10984 7.1341Z"
        fill="white"
      />
    </svg>
  );
};

export default Pricing;
