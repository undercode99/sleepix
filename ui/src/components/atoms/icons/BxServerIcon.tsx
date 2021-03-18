function BxServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        d="M4 15v4h16.002L20 15H4zm12 3h-2v-2h2v2zm3 0h-2v-2h2v2zM4 5v4h16.002L20 5H4zm12 3h-2V6h2v2zm3 0h-2V6h2v2z"
      />
      <path d="M20 3H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 9V5h16l.002 4H4zm16 4H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zM4 19v-4h16l.002 4H4z" />
      <path d="M17 6h2v2h-2zm-3 0h2v2h-2zm3 10h2v2h-2zm-3 0h2v2h-2z" />
    </svg>
  );
}

export default BxServerIcon;
