import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Nicaela Cabuhat</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="This if for my reference but there's no harm in sharing them."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” Macbook Pro 2022">
              My first Mac and it did not disappoint.
            </Tool>
            <Tool title="HP ProDisplay P203">
              An adequate monitor which does its job well.
            </Tool>
            <Tool title="Royal Kludge Mechanical Keyboard">
              I didn`t get the hype about mechanical keyboards but when I tried
              one, my productivity soared.
            </Tool>
            <Tool title="Razer Viper Pro">
              The razer synapse is a next level tool that makes the razer mouse
              top-notch.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I`ve tried many editors and IDEs before and Visual Studio Code is
              the best amongst all of them. Its complete package conquers its
              competition easily.
            </Tool>
            <Tool title="Git Bash">
              I’m using it still despite the addition terminal to Windows 11.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I started using Figma for wireframes and prototypes and became my
              go to design software.
            </Tool>
            <Tool title="Photoshop">
              Still my favorite software to use to create pixel based assets and
              for quick photo edit.
            </Tool>
            <Tool title="Illustrator">
              My go to software for vector based assets specially for svgs used
              in my website projects.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              From digital journal to curated database, notion has jampacked
              features for productivity.
            </Tool>
            <Tool title="Trello">
              I used trello for project management, to easily keep track of my
              progress.
            </Tool>
            <Tool title="Anki">
              Great tool for studying and get refreshers on certain topics.
            </Tool>
            <Tool title="Pomodoro Timer">
              A simpple tool to help me get into flow into chunk of times with
              breaks in between.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
