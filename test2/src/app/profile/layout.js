export default function ProfileLayout({ children }) {
    return (
      <div>
        <div className="row">
            <h3>Profile header</h3>
            
        </div>
        {children}
        <div className="row">
            <h3>Profile footer</h3>
        </div>
      </div>
    )
  }