
function Layout({ title, children }) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default Layout;
