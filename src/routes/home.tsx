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
            <Section color="main-2">
                <TextImage source="766f77b3.jpg" proportion={50}>
                    <h2>PETITE INFO</h2>
                    <h1 className="separator">
                        GROS TITRE{" "}
                        <span className="complementary">SPECIAL</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis tenetur obcaecati molestias veritatis
                        possimus quae quis eveniet maxime voluptatem itaque
                        aliquam nostrum ea culpa vitae dignissimos sequi
                        inventore odio ullam, et tempore quisquam suscipit
                        aliquid? Tenetur natus dicta vitae debitis officia
                        corrupti perferendis a fugiat? Sequi iure blanditiis
                        dolorum eveniet! Ipsa at facere ipsam temporibus
                        delectus.
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ad modi perspiciatis, error enim earum, distinctio
                    accusantium alias praesentium unde nam at blanditiis sunt
                    suscipit vero cupiditate, exercitationem facilis. Id
                    deleniti fugiat sint consectetur facere, ex libero neque
                    numquam quasi, maiores voluptas accusamus, sit saepe alias
                    aperiam temporibus veniam ullam repudiandae. Eaque culpa
                    quisquam consectetur enim natus! Laudantium possimus
                    dignissimos commodi eaque enim eos qui sunt omnis, saepe ea
                    modi iure est incidunt, minima aliquam quia necessitatibus
                    illum. Necessitatibus commodi assumenda eum et! Debitis
                    facere quidem est quo delectus. Minima repudiandae tempore,
                    asperiores tenetur illo soluta optio velit perspiciatis
                    dolore dolorum quo! Cum porro beatae dolore minus qui
                    ducimus eaque quasi vero, debitis assumenda velit
                    reprehenderit, itaque blanditiis neque. Quis, ducimus
                    facilis laudantium unde cumque nemo consectetur eius est at
                    ipsa veniam tempore expedita. Quisquam quis iusto, explicabo
                    mollitia quia numquam corrupti animi est, ullam ut delectus
                    fuga odit in maxime quam, dolores quidem accusantium
                    consequatur? Dolor ipsa, animi inventore odio alias expedita
                    perferendis iste modi nemo architecto, explicabo labore,
                    saepe hic ex dignissimos! Molestias odio modi, nulla quia
                    obcaecati asperiores sapiente in incidunt repellat ab
                    provident saepe repudiandae sit tenetur corrupti nisi
                    consectetur quisquam fugit reprehenderit aut. Aliquam eum
                    provident dolor illum ea magnam autem, sint, sed temporibus
                    omnis veritatis! Illum soluta voluptatem et sunt. Natus
                    molestias sunt eligendi dolore? Earum, saepe! Repellendus ex
                    architecto, provident optio ea suscipit fugit dicta atque
                    esse assumenda amet nihil eos recusandae mollitia aliquam id
                    culpa accusantium deleniti! Molestias minima praesentium
                    voluptate dicta cumque odio dolores libero sunt dolore
                    accusamus facere ducimus itaque obcaecati dolorem veritatis
                    asperiores eligendi, quisquam qui mollitia quis et!
                    Voluptatibus, eum enim asperiores blanditiis, at laudantium
                    qui, quasi tempore consequatur quisquam nostrum cupiditate
                    aliquam suscipit! Officia quo laboriosam veritatis aut
                    expedita ab. Corporis ratione doloremque quam. Cumque
                    accusamus deserunt ex nisi nostrum quisquam praesentium quas
                    dolor reiciendis, veniam ratione excepturi at dolorem nulla
                    delectus rerum vitae mollitia dolorum, necessitatibus
                    laborum modi rem inventore recusandae repellat? Quibusdam
                    quasi fuga illum? Dolorum qui at quam, rerum laudantium
                    harum, nobis libero nisi atque incidunt porro modi officiis
                    voluptas consequuntur minima sit. Odio doloremque impedit
                    non nostrum sequi libero qui est nihil cum voluptates
                    eligendi optio dolorum, quam quis tenetur voluptate? Beatae
                    culpa totam excepturi ipsa, ullam, quis itaque, nihil
                    impedit exercitationem dolores inventore recusandae maxime.
                    Amet, reiciendis sint qui eaque tempore repellendus optio
                    tempora unde necessitatibus, architecto eum minus voluptates
                    dolorum doloremque fugiat numquam, nostrum modi laboriosam
                    dicta ea mollitia soluta magni assumenda vero. Quod aliquid
                    adipisci, tempora nisi consequuntur ipsam neque ab a, hic
                    error illo aut illum eveniet amet vitae, dignissimos esse
                    ipsum fugiat! Qui consequatur beatae nihil placeat similique
                    facere, doloribus laudantium autem eum repudiandae officia
                    ex repellendus libero quas asperiores, deserunt voluptatem
                    cupiditate labore nobis, ab at ducimus a? Quibusdam iusto
                    perspiciatis provident doloremque saepe, quisquam eum,
                    similique quos corrupti quia exercitationem tenetur nemo
                    placeat excepturi ducimus. Quod consectetur quos, recusandae
                    cum excepturi itaque molestias, culpa in voluptates minus
                    molestiae a adipisci dolores deserunt nobis ipsam aliquid
                    ipsa nisi facere quasi! Voluptates nulla exercitationem
                    velit architecto debitis id cum, nostrum amet neque nisi,
                    maxime, quaerat fugiat ratione dignissimos distinctio.
                    Consequatur, blanditiis tenetur architecto, tempore
                    reprehenderit dolores vel enim similique natus odit debitis
                    nihil odio distinctio quam itaque temporibus at nulla nisi!
                    Voluptatum sit expedita beatae porro, nobis autem
                    voluptatibus quos temporibus quibusdam at tempora ducimus
                    veritatis et magnam, ratione earum impedit quisquam laborum
                    facere sed blanditiis dolores architecto? In ab voluptas
                    quasi atque doloribus, eum minima magnam mollitia accusamus
                    excepturi aperiam tempore nulla, at cumque enim consequuntur
                    itaque repellendus. Necessitatibus, suscipit id eos nemo est
                    voluptate molestiae commodi.
                </p>
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
