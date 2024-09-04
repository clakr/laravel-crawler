export default function ({ children, ...rest }) {
  return (
    <nav
      className="border-b border-neutral-200 bg-neutral-50 sticky top-0"
      {...rest}
    >
      <div className="p-4 max-w-screen-xl mx-auto">{children}</div>
    </nav>
  );
}
