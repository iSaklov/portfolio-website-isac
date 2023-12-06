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
      <div className='relative mt-20 overflow-hidden rounded-bl-[80px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[40px] md:float-right md:mt-28 md:w-1/2 lg:mt-40 lg:w-1/3'>
        <Image
          src={Profil}
          alt='Photos du développeur du site'
          placeholder='blur'
          className='h-auto w-full object-contain'
        />
        <div
          className='absolute top-0 h-full w-full'
          style={{ backgroundImage: `url(${Mask.src})` }}
        />
      </div>
      <article className='mt-10 md:mt-28 lg:mt-40'>
        <h3 className='text-[1.375rem] md:text-2xl lg:text-[1.625rem]'>
          Qui je suis
        </h3>
        <p className='mt-3 font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Salut! Je m&apos;appelle Oleg Smaliakou. Je suis un ingénieur full
          stack avec un vif intérêt pour le développement frontend, ce qui
          motive ma passion pour la conception UI/UX. Actuellement basé à
          Épernon, Eure et Loir, en France, cela ne m&apos;empêche pas de me
          déplacer en Île-de-France pour travailler à Paris et dans ses
          environs. Mon objectif est de créer des expériences web
          exceptionnelles tout en restant à la pointe des technologies pour
          rendre mes applications modernes et performantes.
        </p>
      </article>
      <article className='mt-10 md:mt-12 lg:mt-14'>
        <h5 className='text-[1.375rem] md:text-2xl lg:text-[1.625rem]'>
          Ce que j&apos;ai fait
        </h5>
        <p className='mt-3 font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Après avoir terminé ma formation, sans perdre de temps, j&apos;ai
          immédiatement commencé à travailler avec diverses entreprises
          biélorusses en tant que freelance, en attendant de régler les
          questions liées à ma résidence en France et à l&apos;autorisation de
          travail officielle. Au cours de cette période, j&apos;ai collaboré
          avec plusieurs entreprises biélorusses, participant au développement
          de nouvelles fonctionnalités, à la revue de code, à la création
          d&apos;API internes et à l&apos;optimisation du code existant. Pendant
          cette période, j&apos;ai beaucoup appris, ajoutant à mes compétences
          initiales en HTML5, CSS3, JavaScript ES6, SQL, une maîtrise solide de
          TypeScript, NoSQL, React, Next.js, et d&apos;autres technologies et
          frameworks de pointe en matière de développement web. Au fil de cette
          période, j&apos;ai développé un vif intérêt pour l&apos;aspect
          esthétique des applications web ce qui m&apos;a amené à explorer Figma
          et les principes de l&apos;UI/UX, poursuivant ainsi le développement
          de l&apos;intérêt que j&apos;avais déjà manifesté lors de ma
          collaboration avec des designers à mon école Passerelle à Paris en
          2021.
        </p>
      </article>
      <article className='mt-10 md:mt-12 lg:mt-14'>
        <h5 className='text-[1.375rem] md:text-2xl lg:text-[1.625rem]'>
          Ce que je fais
        </h5>
        <p className='mt-3 font-light leading-7 lg:mt-4 lg:text-[1.125rem] lg:leading-8'>
          Avec trois ans d&apos;expérience en développement web, j&apos;ai enfin
          eu l&apos;opportunité de travailler officiellement en France.
          Récemment, j&apos;ai pu concrétiser plusieurs projets personnels,
          allant de la conception à la publication finale en ligne, en passant
          par le développement d&apos;applications. Actuellement, je travaille
          activement avec Prisma et GraphQL, ce qui me permet de développer des
          applications plus robustes que les API REST traditionnelles.
        </p>
      </article>
    </Section>
  )
}
