export default function Popup ({children, open}) {
    return (
        <>
        <div>
          <section className={`popup ${open ? 'popup__open' : ''}`}>
            {children}
          </section>
        </div>
        </>
    )
}