export default function Popup ({children, open}) {
    return (
        <>
        <section className={`popup ${open ? 'popup__open' : ''}`}>
            {children}
        </section>
        </>
    )
}