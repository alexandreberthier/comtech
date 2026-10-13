import { Link } from "react-router"
import { useRef, useState } from "react"
import heroImg from "../assets/HeroImg.jpg"
import reactImg from "../assets/react-js.png"
import zwiftImg from "../assets/zwift.jpg"
import dashboardCode from "./Dashboard.tsx?raw"
import workoutFormCode from "../components/WorkoutGeneratorForm/WorkoutGeneratorForm.tsx?raw"
import workoutSliceCode from "../store/workoutSlice.ts?raw"
import useWorkout from "../hooks/useWorkout.ts?raw"
import scrollToTopCode from "../components/ScrollToTop.tsx?raw"
import navbarCode from "../components/Navbar/Navbar.tsx?raw"
import storeCode from "../store/store.ts?raw"
import generatePowerZonesCode from "../utils/generatePowerZones?raw"
import { CodeModal } from "../components/Modal/Modal"

interface SelectedCode {
    title: string
    code: string
}

export function Home() {
    const functionSectionRef = useRef<HTMLElement | null>(null)

    const [selectedCode, setSelectedCode] =
        useState<SelectedCode | null>(null)

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

                    <button onClick={scrollToSection}>
                        Funktionen entdecken
                    </button>
                </div>
            </section>

            <section className="functions">
            </section>

            <section className="section-wrapper">
                <div className="img-wrapper">
                    <img src={reactImg} alt="React Logo" />
                </div>

                <div className="text">
                    <h2>React Konzepte</h2>

                    <ul className="concept-list">
                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "WorkoutGeneratorForm.tsx",
                                        code: workoutFormCode
                                    })
                                }
                            >
                                Props und Callback Props, State
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "workoutSlice.ts",
                                        code: workoutSliceCode
                                    })
                                }
                            >
                                Redux Toolkit
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "store.ts",
                                        code: storeCode
                                    })
                                }
                            >
                                Store
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "useWorkout.ts",
                                        code: useWorkout
                                    })
                                }
                            >
                                Custom Hooks
                            </button>
                        </li>

                                <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "generatePowerZones.ts",
                                        code: generatePowerZonesCode
                                    })
                                }
                            >
                                Custom utils
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "Dashboard.tsx",
                                        code: dashboardCode
                                    })
                                }
                            >
                                Custom Components verwenden
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "Navbar.tsx",
                                        code: navbarCode
                                    })
                                }
                            >
                                Router
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    setSelectedCode({
                                        title: "ScrollToTop.tsx",
                                        code: scrollToTopCode
                                    })
                                }
                            >
                                useEffect
                            </button>
                        </li>
                    </ul>
                </div>
            </section>

            <section
                ref={functionSectionRef}
                className="section-wrapper"
            >
                <div className="text">
                    <h2>Funktionen</h2>

                    <ul>
                        <li>Zonen anzeigen</li>
                        <li>Workout erstellen</li>
                        <li>Workouts speichern</li>
                        <li>Workouts löschen</li>
                    </ul>

                    <Link
                        className="btn-link"
                        to="/dashboard"
                    >
                        zum Dashboard ➔
                    </Link>
                </div>

                <div className="img-wrapper">
                    <img src={zwiftImg} alt="Workout Visualisierung" />
                </div>
            </section>

            {selectedCode && (
                <CodeModal
                    title={selectedCode.title}
                    code={selectedCode.code}
                    onClose={() => setSelectedCode(null)}
                />
            )}
        </div>
    )
}