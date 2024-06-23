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
              I&apos;m Nicaela Cabuhat. I live in the Philippines, where I help
              people with their web design and development.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Ever since my earliest encounter with technology, I&apos;ve been
                captivated by its limitless potential for creativity and
                problem-solving. As a child, my first foray into design was
                crafting virtual dream homes in Microsoft Word, and my passion
                for building and creating soon extended to The Sims series,
                where I meticulously constructed entire cities.
              </p>
              <p>
                As I continued to grow, so did my fascination with technology. I
                found myself drawn to photo and video editing software like Gimp
                and Sony Vegas Pro. Eager to unlock their full potential, I
                embarked on a journey of self-discovery and exploration, honing
                my skills in various software applications. This marked the
                beginning of my lifelong commitment to continuous learning.
              </p>
              <p>
                My formal education took a pivotal turn in high school when I
                enrolled in my first programming course. It was there that I was
                introduced to the enchanting world of code, and I vividly recall
                the excitement of manipulating a box of lights through software
                I had written myself.
              </p>
              <p>
                During my college years, I found myself immersed in libraries,
                absorbing every piece of knowledge I could find on advanced 3D
                design and multimedia arts projects. It was during this time
                that I rediscovered my love for mathematics, leading me to
                pursue a degree in Computer Science, where I delved deep into
                the fundamentals of programming.
              </p>
              <p>
                My professional journey began as a freelancer, collaborating
                with small businesses and individual entrepreneurs to bring
                their digital visions to life. As my skills and experience grew,
                I transitioned to startups and mid-sized companies, where I
                contributed to the development of cutting-edge user interfaces
                and engaging user experiences.
              </p>
              <p>
                Today, I am proud to be part of one of the world&apos;s leading
                cybersecurity corporations, where I continue to push the
                boundaries of front-end development and UI/UX design. My passion
                for technology, creativity, and problem-solving remains as
                strong as ever, driving me to excel in the dynamic and
                ever-evolving field of software engineering.
              </p>
              <p>
                In my spare time, you&apos;ll find me immersed in new
                technologies, experimenting with innovative design concepts, or
                simply enjoying the thrill of solving complex coding puzzles. I
                believe that the intersection of technology and creativity is
                where true innovation thrives, and I am committed to pushing
                that boundary every day.
              </p>
              <p>
                Outside of the digital realm, I have a deep appreciation for
                life&apos;s analog pleasures. Cycling through scenic landscapes
                allows me to find balance and inspiration, while rowing on
                serene waters provides a sense of tranquility and focus. These
                hobbies not only keep me physically active but also serve as a
                source of mental rejuvenation, often sparking new ideas and
                solutions during those moments of reflection.
              </p>
              <p>
                Cooking is another passion that I&apos;ve cultivated over the
                years. Much like coding, it&apos;s an art form that blends
                creativity and precision. Exploring different cuisines,
                experimenting with flavors, and creating culinary masterpieces
                bring me a unique sense of satisfaction. Whether it&apos;s
                whipping up a gourmet meal for friends or crafting a new
                software feature, the process of creation is a source of joy
                that transcends the medium.
              </p>
              <p>
                Let&apos;s collaborate and build the future, one line of code
                and one pixel at a time.
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
                href="mailto:nicaela.m.cabuhat@gmial.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                nicaela.m.cabuhat@gmial.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
