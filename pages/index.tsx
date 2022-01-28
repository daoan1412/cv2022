import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from '../components/Content/Content'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dao An CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto sm:py-10 py-6 flex sm:flex-row flex-col justify-around sm:space-y-0 space-y-3">
          <img className="rounded-full sm:w-24 w-20 self-center" src="/av1.jpg"></img>
          <div className="self-center">
            <div className="font-semibold text-2xl">
              Dao An
          </div>
            <div className="font-medium">
              Mobile Developer
          </div>
            <div className="font-medium">
              Ha Noi, Viet Nam
          </div>
          </div>
          <div className="self-center space-y-1 text-sm flex flex-col">
            <a target="_blank" rel="noreferrer" href="mailto:daoan1412@gmail.com"><i className="fas fa-envelope"></i>&nbsp;	 daoan1412@gmail.com</a>
            <a target="_blank" rel="noreferrer" href="tel:+84967670265"><i className="fas fa-phone"></i>&nbsp;	 0967670265</a>
            <div><i className="fas fa-birthday-cake"></i>&nbsp;	 14-12-1994</div>
          </div>
        </div>
      </div>
      <Content
        title="Career Profile"
        icon="fas fa-user"
      >
        <div>Mobile developer with 2 year 7 months experience. I work with iOS, Android and Flutter.</div>
        <div>Having ability to build the backend with common functions, full basic flow to communicate between backend and client</div>
        <div>Learning new languages or platforms quickly with a positive attitude. Can join in all process of product development from initialize to store release</div>
      </Content>
      <Content
        title="Experience"
        icon="fas fa-briefcase"
      >
        <div className="font-semibold">
          Developer at Techmaster
        </div>
        <div className="italic font-light">March 2019 - May 2020</div>
        <div className="font-semibold">
          Developer at CMC CIST
        </div>
        <div className="italic font-light">July 2020 - Present</div>
      </Content>
      <Content
        title="My Product"
        icon="fas fa-th"
      >
        <div className="mb-2">My own product with Full-Stack operations</div>
        <div className="font-semibold">Click & See</div>
        <a target="_blank" rel="noreferrer" className="underline" href="https://clickandsee.net/">https://clickandsee.net/</a>
      </Content>
      <Content
        title="Repository"
        icon="fas fa-code-branch"
      >
        <div className="font-semibold">Github</div>
        <a target="_blank" rel="noreferrer" className="underline mb-2" href="https://github.com/daoan1412">https://github.com/daoan1412</a>
        <div className="font-semibold mt-2">NPM</div>
        <a target="_blank" rel="noreferrer" className="underline" href="https://www.npmjs.com/package/redis-trie-vi">https://www.npmjs.com/package/redis-trie-vi</a>
      </Content>
      <Content
        title="Key Skills"
        icon="fas fa-key"
      >
        <div>
          Flutter - good
            </div>
        <div>
          Android - good
          </div>
        <div>
          iOS - good
          </div>
        <div>
          Rust - good
          </div>
        <div>
          Git - good
          </div>
        <div>
          .NET (back end) - good
            </div>
        <div>
          React Native, ReactJS, NextJS - intermediate
            </div>
        <div>
          English - intermediate
         </div>
        <div className="mt-4">
          NodeJS (Auth, RESTful API, SocketIO, GraphQL)<br></br>
            Firebase (Authentication, Database, Functions, Storage, Hosting, Cloud Messaging) <br></br>
            Database (Realm, Couchbase, PostgreSQL) <br></br>
            DevOps: linux, nginx, docker, bashscript, python ... <br></br>
        </div>
      </Content>

      <Content
        title="Projects"
        icon="fas fa-project-diagram"
      >
        <div>
          <span className="font-semibold">
            Click & See
          </span>
          <span>
            &nbsp; (my product, contribution rate 100%) The app makes learning new words fun (Rust - 20%; Kotlin, Swift - 80%, .NET - Backend, Offline Sync, firebase crashlytics, authentication)
          </span>
        </div>
        <div className="mt-4">
          <span className="font-semibold">
            CIVAMS Face Admin
          </span>
          <span>
            &nbsp; (contribution rate 100%) The app manages employee information, photo data of facial angles for CIVAMS Face timekeeping system
          </span> &nbsp; 
          <a target="_blank" rel="noreferrer" className="underline mt-4" href="https://youtu.be/9P2tSm4tupY">(Video demo)</a>
        </div>
        <div className="mt-4">
          <span className="font-semibold">
            CMC ID Card Reader
          </span>
          <span>
            &nbsp; (contribution rate 90%) The mobile SDK for reading and validating citizen identity information CMC CCCD SDK
          </span> &nbsp; 
          <a target="_blank" rel="noreferrer" className="underline mt-4" href="https://drive.google.com/file/d/1xzCaN6eX1xe2ihkV1n2jcAwxPmSPUDDG/view?usp=sharing">(Video demo)</a>
        </div>
        <div className="mt-4">
          <span className="font-semibold">
            S-OTP
          </span>
          <span>
            &nbsp; (contribution rate 100%) The app for generates a 2-Step Verification code on your phone.
          </span> &nbsp; 
        </div>
        <div className="mt-4">
          <span className="font-semibold">
            Livechat
          </span>
          <span>
            &nbsp; (contribution rate 100%) A website that connects users with chatbots and agents.
          </span> &nbsp; 
        </div>
        <div className="mt-4">
          <span className="font-semibold">
            CIVAMS Face Terminal
          </span>
          <span>
            &nbsp; (contribution rate 100%) The app for access control, online and offline facial recognition combined with time attendance.
          </span> &nbsp; 
        </div>
      </Content>

      <Content
        title="Awards"
        icon="fas fa-award"
      >
        <div>Best Performer of the Year 2020 - CMC CIST</div>
        <a target="_blank" rel="noreferrer" className="underline mt-4" href="https://drive.google.com/drive/folders/1J0CkqNbmYpPF2xw6PjQ9yKs43t_8ExG0?usp=sharing">My certificates</a>
      </Content>

      <Content
        title="Education"
        icon="fas fa-graduation-cap"
      >
        <div className="font-semibold">
          Hanoi University of Pharmacy
          </div>
        <div className="font-light italic">
          2012 - 2017
          </div>
        <div className="mt-4 font-light">Good graduation</div>
      </Content>
      <div className="pt-8"></div>
    </div>
  )
}

export default Home
