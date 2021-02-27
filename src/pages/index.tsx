import { CompletedChallenges } from "../Components/CompletedChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from '../Components/Profile';
import Style from '../Style/Pages/Home.module.css';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox } from "../Components/ChallengeBox";
import { CountdownProvider } from "../Contexts/CountdownContext";
import { ChallengesProvider } from "../Contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={Style.container}>

        <Head>
          <title>Inicio | MoveIt </title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
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
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}