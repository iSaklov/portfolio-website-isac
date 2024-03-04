import Image from 'next/image'
import Section from '@/components/layout/Section'
import Profil from '@/assets/images/profil.jpg'
import Mask from '@/assets/images/mask.svg'

export default function AboutSection() {
  const idSection = 'about'
  const title = 'À propos'
  const subtitle = 'Qui je suis et ce que je fais'

  return (
    <Section id={idSection} title={title} subtitle={subtitle}>
      <div className='relative mt-20 overflow-hidden rounded-bl-[80px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[40px] md:float-right md:ml-4 md:mt-28 md:w-1/2 lg:mt-40 lg:w-1/3'>
        <Image
          src={Profil}
          alt='Photos du développeur du site'
          placeholder='blur'
          className='h-auto w-full object-contain'
        />
        <div
          className='pointer-events-none absolute inset-0 bg-repeat'
          style={{ backgroundImage: `url(${Mask.src})` }}
        />
      </div>
      <article className='mt-10 md:mt-28 lg:mt-40'>
        <h4 className='text-[1.375rem] md:text-2xl lg:text-[1.625rem]'>
          Qui je suis
        </h4>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Salut à tous! Je m&apos;appelle Oleg. Je suis concepteur développeur
          d&apos;applications (full stack JavaScript & TypesScript) avec un vif
          intérêt pour le développement frontend, ce qui nourrit ma passion pour
          la conception UI/UX design. Actuellement, je suis en quête d&apos;une
          alternance afin de mettre en pratique mes compétences acquises durant
          ces dernières années en me rendant utile dans une équipe ambitieuse et
          dynamique.{' '}
        </p>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Installé à Épernon, la belle région d&apos;Eure et Loir, je
          n&apos;hésite pas à me déplacer en Île-de-France pour taffer à Paris
          et dans ses environs. Mon objectif est simple : créer des expériences
          web exceptionnelles tout en restant à la pointe des technologies pour
          rendre mes applications fluides, scalables et performantes.
        </p>
      </article>
      <article className='mt-10 md:mt-12 lg:mt-14'>
        <h4 className='text-[1.375rem] md:text-2xl lg:text-[1.625rem]'>
          Ce que j&apos;ai fait
        </h4>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Ayant obtenu un master en philosophie dans mon pays d&apos;origine
          (Université d&apos;État de Biélorussie), j&apos;ai poursuivi mes
          aventures en m&apos;engageant dans l&apos;armée française (Légion
          Étrangère) fin 2015. Après avoir terminé mon contrat d&apos;engagement
          de 5 ans, j&apos;ai entrepris une reconversion professionnelle dans le
          domaine du développement web et web mobile. Durant mon bootcamp de
          formation, j&apos;ai acquis les bases du codage (HTML5, CSS3,
          JavaScript ES6, PHP, SQL), auxquelles se sont ajoutées les compétences
          en React et Node.js lors d&apos;un stage de 2 mois pour une
          association bénévole «Biélorusses en France».
        </p>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Immédiatement après, je commence à collaborer avec des entreprises
          biélorusses en freelance, car l&apos;absence de mon titre de séjour
          français ne me permettait pas de débuter mon parcours professionnel en
          tant qu&apos;employé en France. Au cours de cette période, j&apos;ai
          travaillé avec plusieurs entreprises biélorusses, participant au
          développement de nouvelles fonctionnalités, à la revue de code, à la
          création d&apos;API internes et à l&apos;optimisation du code
          existant.
        </p>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Pendant cette période, j&apos;ai beaucoup appris, ajoutant à mes
          compétences initiales une maîtrise solide de TypeScript, NoSQL,
          Next.js, Tailwind CSS et d&apos;autres technologies et frameworks de
          pointe en matière de développement web. Au fil de cette période,
          j&apos;ai développé un vif intérêt pour l&apos;aspect esthétique des
          applications web, ce qui m&apos;a amené à explorer Figma et les
          principes de l&apos;UI/UX, poursuivant ainsi le développement de
          l&apos;intérêt que j&apos;avais déjà manifesté lors de ma
          collaboration avec des designers à mon organisme de formation «La
          Passerelle» à Paris en 2021.
        </p>
      </article>
      <article className='mt-10 md:mt-12 lg:mt-14'>
        <h4 className='text-[1.375rem] md:text-2xl lg:text-[1.625rem]'>
          Ce que je fais
        </h4>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Avec déjà trois années d&apos;expérience dans le développement web,
          j&apos;ai enfin eu l&apos;opportunité de travailler officiellement en
          France. Récemment, en plus de mon expérience en freelance, j&apos;ai
          concrétisé plusieurs projets personnels, de la conception et du design
          jusqu&apos;au développement et à la publication en ligne.
          J&apos;accorde une attention particulière au SEO et à la performance,
          que ce soit pour un grand projet ou une petite expérience
          d&apos;apprentissage d&apos;une nouvelle technologie.
        </p>
        <p className='mt-3 text-justify font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Actuellement, je m&apos;immerge dans l&apos;apprentissage de GraphQL
          et Prisma, PostgreSQL, ainsi que d&apos;autres bases de données
          relationnelle. Docker, React Native, feront partie de mon stack
          techno, me permettant ainsi de concevoir des applications plus
          robustes et multiplateformes. Mon premier pas au sein d&apos;une
          entreprise innovante et à forte croissance me motive énormément. Comme
          je l&apos;ai mentionné au début, j&apos;ai créé ce site portfolio dans
          le but d&apos;attirer mon futur employeur, qui pourrait me proposer un
          contrat de professionnalisation en alternance. Je suis ouvert à de
          nouveaux défis et prêt à embarquer pour de nouvelles aventures.
          Ensemble, créons quelque chose d&apos;extraordinaire !
        </p>
      </article>
    </Section>
  )
}
