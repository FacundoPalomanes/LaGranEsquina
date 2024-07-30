export default function RootLayout({ children, }: Readonly<{children: React.ReactNode; }>) {
  return (
    <section lang="en">
       <p>layour of root</p>
       {children}
    </section>
  );
}
