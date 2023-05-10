export default function Button(props: { href: string; children: string }) {
  return (
    <a
      href={props.href}
      draggable={false}
      className="text-white w-min h-fit whitespace-nowrap cursor-pointer select-none px-8 py-3 cut-corners from-blue to-purple bg-gradient-to-r"
    >
      {props.children}
    </a>
  );
}
