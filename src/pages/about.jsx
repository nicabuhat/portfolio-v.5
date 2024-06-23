import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nicaela Cabuhat</title>
        <meta
          name="description"
          content="I’m Nicaela Cabuhat. I live in the Philippines, where I help individual entrepreneurs and small businesses with their web design and development."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Nicaela Cabuhat. I live in the Philippines, where I help
              people with their web design and development.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I`ve been in love with technology the very first time I`ve
                touched it. When I was kid, I used to design houses on Microsoft
                Word and eventually transitioned to playing The Sims series
                where I built houses to cities.
              </p>
              <p>
                Growing up, my interests grew to using photo and video editing
                softwares such as Gimp and Sony Vegas Pro. I learned my way
                through various softwares and since then started my lifelong
                commitment to learning new things. I also had my very first
                programming course in high school where I learned how to create
                a software to manipulate a box of lights.
              </p>
              <p>
                I spent my college days in libraries absorbing all the tutorials
                in making advanced 3d designs and other multimedia arts
                projects. I also realized this time that I missed doing maths so
                I took on Computer Science where I learned the fundamentals of
                programming.
              </p>
              <p>
                Today, I’m a frontend web developer working with individual
                entrepreneurs and small businesses to give them inclusive
                experience to my working process. I am also currently taking a
                professional certification from Meta for frontend development
                and UX design from Google, my pledge to myself to keep learning
                new things.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/nicabuhat"
                icon={TwitterIcon}
                target="_blank"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/ncabuhat/"
                icon={InstagramIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/nicabuhat"
                icon={GitHubIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/nicaela-cabuhat/"
                icon={LinkedInIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:cabuhat.nicaela@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                cabuhat.nicaela@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
