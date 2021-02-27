import Head from 'next/head'
import React from 'react'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownContextProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | MoveIt</title>
      </Head>

      <ExperienceBar />
      <CountdownContextProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownContextProvider>
    </div>
  )
}
