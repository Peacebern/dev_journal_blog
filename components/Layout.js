export default function Layout({ children }) {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Dev Journal</h1>
        {children} 
      </div>
      
    );
  }
  