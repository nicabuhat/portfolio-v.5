import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoBetbet from '@/images/logos/betbet.svg'
import logoEcash from '@/images/logos/ecash.svg'
import logoArcce from '@/images/logos/arcce.svg'
import logoRefokus from '@/images/logos/refokus.svg'
import logoCoach from '@/images/logos/coach.svg'
import logoOrganic from '@/images/logos/organic.svg'
import logoChatApp from '@/images/logos/chatapp.svg'
import logoSuzanneCollins from '@/images/logos/suzanne.svg'

const projects = [
  {
    name: 'BetBet',
    description: 'Prototype for the betting app of ecash, XEC currency.',
    link: {
      href: 'https://nicabuhat.github.io/betbet',
      label: 'github.com',
    },
    logo: logoBetbet,
  },
  {
    name: 'eCash Merch',
    description:
      'Prototype for the merchandise ecommerce site of ecash, XEC currency.',
    link: { href: 'https://nicabuhat.github.io/ecash', label: 'github.com' },
    logo: logoEcash,
  },
  {
    name: 'Arcce Construction Corporation',
    description:
      'A humble website for a general contracting construction company.',
    link: {
      href: 'https://nicabuhat.github.io/arcce',
      label: 'github.com, arcce-constructioncorp.com',
    },
    logo: logoArcce,
  },
  {
    name: 'Organic Cotton',
    description: 'A simple one secttion landing page for a bedding company.',
    link: {
      href: 'http://www.organiccotton.co.il/',
      label: 'organiccotton.co.il',
    },
    logo: logoOrganic,
  },
  {
    name: 'Coach D',
    description: 'Web design for a fitness coach',
    link: {
      href: 'https://nicabuhat.github.io/project-coach.html',
      label: 'github.com',
    },
    logo: logoCoach,
  },
  {
    name: 'Refokus',
    description: 'Variation of forms for a reviewing website.',
    link: {
      href: 'https://nicabuhat.github.io/project-refokus.html',
      label: 'github.com, smbreviewer.com',
    },
    logo: logoRefokus,
  },
]
const cms = [
  {
    name: 'ChatApp',
    description: 'Landing page for a chat application',
    link: {
      href: 'https://chat-app-nc.webflow.io/',
      label: 'webflow.io',
    },
    logo: logoChatApp,
  },
  {
    name: 'Suzanne Collins',
    description:
      'Redesign idea for Suzanne Collins website using wordpress, elementor, and astra theme',
    link: {
      href: 'https://suzannecollins.netlify.app/',
      label: 'netlify.app',
    },
    logo: logoSuzanneCollins,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nicaela Cabuhat</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years and these are some of my works. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="mb-20 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <h2 className="text-blackv mb-10 text-4xl font-bold dark:text-white">
          CMS Projects
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cms.map((w) => (
            <Card as="li" key={w.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={w.logo} alt="" className="h-8 w-8" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={w.link.href}>{w.name}</Card.Link>
              </h2>
              <Card.Description>{w.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{w.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
