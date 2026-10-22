
import FooterCopyRight from "./FooterCopyRight";
import FooterLinksProduct from "./FooterLinksProduct";
import FooterLogoText from "./FooterLogoText";

const Footer = () => {
    return (
        <footer className="container mx-auto mt-8 px-4 py-6 sm:mt-10 sm:px-6 lg:mt-15 lg:px-8">

            <section className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-4">

                {/* Logo section: always visible */}
                <FooterLogoText />

                {/* Links: hidden on mobile */}
                <div className="hidden md:block md:col-span-3">
                    <FooterLinksProduct />
                </div>

            </section>
            <FooterCopyRight></FooterCopyRight>
        </footer>
    );
};

export default Footer;
