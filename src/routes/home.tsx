import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import TextDropList from "../components/TextDropList";
import TextImage from "../components/TextImage";

function Home() {
    return (
        <>
            <Helmet>
                <title>Ultraordinaire</title>
                <meta
                    name="description"
                    content="Page d'accueil de Julien Coindet de son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="" />
            </Helmet>
            <Section background="panorama.webp" noContainer>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Section>
            <Section color="main-2">
                <TextImage source="766f77b3.jpg" proportion={50}>
                    <h2>PASSIONNÉ D’ULTRA TRAIL, ENSEIGNANT APA, FÉDÉRATEUR</h2>
                    <h1 className="separator padding">
                        BIENVENUE SUR LES 3 SENTIERS DE JULIEN COINDET
                    </h1>
                    <p>
                        Un témoignage d’une vie ultra ordinaire !{" "}
                        <b>Julien Coindet</b> vous invite à le suivre sur les
                        chemins de ses aventures sportives solidaires et de
                        cohésion interprofessionnelle.{" "}
                        <b>Ultra traileur confirmé</b>, il a réussi à mobiliser
                        avec lui plusieurs CHU en embarquant ses collègues, les
                        résidents, les patients et leurs familles sur 2 courses
                        d'ultra distance <b>mondialement connues</b> pour être
                        les plus difficiles au monde : <b>UTMB</b> et{" "}
                        <b>le grand raid de la réunion</b> (la diagonale des
                        fous). <br /> Un dossard solidaire en faveur de la
                        fondation maladies rares… <br />
                        La notion de "sport santé" est une base commune aux 3
                        sentiers développés sur ce site : aventures, réseau,
                        associations. Ce <b>professionnel hospitalier</b>{" "}
                        (diplômé en activité physique adaptée) aux multiples
                        casquettes professionnelles (enseignant/coordinateur
                        APA, formateur, auto-entrepreneur) est{" "}
                        <b>ouvert à toute forme de collaboration</b> autour de
                        ces 3 sentiers.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <TextDropList
                    list={[
                        {
                            title: "Petit paragraphe",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        },
                        {
                            title: "Moyen paragraphe",
                            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit explicabo, suscipit ut dolores aperiam ducimus.
                Porro pariatur provident ipsam voluptates temporibus! Numquam
                laboriosam veritatis repellendus laborum officiis error qui
                cupiditate aperiam ea voluptatum assumenda magnam eaque veniam,
                eum dolore quia quisquam unde nobis, nisi voluptatibus alias.
                Repudiandae adipisci ducimus esse deleniti perspiciatis quaerat
                voluptatibus. Recusandae porro quia dolores, nobis tempore nisi
                veniam maiores cum corporis.`,
                        },
                        {
                            title: "Très long paragraphe",
                            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit explicabo, suscipit ut dolores aperiam ducimus.
                Porro pariatur provident ipsam voluptates temporibus! Numquam
                laboriosam veritatis repellendus laborum officiis error qui
                cupiditate aperiam ea voluptatum assumenda magnam eaque veniam,
                eum dolore quia quisquam unde nobis, nisi voluptatibus alias.
                Repudiandae adipisci ducimus esse deleniti perspiciatis quaerat
                voluptatibus. Recusandae porro quia dolores, nobis tempore nisi
                veniam maiores cum corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit explicabo, suscipit ut dolores aperiam ducimus.
                Porro pariatur provident ipsam voluptates temporibus! Numquam
                laboriosam veritatis repellendus laborum officiis error qui
                cupiditate aperiam ea voluptatum assumenda magnam eaque veniam,
                eum dolore quia quisquam unde nobis, nisi voluptatibus alias.
                Repudiandae adipisci ducimus esse deleniti perspiciatis quaerat
                voluptatibus. Recusandae porro quia dolores, nobis tempore nisi
                veniam maiores cum corporis.`,
                        },
                    ]}
                />
            </Section>
            <Section color="secondary">
                <h1 className="center">FAQ</h1>
                <p className="text-cols">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit explicabo, suscipit ut dolores aperiam
                    ducimus. Porro pariatur provident ipsam voluptates
                    temporibus! Numquam laboriosam veritatis repellendus laborum
                    officiis error qui cupiditate aperiam ea voluptatum
                    assumenda magnam eaque veniam, eum dolore quia quisquam unde
                    nobis, nisi voluptatibus alias. Repudiandae adipisci ducimus
                    esse deleniti perspiciatis quaerat voluptatibus. Recusandae
                    porro quia dolores, nobis tempore nisi veniam maiores cum
                    corporis. At, non vel sunt enim velit ratione! Maxime
                    quaerat, fugit quia et suscipit sunt animi nesciunt eum est
                    corporis quis ipsam repellat unde at expedita aliquam minima
                    tempora facere excepturi pariatur? Corporis quae quas quis
                    sapiente aut distinctio fugiat culpa quaerat, sunt dolorem
                    eaque iusto commodi ducimus possimus, velit aliquam quam
                    sint odio iste molestiae obcaecati nostrum totam. Facilis
                    quasi rem nobis? Aspernatur soluta accusantium magnam
                    corrupti minima, eos hic, a harum repellat placeat itaque
                    nesciunt totam ea alias cupiditate facilis! Consequuntur
                    fuga illum ad eaque exercitationem distinctio vero labore
                    maiores laboriosam nam ullam dolorum facere repellat, non
                    dolorem inventore delectus at cumque reiciendis, sequi quod
                    necessitatibus earum quidem accusantium? Odit facilis
                    molestias, itaque eum sed libero quaerat nulla, soluta
                    debitis eveniet cupiditate porro alias placeat. Est,
                    expedita dicta excepturi sed eum magnam consequatur iste?
                </p>
            </Section>
            <Section color="main-2">
                <div className="cols center">
                    <div>
                        <h1>
                            Texte <span className="complementary">1</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Texte <span className="complementary">2</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Texte <span className="complementary">3</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium maxime laudantium dolores officiis, soluta
                    exercitationem molestias ad nesciunt possimus, velit dolor?
                    Fugiat praesentium, ab iure, aut, ratione voluptatem itaque
                    mollitia libero adipisci quae sunt? Aliquam tenetur
                    doloribus iste voluptas quidem ipsum, quae omnis id
                    cupiditate inventore odit placeat. Temporibus, enim
                    similique nisi quo sit laborum esse corrupti a, cupiditate
                    molestias eveniet facere molestiae quos ea ab et est
                    aliquid. Aliquam, aliquid perferendis officia laudantium
                    sequi ipsa dolorum est. Consectetur veniam ab praesentium
                    commodi, vitae et rerum odit doloribus necessitatibus
                    repellendus expedita quo dolore itaque recusandae eum. Quia
                    perspiciatis, at vitae beatae totam excepturi, optio
                    mollitia quam reiciendis esse ut temporibus eos laboriosam
                    nobis laborum omnis repellat animi cupiditate deleniti
                    doloremque accusamus? Nemo dolorum sed ipsam ut tenetur.
                    Sint ullam quisquam voluptas autem repellendus, harum quidem
                    vero, placeat amet iure commodi unde eligendi eveniet dolore
                    fugit! Doloribus, fuga beatae ex ratione accusamus deserunt
                    alias natus reiciendis culpa asperiores dicta obcaecati
                    dolores, odio, magni mollitia. Odio natus modi est officiis
                    deleniti perferendis, ipsum ipsam ullam soluta, consectetur
                    vitae ad numquam repellendus asperiores obcaecati unde
                    reprehenderit accusamus rerum explicabo repudiandae!
                    Excepturi facilis praesentium expedita quisquam inventore a,
                    minima, cum nihil voluptas necessitatibus exercitationem,
                    qui quidem modi nemo fugit voluptatum facere quis veritatis
                    possimus aliquam repellendus eligendi sit. Animi unde
                    placeat deserunt rem ab itaque odit eius repellendus neque,
                    saepe iure provident odio voluptates reprehenderit
                    laboriosam accusantium, quisquam dolorem eligendi recusandae
                    officiis minus asperiores beatae. Id doloremque maxime
                    consequuntur ex odit inventore debitis reiciendis, nisi
                    dolorem aliquam necessitatibus nemo perspiciatis neque
                    placeat tempora earum, consequatur harum assumenda eaque
                    exercitationem facere veritatis eveniet. Odio, earum quae
                    minus nemo quo maiores temporibus placeat! Earum esse odio
                    repellat omnis accusamus, pariatur, unde rem quidem, vitae
                    corporis doloremque cum quas ut quos. Praesentium aliquid
                    voluptatum iure veniam vitae ullam. Magni omnis incidunt
                    maxime quos officia rem repudiandae dolorem tempore
                    obcaecati pariatur ipsum nisi, nobis earum, dicta odio eum
                    voluptas illum aliquid architecto voluptates quo ex fugit!
                    Explicabo ducimus rerum molestiae delectus itaque ipsa saepe
                    ea. Nihil quo non est sunt, voluptatibus odit! Cum maiores,
                    porro corrupti vero quidem fugiat necessitatibus veritatis,
                    placeat laborum earum ex magni et consequatur delectus illum
                    velit iste consectetur tempora similique aliquid debitis
                    praesentium. Mollitia laboriosam nam, quos harum cupiditate
                    sit, itaque, pariatur vel blanditiis sequi fugiat. Ut,
                    similique. Nulla iste dolorum soluta repellat dolorem
                    quisquam ipsa aliquam corrupti mollitia! In dolores unde
                    placeat et, quas nihil, qui quam sapiente, harum praesentium
                    temporibus accusantium ratione reprehenderit! Soluta non
                    alias et dolor id. Debitis veniam tenetur corrupti nesciunt
                    pariatur expedita at dolorum quaerat fugit nihil quos,
                    repellat excepturi molestiae magni eius recusandae eaque
                    ratione cumque totam laborum. Nam eos obcaecati fugit
                    delectus maxime nemo earum accusamus minima porro, sunt
                    natus ad dolor ab ullam in, fuga vitae nobis nostrum vel
                    eum. Aliquid accusantium dolore, odit est accusamus
                    veritatis provident non vitae nobis sit, unde soluta dolorem
                    eos et perspiciatis cumque dignissimos ea quibusdam hic
                    delectus eius laudantium. Eligendi similique nemo
                    perferendis, illo optio tenetur labore!
                </p>
            </Section>
        </>
    );
}

export default Home;
