import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import isothing from '../public/isothing.png'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Andras Talas</title>
        <meta name="portfolio" content="Generated by create next app" />
      </Head>
      <main className='bg-white'>
      <div className={styles.pagesec1}>
        <div id="sidebar" className={styles.pagesec11}>
          <div>
            <div className={styles.sidebar}>
           
              <div className={styles.social}>
                <a href="https://github.com/ariaxhera" target={'_blank'} className={styles.git}>Github</a>
                <a target={'_blank'}  href="https://docs.google.com/document/u/4/d/e/2PACX-1vQVz6oKwYtteRJEbheJZ0DpDeHHfFbCSoMexglcKgycxUf7NhEV4J8AxtsHZtBo3AJO7CwVrSpv8KEJ/pub" className={styles.con}>Contact</a>
                <br></br>
                <h2 className={styles.projectit}>Projects</h2>
              </div>
              <div className={styles.project}>
                {/* <div className={styles.project1}> */}
                  {/* <div className={styles.posaka} /> */}
                  {/* <h3 className={styles.posakat}>osaka</h3> */}
                {/* </div> */}
                <div className={styles.project2}>
                  <div className={styles.ptype} />
                  <a href='https://gentle-nasturtium-41c834.netlify.app' target={'_blank'} className={styles.ptypet}>typewriter</a>
                </div>
              </div>
              <div className={styles.mwrap}>
              <div id="extension" className={styles.ext}>
              </div>
              <p className={styles.marg2}>15
                16
                17
                18
                19
                20
                21
                22
                23
                24
                25
                26
                27
                28
                29
                30
                31
                32
                33
                34
                35
                36
                37
                38
                39
                40
                41
                42
                43
                44
            </p>
            <p className={styles.marg1}>
              1
              2
              3
              4
              5
              6
              7
              8
              9
              10
              11
              12
              13
              14
              15
              16
              17
              18
              19
              20</p>    
              <p className={styles.marg3}>1
                2
                3
                4
                5
                6
                7 
                8
                9
                10
                11
                12
                13
                14
                15
                16
                17
                18
                19
                20
                21
                22
                23
                24
                25
                26
                27
                28
                29
                30
                31
                32
                33
                34
                35
                36
                37
                38
                39
                40
                41
                42
                43
                44
                45
                46
                47
                48
                49
                50
                51
                52
                53
                54
                55
                56
                57
                58
                59
                60
                61
                62
                </p>
            </div>
            </div> 
          </div>
          </div>
          <div className={styles.pagesec2}>
          <div className={styles.pagesec22}>
            <div id="header" className=''>
              <div id="title">
              <h1 className={styles.title}>Andras Talas</h1>
              </div>
                <div id="subtitle" className={styles.subtitle}>
                <h2 className={styles.subtitle1}>
                Frontend developer/ UX/UI Designer/ Artist</h2>
                <h2 className={styles.subtitle2}>(fuelled by coffee & vanilla tea)</h2>
                </div>
              </div>
            </div>
        <div id="sections">
          <div id="about" className={styles.aboutme}>
            <div>
              <h2 className={styles.aboutit}>About me</h2>
              <p className={styles.aboutp}>
              I am an aesthetics focused frontend
              developer with a background
              of illustration, graphic design and a fresh blend of idea
              inspiring vanilla tea.
              I am currently situated in Sweden where my spark for frontend
              design started after comitting all hours of my day to completing
              a responsive web design course followed by becoming a pilgrim of
              Javascripts’ endless documentation.
              I have a student learner mindset for I love learning, it keeps me
              grounded, focused and forever developing my craft. </p>
            </div>
          </div>
          <div id="imagecurrent" className={styles.icwrap}>
            <div id="fut" className={styles.current}>
            <h1 className={styles.currentit}>Currently working on</h1>
            <p className={styles.currentep}>
              A website inspired by retro style
              prints talking about the
              history of Osakaup until present day. With plans to expand by
              adding neighbouring cities/towns to the project to further
              research into their culture and history. I am taking up this 
              personal project as the Japanese Graphic designers that I follow
              have an incredible sense of colorwork and knowing how to make
              prints to be visually pleasing and enticing to the reader. 
              I am taking inspiriation from that and making a couple tribute
              pages to the histories of towns and/or cities within Japan.</p>
              </div>
              <div className={styles.img}>
            <Image src={isothing}  objectFit='contain' />
              </div>
          </div>
          <div id='future' className={styles.future}>
            <h1 className={styles.futuretit}>Future Projects</h1>
            <ul className={styles.futureli}>
              <li>Dark mode for this portfolio page.</li>
              <li>Open source terminal &
                  vscode color theme that will be available on github and the vscode marketplace.</li>
              <li>Pixel art illustrations gallery to store my pixel illustrations.</li>
              <li>Make the custom color scheme usable with Neovim.</li>
            </ul>
          </div>
          <div id='skills' className={styles.skills}>
            <h1 className={styles.skillstit}>Skills</h1>
            <ul className={styles.skillsli}>
              <li>Photoshop ~ 4+ years</li>
              <li>Figma ~ 1+ year</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
            <div id="color scheme">
            <div className={styles.colorscheme}>
                <div className={styles.cwrap}>
                  <div className={styles.colorschemecube1} />
                  <h3 className={styles.c1t}>Smoky black</h3>
                  </div>
                <div className={styles.cc1w}>
                  <div className={styles.colorschemecube2} />
                  <h3 className={styles.c2t}>Black chestnut oak (Kurotsurubami)</h3>
                </div>
                <div className={styles.cc2w}>
                  <div className={styles.colorschemecube3} />
                  <h3 className={styles.c3t}>Apricot</h3>
                </div>
                <div className={styles.cc3w}>
                  <div className={styles.colorschemecube4} />
                  <h3 className={styles.c4t}>Champagne</h3>
                </div>
                <div className={styles.cc4w}>
                  <div className={styles.colorschemecube5} />
                  <h3 className={styles.c5t}>Osaka Gold</h3>
                </div>
              </div> 
            </div>
            <div id="case study" className={styles.caseconta}>
              <div className={styles.case}>
                <h1 className={styles.casetit}>Case Study</h1>
                <h2 className={styles.casetit2}>(for those interested)</h2>
              </div>
              <p className={styles.casecont}>Every developer experiences
               the soul crushing chapter on their journey where they decide
               they need a portfolio website. Countless days, weeks, months designing
               and prototyping different ideas just to be left feeling empty or as if
               you have lost sight of the idea you had with the project. I definetely
               spent some time in this period of doubt and revising ideas constantly,
               thinking I am doing too little or too much.<br></br><br></br>Until I lost motivation in
               the project completely. However, a few days later I decided to let my
               creative self go on a tabloid sized page. Giving myself the oppertunity
               to do anything that speaks to me visually let me see the end goal once
               again, creating a new and much more purposeful spark of motivation. 
               It didn’t just appear out of nowhere however. This webpage may look
               like a notebook planner or a printed poster at times and the reason
               for that is because a large chunk of that newfound motivation came 
               from graphic designers that focused on print. Atliergrey being the 
               most influential of these as they led me through a long journey of 
               finding other graphic designers that visually spoke to me.</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h4 className={styles.footer}>made with next.js</h4>
      </footer>
    </div>
  )
}
