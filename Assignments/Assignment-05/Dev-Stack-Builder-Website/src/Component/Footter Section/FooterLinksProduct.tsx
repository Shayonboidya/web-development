
import { Companys, Legals, Products } from "./ProductLinks";

const FooterLinksProduct = () => {
    const linkGroups = [
        { title: "Products", links: Products },
        { title: "Company", links: Companys },
        { title: "Legal", links: Legals },
    ];

    return (
        <section className="col-span-1 grid min-w-0 grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:gap-8 sm:p-5 md:col-span-2 lg:col-span-3 lg:grid-cols-3 lg:gap-6">

            {linkGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                    <h2 className="mb-4 text-base font-bold text-gray-900 sm:text-lg">
                        {group.title}
                    </h2>

                    <ul className="flex flex-col items-start gap-3">
                        {group.links.map((link: string) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="warp-break-words text-sm text-gray-500 transition-colors duration-200 hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:text-base"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </section>
    );
};

export default FooterLinksProduct;
