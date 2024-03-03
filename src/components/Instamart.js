import { useState } from "react"

const Section = ({ title, description, isVisible, SetVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="text-3xl">{title}</h3>
            <button className="cursor-pointer underline" onClick={() => {
                isVisible ? SetVisible(false) : SetVisible(true)
            }}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <p class>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState('about');
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={"Instamart is your one-stop solution for convenient and efficient grocery shopping. We strive to provide a seamless experience, offering a wide range of high-quality products at your fingertips. Our mission is to simplify your life by delivering fresh, wholesome groceries straight to your doorstep. Explore our diverse selection, user-friendly platform, and reliable delivery services that make grocery shopping a breeze."}
                isVisible={visibleSection === 'about'}
                SetVisible={() => setVisibleSection("about")}
            />
            <Section
                title={"Our Commitment to Quality"}
                description={"At Instamart, we prioritize the quality and freshness of our products. We source directly from trusted suppliers and local farmers to ensure that you receive the best groceries every time. Our commitment to quality extends to every aspect of your shopping experience, from the moment you browse our online store to the delivery of your order. Experience the difference with Instamart, where quality is never compromised."}
                isVisible={visibleSection === 'commitment'}
                SetVisible={() => setVisibleSection("commitment")}
            />
            <Section
                title={"Sustainable Practices"}
                description={"We care about the environment and are dedicated to sustainable business practices. Instamart is committed to reducing its carbon footprint by implementing eco-friendly packaging and supporting environmentally conscious initiatives. Join us in making a positive impact on the planet while enjoying the convenience of online grocery shopping. Together, we can contribute to a greener, healthier future."}
                isVisible={visibleSection === 'practices'}
                SetVisible={() => setVisibleSection("practices")}
            />

        </div>
    )
}

export default Instamart; 