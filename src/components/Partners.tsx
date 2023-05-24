import type { Partner } from "../utils/fetchCache";

export default function Partners(props: { partners: Partner[] }) {
  if (props.partners.length > 0) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <h2 className="text-4xl font-xxix select-none max-sm:text-3xl">
            PARTNERS
          </h2>
        </div>
        <div className="flex gap-8 overflow-x-scroll max-sm:-mx-8 flex-wrap max-sm:flex-nowrap">
          {props.partners.map((partner) => (
            <a href={partner.url}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 max-sm:first:pl-8 max-sm:last:pr-8"
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
