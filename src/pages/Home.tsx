import { Link } from "react-router"
import heroImg from "../assets/HeroImg.jpg"
import reactImg from "../assets/react-js.png"
import zwiftImg from "../assets/zwift.jpg"
import { useRef } from "react"

export function Home() {

    const functionSectionRef = useRef<HTMLElement | null>(null)

    function scrollToSection() {
        const el = functionSectionRef.current

        if (!el) return

        el.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className="site-wrapper">
            <section className="hero">
                <img src={heroImg} alt="" />
                <div className="hero-text">
                    <h1>Bereit für dein nächstes Workout?</h1>
                    <button onClick={scrollToSection}>Funktionen entdecken</button>
                </div>
            </section>
            <section className="functions">

            </section>
            <section className="section-wrapper">
                <div className="img-wrapper">
                    <img src={reactImg} alt="" />
                </div>
                <div className="text">
                    <h2>React Konzepte</h2>
                    <ul>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useRef</li>
                        <li>props und callback props</li>
                        <li>Router</li>
                        <li>Redux (createSlice & createStore, reducers)</li>
                        <li>custom utils & hooks</li>
                    </ul>
                </div>
            </section>
            <section ref={functionSectionRef} className="section-wrapper">
                <div className="text">
                    <h2>Funktionen</h2>
                    <ul>
                        <li>Zonen anzeigen</li>
                        <li>Workout erstellen</li>
                    </ul>
                    <Link className="btn-link" to="/dashboard">zum Dashboard ➔</Link>
                </div>
                <div className="img-wrapper">
                    <img src={zwiftImg} alt="" />
                </div>
            </section>
        </div>
    )
} 