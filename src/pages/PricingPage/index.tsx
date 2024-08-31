import { IconCircleCheckFilled } from "@tabler/icons-react";
import { formatRupiah } from "../../libs/format";

type PackageProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
};

function Package(props: PackageProps) {
  return (
    <div className="flex h-full w-full flex-col gap-10 rounded-3xl bg-white-grey p-10 shadow">
      <h3 className="heading-4 text-black">{props.name}</h3>
      <p className="heading-1 text-black">{formatRupiah(props.price)}</p>
      <p className="min-h-36 font-sans text-xl font-normal leading-7 tracking-[0.4px] text-grey">
        {props.description}
      </p>
      <div className="flex flex-col gap-6">
        {props.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <IconCircleCheckFilled className="size-8 text-brand" />
            <p className="font-sans text-xl font-medium leading-7 tracking-[0.4px] text-black">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center gap-24 p-18">
      <div className="flex flex-col items-center gap-3">
        <h2 className="heading-1 text-black">Plans & Pricing</h2>
        <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
          Pay monthly and cancel anytime.
        </p>
      </div>
      <div className="grid w-full grid-cols-3 gap-12">
        <Package
          name="Portfolio Website"
          price={100000}
          description="A streamlined and elegant portfolio site tailored for artists, designers, or freelancers to showcase their work."
          features={[
            "Home Page",
            "Portfolio Section",
            "About Page",
            "Contact Page",
            "Responsive Design",
            "Basic SEO",
            "2-4 Weeks Delivery",
          ]}
        />
        <Package
          name="Business Website"
          price={500000}
          description="A comprehensive business website designed for small to medium-sized enterprises, focusing on brand identity and service offerings."
          features={[
            "Custom Home Page",
            "Service/Product Pages",
            "Blog Section",
            "Contact Page with Map",
            "Advanced SEO",
            "Responsive Design",
            "Basic E-Commerce Integration",
            "4-6 Weeks Delivery",
          ]}
        />
        <Package
          name="Non-Profit Website"
          price={1000000}
          description="A website designed for non-profit organizations to raise awareness, accept donations, and promote events."
          features={[
            "Mission Statement and Goals",
            "Donation System",
            "Event Management",
            "Volunteer Registration",
            "Blog and News",
            "Full SEO",
            "Responsive Design",
            "4-6 Weeks Delivery",
          ]}
        />
        <Package
          name="E-Commerce Website"
          price={1000000}
          description="A robust e-commerce platform for businesses aiming to sell products online, featuring a complete online shopping experience."
          features={[
            "Product Catalog",
            "Shopping Cart and Checkout",
            "Customer Accounts",
            "Payment Integration",
            "Inventory Management",
            "Advanced SEO",
            "Responsive Design",
            "Customer Reviews",
            "6-8 Weeks Delivery",
          ]}
        />
        <Package
          name="Real Estate Website"
          price={1500000}
          description="A property listing platform for real estate agencies, featuring property management and client interaction tools."
          features={[
            "Property Listings",
            "Search and Filters",
            "Agent Profiles",
            "Mortgage Calculator",
            "Lead Capture Forms",
            "Advanced SEO",
            "Responsive Design",
            "8-10 Weeks Delivery",
          ]}
        />
        <Package
          name="Educational Platform"
          price={2000000}
          description="An online learning platform suitable for schools, universities, or independent educators, offering courses and interactive learning tools."
          features={[
            "Course Management",
            "Student Dashboard",
            "Quizzes and Assignments",
            "Payment Integration",
            "Discussion Forums",
            "Video Integration",
            "Responsive Design",
            "Reporting Tools",
            "10-12 Weeks Delivery",
          ]}
        />
        <Package
          name="SaaS Platform"
          price={3000000}
          description="A fully customizable SaaS platform for enterprises, supporting complex functionalities and user management."
          features={[
            "User Dashboard",
            "Subscription Management",
            "API Integration",
            "Data Analytics",
            "High Security",
            "Custom Backend",
            "Ongoing Support",
            "12-16 Weeks Delivery",
          ]}
        />
      </div>
    </div>
  );
}
