type MemberProps = {
  img: string;
  name: string;
  role: string;
};

function Member(props: MemberProps) {
  return (
    <div className="bg-white-grey flex h-full w-full flex-col items-center gap-7 rounded-2xl px-11 py-10">
      <img
        src={props.img}
        alt={`foto ${props.name}`}
        className="size-38 rounded-full object-cover object-center"
      />
      <h3 className="heading-5 text-center text-black">{props.name}</h3>
      <p className="text-grey text-center font-sans text-lg leading-7 tracking-[0.36px]">
        {props.role}
      </p>
    </div>
  );
}

export default function Teams() {
  return (
    <div className="py-18 px-25 flex w-full flex-col items-center gap-20">
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
