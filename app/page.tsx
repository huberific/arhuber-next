'use client'

import Image from 'next/image'
import { Divider } from '@mui/material'
import { Paper } from '@mui/material';
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemText } from '@mui/material'
import './styles.css'
import { educationList } from './data';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Intro() {
  return (
    <div id='profile-container' className='main-container mb-10 flex flex-row gap-10 justify-center'>
      <Image
        className='rounded-lg content-center'
        src='/ARH_2295_sml.png'
        width={300}
        height={300}
        alt='Picture of Aaron'
      />
      <p className='content-center text-lg font-medium'>
        Hi, I'm Aaron.
      </p>
    </div>
  )
}

function About() {
  return (
    <div id='about' className='main-container flex justify-center'>
      <div className='flex flex-col inner-container'>
        <p className='font-light'>I'm a full stack software engineer at Boeing and a
          graduate student in the Honors Cooperative Program at Stanford pursuing
          a Masters in Computer Science. I have interests in Artifical Intelligence,
          Data Management, and solving challenging problems.</p>
      </div>
    </div>
  )
}

function BoeingLogoContainer() {
  return (
    <motion.div className='logo-container self-center'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.90 }}>
      <Link href={'https://www.boeing.com'} rel="noopener noreferrer">
        <Image
          src='/boeing_logo.svg'
          width={110}
          height={110}
          alt='Boeing logo'
        />
      </Link>
    </motion.div>
  )
}

function Work() {
  return (
    <div id='work' className='main-container flex justify-center'>
      <div className='flex-col inner-container'>
        <div className='flex gap-5'>
          <BoeingLogoContainer/>
          <div className='flex-col flex 1'>
            <List dense={ false }>
              <ListItem>
                <ListItemText>
                  <p>
                    Software Development Engineer
                  </p>
                  <p className='font-light'>
                    January 2022 - Present
                  </p>
                  <p className='font-light'>
                    Menlo Park, CA
                  </p>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Upgraded a suite of airplane maintenance web applications (Angular, Java Spring Boot) from
                    deprecated AngularJS to Angular v15+ resulting in increased performance and scalability
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Created new Business Intelligence Reporting Tool (BIRT) reporting design that saves maintenance engineering customers
                    600 hours per year by removing manual data collection
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Generated new CI/CD Gitlab pipeline of Cypress end-to-end testing of our application eliminating manual tests
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Built custom Docker image containing Node.js, Maven, JDK-17, and Cypress for deploying to our Gitlab pipeline
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Develop software within an Agile environment working with international team members
                  </span>
                </ListItemText>
              </ListItem>
            </List>
            <Divider/>
          </div>
        </div>
        <div className='flex gap-5'>
          <BoeingLogoContainer/>
          <div className='flex-col flex 1'>
            <List dense={ false }>
              <ListItem>
                <ListItemText>
                  <p>
                    Mechanical Engineer
                  </p>
                  <p className='font-light'>
                    January 2008 - January 2022
                  </p>
                  <p className='font-light'>
                    Seattle, WA
                  </p>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Led large $1M reverse engineering project of competitor's aircraft wing and delivered
                    data to 200+ product development engineers, executives, and business parters
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light'>
                  <span className='font-light'>
                    Captured 3D Laser geometry of entire wing using a Surphaser 100HSX and post-processed CAD models using Polyworks
                    to enable industry benchmarking
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  )
}

function Schools() {
  const schoolList = educationList.map(school =>
    <div className='flex gap-5 content-center' key={ school.id }>
      <motion.div className='flex logo-container justify-center self-center'
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.90 }}>
        <Link href={school.site} rel="noopener noreferrer">
          <Image
            src={school.logoDetails.src}
            width={school.logoDetails.width}
            height={school.logoDetails.height}
            alt={school.logoDetails.alt}
          />
        </Link>
      </motion.div>
      <div className='flex-col flex 1'>
        <List dense={false}>
          <ListItem>
            <ListItemText>
              <p>{school.name}</p>
              <p className='font-light'>{school.degree}</p>
              <p className='font-light'>{school.graduation}</p>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
  return <> {schoolList} </>
}

function Education() {
  return (
    <div id='education' className='main-container flex justify-center'>
      <div className='flex-col inner-container'>
        <Schools></Schools>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div id='skills' className='main-container flex justify-center'>
      <div className='flex flex-col inner-container'>
        <div className='flex gap-5'>
          <div className='logo-container flex-col'>
            <List>
              <ListItem>
                <ListItemText>
                  <p className='font-light'>
                    Languages
                  </p>
                  <p className='font-light'>
                    Frameworks
                  </p>
                  <p className='font-light'>
                    Misc.
                  </p>
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <div className='flex-col flex 1'>
            <List>
              <ListItem>
                <ListItemText>
                  <p className='font-light'>
                    JavaScript/Typescript, Java, C/C++
                  </p>
                  <p className='font-light'>
                    Angular, React, Spring Boot
                  </p>
                  <p className='font-light'>
                    Linux, SQL, Node.js, Webpack, GitLab CI/CD, Azure DevOps, Lightroom, Photoshop
                  </p>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  )
}

function PageSpacer() {
  return (
    <div className='p-10'></div>
  )
}

export default function Home() {
  return (
    <main>
      <div id='page-container' className='container mx-auto'>
        <Paper elevation={3}>
          <PageSpacer/>
          <Intro />
          <div id='resume-container' className='mb-40'>
            <Divider textAlign='center' className='main-container font-medium p-2'>ABOUT</Divider>
            <About />
            <Divider textAlign='center' className='main-container font-medium p-2'>WORK HISTORY</Divider>
            <Work />
            <Divider textAlign='center' className='main-container font-medium p-2'>EDUCATION</Divider>
            <Education />
            <Divider textAlign='center' className='main-container font-medium p-2'>SKILLS</Divider>
            <Skills />
            <PageSpacer/>
          </div>
        </Paper>
      </div>
    </main>
  );
}
