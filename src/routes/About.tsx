import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import List from "../components/ui/List";

function About() {
    return (
        <>
            <Helmet>
                <title>À Propos</title>
                <meta
                    name="description"
                    content="Page d'accueil de Julien Coindet de son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="" />
            </Helmet>
            <Section color="main-3" end>
                <div className="center padding">
                    <h1 className="XXL padding">À Propos</h1>
                    <p className="padding">
                        Ultraordinaire.fr est le site de Julien Coindet, et à
                        été réalisé par MAT06mat.
                    </p>
                </div>
            </Section>
            <Section color="main-2" noPadding>
                <h1 className="complementary">Sources et Infos</h1>
                <div className="cols no-align">
                    <List
                        title="Podcasts :"
                        items={[
                            <>Dans la tête d’un coureur</>,
                            <>La bande à Distance +</>,
                            <>Course épique</>,
                            <>Dans mon bain de Mathieu Blanchard sur spotify</>,
                            <>
                                Secret d’endurance Eric Lacroix et Hugo Ferrari
                            </>,
                        ]}
                    />
                    <List
                        title="Chaînes Youtube :"
                        items={[
                            <>Mike Horne</>,
                            <>François d’haene</>,
                            <>Kilian Jornet</>,
                            <>Mathieu Blanchard</>,
                            <>Courtnet Dauwalter</>,
                            <>Sissi Cussot</>,
                        ]}
                    />
                    <List
                        title="Livres & articles :"
                        items={[
                            <>Kilian jornet</>,
                            <>Mathieu Blanchard</>,
                            <>La préparation physique</>,
                            <>Eric Lacroix</>,
                            <>La clinique du coureur</>,
                            <>Le Grand Raid de Eric Lacroix</>,
                            <>Moins courir Mieux courir</>,
                        ]}
                    />
                </div>
            </Section>
            <Section color="secondary">
                <h2>SUIVRE MES AVENTURES</h2>
                <h1>
                    Les <span className="complementary">réseaux</span> sociaux
                    de Julien
                </h1>
                <div className="cols padding">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            </Section>
            <Section>
                <h1>Partenariat Réseau Entreprise</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati laborum porro reiciendis tempora quod, laboriosam
                    vero tempore! Perferendis ipsam facilis dicta id.
                    Perspiciatis quisquam modi quasi alias iure eligendi ipsa
                    dicta adipisci et? Error repellat saepe quos at fugit dolor
                    odio amet eligendi ut alias aperiam repudiandae animi sunt
                    exercitationem perferendis, minima hic non ducimus! Enim
                    tempora nam sunt, alias dolorem error esse. Consequuntur
                    optio assumenda sunt adipisci, necessitatibus saepe
                    voluptatem atque modi repudiandae ea corrupti quos culpa
                    architecto consectetur! Perferendis illo placeat molestias
                    quia laudantium aperiam totam. Ipsam provident
                    necessitatibus, sunt explicabo earum ducimus voluptas veniam
                    asperiores facilis qui natus sapiente reiciendis dignissimos
                    fugit quos nulla et iste doloribus, totam temporibus
                    laudantium quam excepturi? Reiciendis nisi amet eos eius
                    velit. Natus modi placeat, veniam nam nulla et eos dicta
                    eius ducimus nihil eveniet alias, doloremque voluptatibus
                    itaque, fugit ullam ad! Incidunt dolore hic amet, tenetur,
                    aspernatur mollitia aliquam dignissimos ut quos est illo
                    reiciendis fuga voluptatibus quia eos blanditiis tempore
                    esse nihil! Est magni hic a voluptate? Suscipit delectus
                    velit laborum facilis. Officiis delectus illum ducimus
                    aspernatur! Vitae ullam nobis iusto impedit asperiores
                    inventore excepturi quidem numquam beatae blanditiis quaerat
                    voluptatem quod, cumque sit, debitis dignissimos recusandae?
                    Velit non facere necessitatibus. Illum facere magni
                    excepturi, blanditiis doloribus beatae minima adipisci,
                    autem repellat libero quo mollitia at, vero non aut
                    dignissimos porro! Pariatur, cumque, nulla voluptates sit
                    quibusdam cupiditate sapiente, repellat fugiat obcaecati
                    alias officia at ipsa commodi architecto omnis in.
                    Consequuntur molestias animi eius corporis accusamus eos
                    natus eum, quam sed quod quidem corrupti deserunt vel
                    placeat architecto similique cupiditate eligendi itaque
                    minus non laboriosam! Veritatis, hic? Ab exercitationem odio
                    reprehenderit dolorem, in amet neque alias voluptatem eos
                    repellat? Aliquid deleniti beatae praesentium cupiditate
                    similique sequi neque. Soluta nobis sunt eligendi
                    accusantium! Dolores dolore explicabo libero odit assumenda
                    asperiores, quisquam atque laudantium sed maiores quos
                    officia amet exercitationem error ut illo ab doloribus
                    aperiam sequi nam minus? Doloremque molestiae corrupti ipsa
                    eaque laboriosam sint vel enim. Culpa hic itaque mollitia
                    similique dignissimos expedita quisquam perspiciatis,
                    dolorem dolores laboriosam numquam suscipit obcaecati ipsum
                    porro earum quod deleniti nobis? Laborum, provident aliquid
                    nulla autem aperiam, perferendis ullam necessitatibus
                    inventore ipsam consequatur harum odit alias. Sed dolorem
                    reprehenderit accusamus sequi aspernatur delectus rem
                    deleniti incidunt laudantium, nostrum nesciunt aperiam nihil
                    omnis totam aut molestias amet quasi officiis sunt corrupti
                    error velit distinctio et corporis? Quod magni quia totam,
                    ad dolor laboriosam et consequatur sint quis? Repudiandae
                    dolorem sint corrupti quod deserunt hic explicabo distinctio
                    tempora ratione pariatur quibusdam, temporibus quaerat!
                    Eligendi voluptatum ducimus ex molestiae sit dignissimos
                    eaque eius praesentium pariatur. Iusto sunt quos eius
                    accusamus quis est saepe explicabo laboriosam soluta quod
                    nemo exercitationem, omnis ratione architecto recusandae
                    ipsum iure inventore quisquam amet temporibus aliquam
                    reprehenderit sequi! Inventore cum sed libero tempora, ad
                    laborum vel ut repudiandae rerum maiores in omnis dicta
                    repellat voluptatum reprehenderit iusto quidem totam vero
                    nesciunt, exercitationem doloribus sit eaque maxime.
                    Consequuntur impedit, neque ipsam, tempora fugit quo sequi
                    ratione vero itaque beatae, tenetur veniam sapiente minus!
                </p>
            </Section>
        </>
    );
}

export default About;
