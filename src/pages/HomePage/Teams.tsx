import Image from "../../components/Image";

type MemberProps = {
  img: string;
  name: string;
  role: string;
};

function Member(props: MemberProps) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-7 rounded-2xl bg-white-grey px-11 py-10">
      <Image
        src={props.img}
        alt={`foto ${props.name}`}
        className="size-38 rounded-full object-cover object-center"
      />
      <h3 className="heading-5 text-center text-black">{props.name}</h3>
      <p className="text-center font-sans text-lg leading-7 tracking-[0.36px] text-grey">
        {props.role}
      </p>
    </div>
  );
}

export default function Teams() {
  return (
    <div className="flex w-full flex-col items-center gap-20 px-25 py-18">
      <h2 className="heading-1 text-black">Meet Our Teams</h2>
      <div className="grid grid-cols-4 items-center gap-7">
        <Member
          img="/MemberPlaceholder.png"
          name="Adam Akmal"
          role="Back End Developer"
        />
        <Member
          img="/MemberPlaceholder.png"
          name="Dino Ananda"
          role="Full Stack Developer"
        />
        <Member
          img="/MemberPlaceholder.png"
          name="Raffli Firmansyah"
          role="Front End Developer & UI/UX Designer"
        />
        <Member
          img="/MemberPlaceholder.png"
          name="Mathew Geraldo"
          role="Front End Developer"
        />
      </div>
    </div>
  );
}
