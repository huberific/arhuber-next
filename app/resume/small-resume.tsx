'use client'

import { List, ListItem, ListItemText, SvgIcon, Tooltip } from '@mui/material'
import { educationList } from './data';
import Link from 'next/link';
import Image from 'next/image'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import './styles.css'

function DownloadResume() {
  return (
    <div>
      <a href={'/AaronHuberResume.pdf'} download={'AaronHuberResume'}>
        <Tooltip title='Download resume' placement='bottom' enterDelay={1000}>
          <PictureAsPdfIcon id='pdf-logo' className='follow-logo' />
        </Tooltip>
      </a>
    </div>
  )
}

function Intro() {
  return (
    <div id='profile-container' className='main-container mt-10 flex flex-col gap-8 items-center'>
      <Image
        id='profile-pic'
        className='content-center shadow-md'
        src='/ARH_2295_sml.png'
        width={300}
        height={300}
        alt='Picture of Aaron'
      />
      <div className='flex flex-col gap-1 items-center'>
        <p className='text-lg font-medium text-cyan-950 dark:text-cyan-300'>
          Aaron Huber
        </p>
        <p className='font-light mb-2 text-cyan-950 dark:text-cyan-100'>
          Redwood City, CA
        </p>
        <div className='flex gap-5'>
          <Tooltip title='arhuber@stanford.edu' placement='bottom' enterDelay={1000}>
            <Link href={'mailto:arhuber@stanford.edu'}>
              <div>
                <SvgIcon>
                  <svg id='mail-logo' className='follow-logo' width="800px" height="800px" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" />
                  </svg>
                </SvgIcon>
              </div>
            </Link>
          </Tooltip>
          <Tooltip title='Visit my LinkedIn' placement='bottom' enterDelay={1000}>
            <Link href={'https://linkedin.com/in/arhuber'}>
              <div className='ml-1'>
                <SvgIcon viewBox='0 0 100 100'>
                  <svg id='linkedin-logo' className='follow-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </SvgIcon>
              </div>
            </Link>
          </Tooltip>
          <Tooltip title='Visit my Github' placement='bottom' enterDelay={1000}>
            <Link href={'https://github.com/huberific'}>
              <div className='ml-1'>
                <SvgIcon viewBox='0 0 100 100'>
                  <svg id='github-logo' className='follow-logo' width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
                </SvgIcon>
              </div>
            </Link>
          </Tooltip>
          <DownloadResume />
        </div>
      </div>
    </div>
  )
}

function BoeingLogoContainer() {
  return (
    <div className='left-container self-center ml-4'>
      <Link href={'https://www.boeing.com'}>
        <Image
          className='hidden dark:block'
          src='/boeing_logo_white.svg'
          width={100}
          height={100}
          alt='Boeing logo'
        />
        <Image
          className='block dark:hidden'
          src='/boeing_logo.svg'
          width={100}
          height={100}
          alt='Boeing logo'
        />
      </Link>
    </div>
  )
}

function Work() {
  return (
    <div>
      <div className='mt-2 bg-slate-200/20 dark:bg-cyan-700/10 rounded-lg shadow-lg'>
        <div className='flex p-2 justify-between bg-slate-400/10 dark:bg-cyan-900/30 top-work-bar'>
          <BoeingLogoContainer />
          <div>
            <List dense={false}>
              <ListItem>
                <ListItemText className='text-cyan-950 dark:text-cyan-50'>
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
        <div className='text-cyan-950 dark:text-cyan-50 p-2'>
          <List dense={false}>
            <ListItem>
              <ListItemText className='font-light text-justify'>
                <span className='font-light'>
                  Upgraded a suite of airplane maintenance web applications (Angular, Java Spring Boot) from
                  deprecated AngularJS to Angular v17+ resulting in increased performance and scalability
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
                  Generated new CI/CD Gitlab pipeline of Cypress end-to-end testing of our application eliminating +1000 hrs of manual testing per year
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
      </div>
      <div className='mt-8 bg-slate-200/20 dark:bg-cyan-700/10 rounded-lg shadow-md'>
        <div className='flex p-2 justify-between bg-slate-400/10 dark:bg-cyan-900/30 top-work-bar'>
          <BoeingLogoContainer />
          <div>
            <List dense={false}>
              <ListItem>
                <ListItemText className='text-cyan-900 dark:text-cyan-50'>
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
        <div className='p-2'>
          <div className='text-cyan-950 dark:text-cyan-50'>
            <List dense={false}>
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
                    to enable industry cost analysis benchmarking
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText className='font-light text-justify'>
                  <span className='font-light'>
                    Led multiple product development projects using advanced stress analysis techniques, such as Finite Element Analysis
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
    <div className='flex gap-2' key={school.id}>
      <div className='flex left-container justify-center self-center'>
        <Link href={school.site}>
          <Image
            className='block dark:hidden'
            src={school.logoDetails.src}
            width={school.logoDetails.width_sm}
            height={school.logoDetails.height_sm}
            alt={school.logoDetails.alt}
          />
          <Image
            className='hidden dark:block'
            src={school.logoDetails.src_dark}
            width={school.logoDetails.width_sm}
            height={school.logoDetails.height_sm}
            alt={school.logoDetails.alt}
          />
        </Link>
      </div>
      <div>
        <List dense={false}>
          <ListItem>
            <ListItemText>
              <p className='font-semibold dark:text-cyan-50'>{school.name}</p>
              <p className='font-extralight dark:text-cyan-50'>{school.degree}</p>
              <p className='font-extralight dark:text-cyan-50'>{school.graduation}</p>
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
    <div id='education' className='bg-slate-200/40 dark:bg-cyan-900/30 shadow-md rounded-lg mt-2 mb-10 flex'>
      <div id='schools-container' className='self-center' style={{ width: '350px', margin: '0 auto' }}>
        <Schools></Schools>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div id='skills' className='bg-slate-200/40 text-cyan-950 dark:bg-cyan-900/30 dark:text-cyan-50 shadow-md rounded-lg flex mt-2 mb-10 '>
      <div className='p-5'>
        <div className='grid grid-cols-3 gap-2 text-sm'>
          <div className='col-span-1 font-semibold'>
            Languages:
          </div>
          <div className='col-span-2 font-light'>
            JavaScript/TypeScript, Java
          </div>
          <div className='col-span-1 font-semibold'>
            Frameworks:
          </div>
          <div className='col-span-2 font-light'>
            Angular, React, Spring Boot
          </div>
          <div className='col-span-1 font-semibold'>
            Misc:
          </div>
          <div className='col-span-2 font-light'>
            Linux, SQL, Node.js, Webpack, GitLab CI/CD, Google Material, Tailwind, Azure DevOps, Blender, Lightroom, Photoshop
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SmallResume() {
  return (
    <>
      <div className='sm-main-container mb-30'>
        <Intro />
        <div className='mt-10 font-light text-cyan-950 dark:text-cyan-50 '>
          <p>Work History</p>
          <Work />
          <p className='mt-10'>Education</p>
          <Education />
          <p className='mt-10'>Skills</p>
          <Skills />
        </div>

      </div>
    </>
  );
}