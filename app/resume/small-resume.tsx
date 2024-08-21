'use client'

import { Divider, List, ListItem, ListItemText, Paper, SvgIcon, Tooltip } from '@mui/material'
import { educationList } from './data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './styles.css'

function BackArrow() {
  return (
    <div className='p-10 flex' style={{ width: '50%' }}>
      <Link href={'/home'}>
        <div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.90 }}
          >
            <Tooltip title='Home' placement='bottom' enterDelay={1000}>
              <KeyboardBackspaceIcon id='back-logo' fontSize='large' sx={{ color: '#696969' }} />
            </Tooltip>
          </motion.div>
        </div>
      </Link>
    </div>
  )
}

function DownloadResume() {
  return (
    <div className='p-10' style={{ width: '50%' }}>
      <div key='download' className='follow-logo flex justify-end'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.90 }}
        >
          <Link href={'/AaronHuberResume.pdf'}>
            <Tooltip title='Resume' placement='bottom' enterDelay={1000}>
              <PictureAsPdfIcon id='pdf-logo' fontSize='large' sx={{ color: '#696969' }} />
            </Tooltip>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

function Intro() {
  return (
    <div id='profile-container' className='main-container mt-10 flex flex-col gap-8 justify-center'>
      <Image
        id='profile-pic'
        className='content-center'
        src='/ARH_2295_sml.png'
        width={300}
        height={300}
        alt='Picture of Aaron'
      />
      <div className='flex flex-col gap-1 items-center'>
        <p className='text-lg font-medium small-sc-font-300'>
          Aaron Huber
        </p>
        <p className='font-light mb-2 small-sc-font-100'>
          Redwood City, CA
        </p>
        <div className='flex gap-5'>
          <div>
            <Link href={'mailto:arhuber@stanford.edu'}>
              <SvgIcon>
                <svg id='mail-logo' className='sm-sc-logo' width="800px" height="800px" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" />
                </svg>
              </SvgIcon>
            </Link>
          </div>
          <div>
            <Link href={'https://linkedin.com/in/arhuber'}>
              <SvgIcon viewBox='0 0 100 100'>
                <svg id='linkedin-logo' className='sm-sc-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </SvgIcon>
            </Link>
          </div>
          <div>
            <Link href={'https://github.com/huberific'}>
              <SvgIcon viewBox='0 0 100 100'>
                <svg id='github-logo' className='sm-sc-logo' width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
              </SvgIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function BoeingLogoContainer() {
  return (
    <div className='logo-container self-center'>
      <Link href={'https://www.boeing.com'}>
        <Image
          src='/boeing_logo_white.svg'
          width={100}
          height={100}
          alt='Boeing logo'
        />
      </Link>
    </div>
  )
}

function Work2() {
  return (
    <div className='mt-2 bg-cyan-700 rounded-lg'>
      <div className='flex justify-evenly bg-cyan-900 rounded-lg'>
        <BoeingLogoContainer />
        <div>
          <List dense={true}>
            <ListItem>
              <ListItemText className='font-lite text-cyan-100'>
                <p>
                  Full Stack Developer
                </p>
                <p className='font-light'>
                  Jan 2022 - Present
                </p>
                <p className='font-light'>
                  Menlo Park, CA
                </p>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
      <div className='text-cyan-50'>
        <List dense={true}>
          <ListItem>
            <ListItemText className='font-light text-justify'>
              <span className='font-light'>
                Upgraded a suite of airplane maintenance web applications (Angular, Java Spring Boot) from
                deprecated AngularJS to Angular v15+ resulting in increased performance and scalability
              </span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className='font-light text-justify'>
              <span className='font-light'>
                Created new Business Intelligence Reporting Tool (BIRT) reporting design that saves maintenance engineering customers
                600 hours per year by removing manual data collection
              </span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className='font-light text-justify'>
              <span className='font-light'>
                Generated new CI/CD Gitlab pipeline of Cypress end-to-end testing of our application eliminating manual tests
              </span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className='font-light text-justify'>
              <span className='font-light'>
                Built custom Docker image containing Node.js, Maven, JDK-17, and Cypress for deploying to our Gitlab pipeline
              </span>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className='font-light text-justify'>
              <span className='font-light'>
                Develop software within an Agile environment working with international team members
              </span>
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <div className='flex justify-evenly bg-cyan-900 rounded-lg'>
        <BoeingLogoContainer />
        <div>
          <List dense={true}>
            <ListItem>
              <ListItemText className='font-lite text-cyan-100'>
                <p>
                  Mechanical Engineer
                </p>
                <p className='font-light'>
                  Jan 2008 - Jan 2022
                </p>
                <p className='font-light'>
                  Seattle, WA
                </p>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
      <div>
        <div className='text-cyan-50'>
          <List dense={true}>
            <ListItem>
              <ListItemText className='font-light text-justify'>
                <span className='font-light'>
                  Led large $1M reverse engineering project of competitor&apos;s aircraft wing and delivered
                  data to 200+ product development engineers, executives, and business parters
                </span>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText className='font-light text-justify'>
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
  )
}

function Work() {
  return (
    <div id='work' className='main-container flex flex-col justify-center'>
      <div className='flex-col inner-container'>
        <div className='flex gap-5'>
          <BoeingLogoContainer />
          <div className='flex-col flex 1'>
            <List dense={false}>
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
            <Divider />
          </div>
        </div>
        <div className='flex gap-5'>
          <BoeingLogoContainer />
          <div className='flex-col flex 1'>
            <List dense={false}>
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
                    Led large $1M reverse engineering project of competitor&apos;s aircraft wing and delivered
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
    <div className='flex gap-5 content-center' key={school.id}>
      <motion.div className='flex logo-container justify-center self-center'
        key={school.name}
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.90 }}>
        <Link href={school.site}>
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

export default function SmallResume() {
  return (
    <>
      <div className='main-container mb-30'>
        <Intro />
        <div className='mt-10'>
          <span className='font-thin text-cyan-100'>Work History</span>
          <Work2 />
        </div>

      </div>
    </>
  );
}